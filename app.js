// SINGLE STATE OBJECTS
// create variable called state which has an items property with an empty array 
var state = {
    questions: [],
    position: 0,
    numberCorrect: 0
};

// FUNCTIONS THAT MODIFY STATE
// create a variable called addItem that takes "state" and "item" as arguments;
var addQuestion = function(state, questions) {
    // we'll want to push our item in our ITEMS array
    // state.questions.push(question)
    state.questions = questions
};
// we create a constructor function for our Questions
var Question = function(pic, choices, correct) {
    this.pic = pic;
    this.choices = choices;
    this.correct = correct;
};
// create a variable called questions which has an array of objects where we use Question constructor
var questions = [
    new Question("images/vader.jpeg", ["Kylie Jenner", "Anakin Skywalker", "Tony Montana", "Kanye West"], 1),
    new Question("images/ironman.jpeg", ["Rick Ross", "Stevie Wonder", "Kanye West", "Iron Man"], 3),
    new Question("images/mario.png", ["Mario", "Kanye West", "Tyga", "John Hancock"], 0),
    new Question("images/cloud.jpg", ["Kanye West", "John Travolta", "Gerarld Butler", "Cloud"], 3),
    new Question("images/rick.jpg", ["Stone Cold Steve Austin", "Rick & Morty", "Tom & Jerry", "Kanye West"], 1),
    new Question("images/stewie.jpg", ["Lady Gaga", "Kanye West", "Johnny Depp", "Stewie Griffin"], 3),
    new Question("images/bender.jpg", ["Kanye West", "Captain America", "Ash", "Bender"], 3),
    new Question("images/goku.jpg", ["Mr. Miyagi", "Empress Bukake", "Son Goku", "Kanye West"], 2),
    new Question("images/pikachu.png", ["Satan", "Kanye West", "Hypnotoad", "Pikachu"], 3),
    new Question("images/kanye.jpg", ["Mr. West", "Kanye West", "Yeezy", "Pablo"], 1)
];

var quiz = addQuestion(state, questions);


// FUNCTION THAT RENDERS THE STATE
var renderImage = function(state, element) {

    var result = $('.quiz-template').clone();
    var imageElement = result.find('img');
    imageElement.attr('src', state.questions[state.position].pic);
    element.html(imageElement);
}

var renderChoices = function(state, element) {
    var html = "";
    for(var i = 0; i < state.questions[state.position].choices.length; i++){
        html += "<li><input type='radio' value='"+ i + "'>" + state.questions[state.position].choices[i] + "</li>";
    }
    console.log(html);
    element.append(html);
}


// EVENT LISTNERS
$('.start').on('click',function(e){
    e.preventDefault();
    console.log(state);
    var imagesElement = $('.image-container');
    renderImage(state, imagesElement);
     var choicesElement = $('.quiz');
        renderChoices(state, choicesElement);
        $('.start').hide();
        $('.next').show();
        $('h1').text("Who am I?");
        $('.image-container').show();
})
$('button.next').on('click', function(e) {
    e.preventDefault();

    // check if answer is correct
    var answer = $('input[type="radio"]:checked').val();
    if(state.questions[state.position].correct == answer){
        state.numberCorrect++;
    }

    state.position++;
    if (state.position > 9) {
        alert("You got " + state.numberCorrect + " correct!");

    } else {
        var imagesElement = $('.image-container');
        renderImage(state, imagesElement)
        var choicesElement = $('.quiz');
        renderChoices(state, choicesElement);
    }
})
