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
        image: ("assets/images/hawkins.jpg")
    }, {
        question: "What is the game that the boys are always playing?",
        answer: ["Super Mario Bros", "Legend of Zelda", "Dig Dug", "Dungeons & Dragons"],
        correct: "3",
        image: ("assets/images/DD.jpg")
    }, {
        question: "What is the name of the young girl who escapes from Hawkins Lab? ",
        answer: ["Eight", "Millie", "Eleven", "Nancy"],
        correct: "2",
        image: ("assets/images/eleven.jpg")
    }, {
        question: "Which one of the boys goes missing in the beginning of the series?",
        answer: ["Will", "Dustin", "Mike", "Lucas"],
        correct: "0",
        image: ("assets/images/will.jpg")
    }, {
        question: "What is the name of the police officer trying to find Will? ",
        answer: ["Byers", "Hopper", "Clarke", "Callahan"],
        correct: "1",
        image: ("assets/images/hopper.jpg")
    }, {
        question: "What is Eleven's superpower?",
        answer: ["Telepathy", "Mind Control", "Shape Shifting", "telekinesis"],
        correct: "3",
        image: ("assets/images/eleven2.jpg")
    }, {
        question: "How does Joyce Byers communicate with her son, Will?",
        answer: ["Telephone", "Alphabet Magents", "Christmas Lights", "Morse Code"],
        correct: "2",
        image: ("assets/images/joyce.jpg")
    }, {
        question: "What do the boys name the faceless creature terrorizing their town?",
        answer: ["The Thing", "The Monster", "Demogorgon", "Godzilla"],
        correct: "2",
        image: ("assets/images/demogorgon.jpg")
    }, {
        question: "Who kills the Demogorgon at the end of season 1?",
        answer: ["Will", "Eleven", "Steve", "Hopper"],
        correct: "1",
        image: ("assets/images/elevendemogorgan.jpg")
    }, {
        question: "What is Eleven's favorite food?",
        answer: ["Oreos", "Pop-Tarts", "Twinkies", "Eggos"],
        correct: "3",
        image: ("assets/images/eleveneggos.jpg")

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

    function loadQandA() {
        answered = false; 
        timeRemaining = 15;
        intervalID = setInterval(timer, 1000);
        if (answered === false) {
            timer();
        }
        correct = triviaGame[indexQandA].correct;
        let question = triviaGame[indexQandA].question;
        $('.question').html(question);
        for (let i = 0; i < 4; i++) {
            let answer = triviaGame[indexQandA].answer[i];
            $('.answers').append('<h4 class= answersAll id=' + i + '>' + answer + '</h4>');
        }

        $("h4").click(function () {
            let id = $(this).attr('id');
            if (id === correct) {
                answered = true; // stops the timer
                $('.question').text("Good job! You got it right!: " + triviaGame[indexQandA].answer[correct]);
                correctAnswer();
            } else {
                answered = true; //stops the timer
                $('.question').text("Oh no, wrong answer!: " + triviaGame[indexQandA].answer[id] + "Correct Answer: " + triviaGame[indexQandA].answer[correct]);
                incorrectAnswer();
            }
        });
    }


    function timer() {
        if (timeRemaining === 0) {
            answered = true;
            clearInterval(intervalID);
            $('.question').text("The correct answer is: " + triviaGame[indexQandA].answer[correct]);
            unAnswered();
        } else if (answered === true) {
            clearInterval(intervalID);
        } else {
            timeRemaining--;
            $('.timeRemaining').text('You have ' + timeRemaining + 'seconds to choose');
        }
    }

    function correctAnswer() {
        correctAnswers++;
        $('.timeRemaining').text("You answered correctly!").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    function incorrectAnswer() {
        incorrectAnswers++;
        $('.timeRemaining').text("You answered incorrectly!").css({
            'color': '#3D414F'
        });
        resetRound();

    }

    function unAnswered() {
        unansweredQuestions++;
        $('.timeRemaining').text("You didn't choose an answer").css({
            'color': '#3D414F'
        });
        resetRound();
    }

    $('.startButton').on("click", function () {
        $('.startButton');
        startGame();

    });

});