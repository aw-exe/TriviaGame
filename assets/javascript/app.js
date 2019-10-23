$(document).ready(function () {
            //  trivia questions and answers

            let correctAnswers = 0;
            let incorrectAnswers = 0;
            let unansweredQuestions = 0;
            let timeRemaining = 15;
            let indexQandA = 0; //index of different questions for each round without resetting the game or refreshing the page
            let answered = false; //variable to stop the timer 
            var triviaGame = [{
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

            });