var player1name = localStorage.getItem("player_1");
var player2name = localStorage.getItem("player_2");

var player1score = 0;
var player2score = 0;

document.getElementById("player1name").innerHTML = player1name + ": ";
document.getElementById("player2name").innerHTML = player2name + ": ";

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("questionturn").innerHTML = "Question Turn: " + player1name;
document.getElementById("answerturn").innerHTML = "Answer Turn: " + player2name;

function send() {

    var get_word = document.getElementById("word").value;

    word = get_word.toLowerCase();
    if (word != "") {


        var c1 = word.charAt(1);

        var lby2 = Math.floor(word.length / 2);
        var c2 = word.charAt(lby2);

        var last = word.length - 1;
        var c3 = word.charAt(last);

        var remove_c1 = word.replace(c1, "_");
        var remove_c2 = remove_c1.replace(c2, "_");
        var remove_c3 = remove_c2.replace(c3, "_");

        question_word = "<h4 id='question_word'>Q. " + remove_c3 + "</h4>";
        input_box = "<br>Answer: <input type='text' id='answer'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>CHECK</button>";
        row = question_word + input_box + check_button;

        document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";
    }
    else {
        document.getElementById("word").placeholder = "Please type your word here.";
    }
}
question_turn = "player_1";
answer_turn = "player_2";

function check() {

    get_answer = document.getElementById("answer").value;
    answer = get_answer.toLowerCase();

    if (answer != "") {
        if (answer == word) {

            if (question_turn == "player_1") {
                player1score = player1score + 1;
                document.getElementById("player1score").innerHTML = player1score;
            }
            else {
                player2score = player2score + 1;
                document.getElementById("player2score").innerHTML = player2score;
            }


            if (question_turn == "player_1") {
                question_turn = "player_2";
                document.getElementById("questionturn").innerHTML = "Question Turn: " + player2name;
            }
            else if (question_turn == "player_2") {
                question_turn = "player_1";
                document.getElementById("questionturn").innerHTML = "Question Turn: " + player1name;
            }

            if (answer_turn == "player_1") {
                answer_turn = "player_2";
                document.getElementById("answerturn").innerHTML = "Answer Turn: " + player2name;
            }
            else if (answer_turn == "player_2") {
                answer_turn = "player_1";
                document.getElementById("answerturn").innerHTML = "Answer Turn: " + player1name;
            }
            document.getElementById("output").innerHTML="";
            
        }

    }
    else {
        document.getElementById("answer").placeholder = "Please type an answer.";
    }
}