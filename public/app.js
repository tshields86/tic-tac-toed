document.addEventListener("DOMContentLoaded", function() {
    var turn = 0;
    var winner = false;
    var td = document.getElementsByClassName("td");
    var clear = document.getElementById("clear");
    var status = document.getElementById("status");
    var combos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < td.length; i += 1) {
        td[i].addEventListener("click", function() {
            if (this.innerText === "" && winner === false) {
                document.getElementById("status").innerText = "Go Player " + getWinner();
                if (winner !== true) {
                    this.innerText = alternate();
                    this.className = this.className + " " + alternate();
                    turn += 1;
                    winningCombos();
                    if (turn === 9 && winner === false) {
                        document.getElementById("status").innerText = "TIE";
                        document.getElementById("clear").style.visibility = "initial";
                        document.getElementById("clear").style.opacity = "1"
                    }
                }
            }
        })
    }
    clear.addEventListener("click", function() {
        for (var i = 0; i < td.length; i += 1) {
            td[i].innerText = "";
            td[i].classList.remove("X");
            td[i].classList.remove("O");
            turn = 0;
            document.getElementById("clear").style.opacity = "0";
            document.getElementById("clear").style.visibility = "hidden";
            document.getElementById("status").innerHTML = "Let's Play &mdash; Go Player X";
            winner = false
        }
    });
    var alternate = function() {
        if (turn % 2) {
            return "O"
        } else {
            return "X"
        }
    }
    ;
    var getWinner = function() {
        if (turn % 2) {
            return "X"
        } else {
            return "O"
        }
    }
    ;
    var winningCombos = function() {
        if (winner !== true) {
            for (var i = 0; i < combos.length; i += 1) {
                if (td[combos[i][0]].innerText !== "" && td[combos[i][0]].innerText === td[combos[i][1]].innerText && td[combos[i][0]].innerText === td[combos[i][2]].innerText) {
                    document.getElementById("clear").style.visibility = "initial";
                    document.getElementById("clear").style.opacity = "1";
                    winner = true;
                    document.getElementById("status").innerText = "Player " + getWinner() + " wins";
                    document.getElementById("status").style.opacity = "1"
                }
            }
        }
    }
});
