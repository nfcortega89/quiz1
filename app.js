$(document).ready(function() {
    $('#start').on('click', function() {
        $('.intro').fadeOut(1000);
        $('.test').fadeIn(1000);
    })
    var questions = [{
        pic: "images/vader.jpeg",
        choices: ["Kylie Jenner", "Anakin Skywalker", "Tony Montana", "Kanye West"],
        correct: 1
    }, {
        pic: "images/ironman.jpeg",
        choices: ["Rick Ross", "Stevie Wonder", "Kanye West", "Iron Man"],
        correct: 3
    }, {
        pic: "images/mario.png",
        choices: ["Mario", "Kanye West", "Tyga", "John Hancock"],
        correct: 0
    }, {
        pic: "images/cloud.jpg",
        choices: ["Kanye West", "John Travolta", "Gerarld Butler", "Cloud"],
        correct: 3
    }, {
        pic: "images/rick.jpg",
        choices: ["Stone Cold Steve Austin", "Rick & Morty", "Tom & Jerry", "Kanye West"],
        correct: 1
    }, {
        pic: "images/stewie.jpg",
        choices: ["Lady Gaga", "Kanye West", "Johnny Depp", "Stewie Griffin"],
        correct: 3
    }, {
        pic: "images/bender.jpg",
        choices: ["Kanye West", "Captain America", "Ash", "Bender"],
        correct: 3
    }, {
        pic: "images/goku.jpg",
        choices: ["Mr. Miyagi", "Empress Bukake", "Son Goku", "Kanye West"],
        correct: 2
    }, {
        pic: "images/pikachu.png",
        choices: ["Satan", "Kanye West", "Hypnotoad", "Pikachu"],
        correct: 3
    }, {
        pic: "images/kanye.jpg",
        choices: ["Mr. West", "Kanye West", "Yeezy", "Pablo"],
        correct: 1
    }]

    var numberCorrect = 0;
    var currentQuestion = 0;

    $('#submit').on('click', function() {
        checkAnswer();
         currentQuestion++;
        nextQuestion();
       
    })

    function checkAnswer() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            console.log("You got it!");
            numberCorrect++;
        } else {
            console.log("Incorrect!");

        }
    };

    function nextQuestion() {
        if (currentQuestion < 10) {
            $('.answer0').text(questions[currentQuestion].choices[0]);
            $('.answer1').text(questions[currentQuestion].choices[1]);
            $('.answer2').text(questions[currentQuestion].choices[2]);
            $('.answer3').text(questions[currentQuestion].choices[3]);
            $('.pic').attr('src', questions[currentQuestion].pic);
        } else if(currentQuestion = 10){
            alert("You got " + numberCorrect +" correct out of 10 questions!");
        }
    }
})
