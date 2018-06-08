$(document).ready(function() {

    var letters = "abcdefghijklmnopqrstuvwxyz";
    var answer = letters[Math.floor(Math.random() * letters.length)];
    var wins = 0;
    var losses = 0;
    var left = 9;
    var guesses = [];
    updateDom();

    function updateDom(){
        document.querySelector("#wins").innerHTML = wins;
        document.querySelector("#losses").innerHTML = losses;
        document.querySelector("#left").innerHTML = left;
        document.querySelector("#guesses").innerHTML = guesses;
        document.querySelector("#answer").innerHTML = answer;
    }

    function newAnswer(){
        answer = letters[Math.floor(Math.random() * letters.length)]; 
        $("#guesses").empty();
        left = 9;
        updateDom();
    }

    document.onkeydown = function(event) {
        userKey = event.key.toLowerCase();
        left--;
        $("#guesses").append(userKey);
        checkMatch(userKey);
    }

    function checkMatch(userKey) {
        if (userKey === answer){
            wins++;
            $("#wins").text(wins)
            $("#winsdiv").addClass('animated flip');
            newAnswer();
        }
        else if (left === 0){
            losses++;
            $("#losses").text(losses);
            newAnswer();
        }
        else {
            $("#left").text(left);
        }
    }

});