// start function
function game() {
    // Introduction to the game
    window.alert("Welcome to my simple shelving game. This will help you learn how to correctly shelve items at our libraries!");
 
    window.alert("In the library, every book has a call number. The call number is on the little white square on the bottom of the book's spine.\n \n For fiction books, the call number always start with 'FIC', and then the first 3 letters of the author's last name. \n \n For example, a book written by Neil Gaiman will have the call number 'FIC GAI'.");

    // Question 1 ----------------------------------------------------

        while (true) {
            let question1 = window.prompt("For a fiction book written by Naomi Novik, what would the call number be?");
            let upperQuestion1 = question1.toUpperCase();
            if (upperQuestion1 === "FIC NOV") {
                window.alert("Correct! Nice job!");
                break;
            } else {
                window.alert("Sorry, that is not the correct answer. Remember, call numbers for fiction books always start with 'FIC' and then the first 3 letters of the author's last name.");
            }
        }


    // Question 2 --------------------------------------------------

        while (true) {
            let question2 = window.prompt("What is the call number for a fiction book written by Patrick Rothfuss?");
            let upperQuestion2 = question2.toUpperCase();
            if (upperQuestion2 === "FIC ROT") {
                window.alert("Correct! One more question!");
                break;
            } else {
                window.alert("Sorry, that is not the correct answer. Remember, call numbers for fiction books always start with 'FIC' and then the first 3 letters of the author's last name.");
                break;
            }
        }


    // Question 3 --------------------------------------------------

        let question3 = window.prompt("What is the call number for a nonfiction book written by Terry Runyan?");
            let upperQuestion3 = question3.toUpperCase();
            if (upperQuestion3 === "751.422 RUN") {
                window.alert("HA! You caught my trick question! It is a nonfiction book, so it actually uses the Dewey Decimal system instead :)"); 
            } else {
                window.alert("HA! I caught you with my trick question O:)\n \n This is a nonfiction book, so it uses the Dewey Decimal System instead. We will learn about that later!");
            }
        }
game();