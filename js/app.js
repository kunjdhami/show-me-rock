var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user_score");
var computerScore_span = document.getElementById("computer_score");
var scoreBoard_div = document.querySelector(".score_board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var reset_div = document.getElementById("reset");
var k=0;
var count=0;
var z=55;

var x = prompt("How many times do you wanna play","5");
if(x!=null){    
    z = x;    
}
//alert(z);

function getComputerChoice()
{
    var choices = ['r', 'p', 's'];
    var randomNumber = Math.floor(Math.random() * 3);
    //console.log(randomNumber);
    return choices[randomNumber];
}
//console.log(getComputerChoice());

function convert(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    userScore++;
    //console.log("win");
    //console.log(userScore);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var userChoice_div = document.getElementById(userChoice);
    var smalluserword = "user".fontsize(3).sub();
    var smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${smalluserword} beats ${convert(computerChoice)}${smallcompword}. You win!`;
    //document.getElementById
    userChoice_div.classList.add('green_glow');
    setTimeout(() => userChoice_div.classList.remove('green_glow') , 300);
    
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    var userChoice_div = document.getElementById(userChoice);
    var smalluserword = "user".fontsize(3).sub();
    var smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convert(computerChoice)}${smallcompword} beats ${convert(userChoice)}${smalluserword}. You lost...`;
    userChoice_div.classList.add('red_glow');
    setTimeout(() => userChoice_div.classList.remove('red_glow') , 300);
}

function draw(userChoice, computerChoice){
    k++;
    //userScore_span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    var userChoice_div = document.getElementById(userChoice); 
    var smalluserword = "user".fontsize(3).sub();
    var smallcompword = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convert(userChoice)}${smalluserword} equals ${convert(computerChoice)}${smallcompword}. It's a draw`;
    userChoice_div.classList.add('grey_glow');
    setTimeout(() => userChoice_div.classList.remove('grey_glow') , 300);
    
}


function game(userChoice)
{
     //console.log(userChoice);
    if(count<z){
        count++;
     var computerChoice = getComputerChoice();
     //console.log("comp-->" + computerChoice);
     //console.log("user-->" + userChoice);
     switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            //console.log("User wins");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            //console.log("User loses");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            //console.log("Its a draw");
            break;
      }
    //console.log(userScore+computerScore+k);
    }
    else{
        result_p.innerHTML = "Game over"+"....please click on Reset";

    }
}

function kunj(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    count = 0;
    z = prompt("How many times do you wanna play","5");    
}

function main()
{
    
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));

    reset_div.addEventListener('click', () => kunj());
    //console.log(userScore+computerScore+k);
    
}

main();
