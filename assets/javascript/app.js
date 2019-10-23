$(document).ready(function () {
            //  trivia questions and answers

            let correctAnswers = 0;
            let incorrectAnswers = 0;
            let unansweredQuestions = 0;
            let timeRemaining = 15;
            let indexQandA = 0; //index of different questions for each round without resetting the game or refreshing the page
            let answered = false; //variable to stop the timer 
            triviaGame = [{
                question: "What is the name of the fictional town where Stanger Things takes place?",
                answer: ["Storybrooke", "Hawkins", "Derry", "Arnette"],
                correct: "1",
                image: ("<insert image here>")
            }, {
                question: "What is the game that the boys are always playing?",
                answer: ["Super Mario Bros", "Legend of Zelda", "Dig Dug", "Dungeons & Dragons"],
                correct: "3",
                image: ("<insert image here>")
            }, {
                question: "What is the name of the young girl who escapes from Hawkins Lab? ",
                answer: ["Eight", "Millie", "Eleven", "Nancy"],
                correct: "2",
                image: ("<insert image here>")
            }, {
                question: "Which one of the boys goes missing in the beginning of the series?",
                answer: ["Will", "Dustin", "Mike", "Lucas"],
                correct: "0",
                image: ("<insert image here>")
            }, {
                question: "What is the name of the police officer trying to find Will? ",
                answer: ["Byers", "Hopper", "Clarke", "Callahan"],
                correct: "1",
                image: ("<insert image here>")
            }, {
                question: "What is Eleven's superpower?",
                answer: ["Telepathy", "Mind Control", "Shape Shifting", "telekinesis"],
                correct: "3",
                image: ("<insert image here>")
            }, {
                question: "How does Joyce Byers communicate with her son, Will?",
                answer: ["Telephone", "Alphabet Magents", "Christmas Lights", "Morse Code"],
                correct: "2",
                image: ("<insert image here>")
            }, {
                question: "What do the boys name the faceless creature terrorizing their town?",
                answer: ["The Thing", "The Monster", "Demogorgon", "Godzilla"],
                correct: "2",
                image: ("<insert image here>")
            }, {
                question: "Who kills the Demogorgon at the end of season 1?",
                answer: ["Will", "Eleven", "Steve", "Hopper"],
                correct: "1",
                image: ("<insert image here>")
            }, {
                question: "What is Eleven's favorite food?",
                answer: ["Oreos", "Pop-Tarts", "Twinkies", "Eggos"],
                correct: "3",
                image: ("<insert image here>")

            }];


            //functions


            function startGame() {
                console.log("game has begun");
                $('.start-button').remove();
                correctAnswers = 0;
                incorrectAnswers = 0;
                unansweredQuestions = 0;
                loadQandA();
            }
        
            // function loadQandA() {
            //     answered = false; // will allow timeRemaining to be pushed back to <h5> after round reset....else statement in function timer()
            //     timeRemaining = 16;
            //     intervalID = setInterval(timer, 1000);
            //     if (answered === false) {
            //         timer();
            //     }
            //     correct = triviaGame[indexQandA].correct;
            //     var question = triviaGame[indexQandA].question;
            //     $('.question').html(question);
            //     for (var i = 0; i < 4; i++) {
            //         var answer = triviaGame[indexQandA].answer[i];
            //         $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
            //     }
        
            //     $("h4").click(function () {
            //         var id = $(this).attr('id');
            //         if (id === correct) {
            //             answered = true; // stops the timer
            //             $('.question').text("THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            //             correctAnswer();
            //         } else {
            //             answered = true; //stops the timer
            //             $('.question').text("YOU CHOSE: " + triviaGame[indexQandA].answer[id] + ".....HOWEVER THE ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            //             incorrectAnswer();
            //         }
            //     });
            // }
        
            // function timer() {
            //     if (timeRemaining === 0) {
            //         answered = true;
            //         clearInterval(intervalID);
            //         $('.question').text("THE CORRECT ANSWER IS: " + triviaGame[indexQandA].answer[correct]);
            //         unAnswered();
            //     } else if (answered === true) {
            //         clearInterval(intervalID);
            //     } else {
            //         timeRemaining--;
            //         $('.timeRemaining').text('YOU HAVE ' + timeRemaining + ' SECONDS TO CHOOSE');
            //     }
            // }
        
            // function correctAnswer() {
            //     correctAnswers++;
            //     $('.timeRemaining').text("YOU HAVE ANSWERED CORRECTLY!").css({
            //         'color': '#3D414F'
            //     });
            //     resetRound();
            // }
        
            // function incorrectAnswer() {
            //     incorrectAnswers++;
            //     $('.timeRemaining').text("YOU HAVE ANSWERED INCORRECTLY!").css({
            //         'color': '#3D414F'
            //     });
            //     resetRound();
        
            // }
        
            // function unAnswered() {
            //     unansweredQuestions++;
            //     $('.timeRemaining').text("YOU FAILED TO CHOOSE AN ANSWER").css({
            //         'color': '#3D414F'
            //     });
            //     resetRound();
            // }
        
            // function resetRound() {
            //     $('.answersAll').remove();
            //     $('.answers').append('<img class=answerImage width="150" height="150" src="' + triviaGame[indexQandA].image + ' ">'); // adds answer image
            //     indexQandA++; // increments index which will load next question when loadQandA() is called again
            //     if (indexQandA < triviaGame.length) {
            //         setTimeout(function () {
            //             loadQandA();
            //             $('.answerImage').remove();
            //         }, 5000); // removes answer image from previous round
            //     } else {
            //         setTimeout(function () {
            //             $('.question').remove();
            //             $('.timeRemaining').remove();
            //             $('.answerImage').remove();
            //             $('.answers').append('<h4 class= answersAll end>CORRECT ANSWERS: ' + correctAnswers + '</h4>');
            //             $('.answers').append('<h4 class= answersAll end>INCORRECT ANSWERS: ' + incorrectAnswers + '</h4>');
            //             $('.answers').append('<h4 class= answersAll end>UNANSWERED QUESTIONS: ' + unansweredQuestions + '</h4>');
            //             setTimeout(function () {
            //                 location.reload();
            //             }, 7000);
            //         }, 5000);
            //     }
            // };
        
            $('.startButton').on("click", function () {
                $('.startButton');
                startGame();
        
            });
        
        });