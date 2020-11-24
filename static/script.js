function ageinDays()
{
    var birthyear=prompt('What was the year you were born ?');
    var currYear=prompt('Whats the current year');

    var yourAge=(currYear-birthyear)*365;
    
    var h1=document.createElement('h1');
    var Answer=document.createTextNode('You are '+yourAge+' days old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(Answer);
    document.getElementById('flex-box-result').appendChild(h1); 



}
function reset()
{
    document.getElementById('ageinDays').remove();

}
function generateDog()
{
    var image=document.createElement('img');
    var div=document.getElementById('flex-dog-gen');
    image.src="https://dog.ceo/api/breeds/image/random.jpg";
    div.appendChild(image);
}
function rpsGame(yourSelection)
{
    console.log(yourSelection)
    var myChoice,comChoice;
    myChoice=yourSelection.id;
    comChoice=numberChoice(randomRps());
    console.log('Computer Selected',comChoice);
    
    
    results=decideWinner(myChoice,comChoice);
   console.log(results);
    message =finalMessage(results);
    rpsDisplay(myChoice.id,comChoice.id,message);

}

function randomRps()
{
    return Math.floor(Math.random()*3)
}
function numChoice(number)
{
    return['rock','paper','scissor'][number]

}
function winnerSelection(myChoice,botChoice){
    var dat={
      'rock':{'scissor':1,'rock':0.5,'paper':0},  
      'paper':{'rock':1,'paper':0.5,'scissor':0},
      'scissor':{'paper':1,'scissor':0.5,'rock':0},
    }

     var myScore = dat[myChoice][botChoice]
     var botScore = dat[myChoice][botChoice]

     return[myScore][botScore]
}

function finalMessage([myScore],[botChoice])
{ if(myChoice === 0)
    {
        return {'message':'You Lost!!','color':'red'};
    }
    else if(myChoice === 0.5)
    {
        return  {'message':'You Tied ','color':'yellow'}

    }
    else
    {
        return{'message':'You Won !!','color':'green'}
    }

}

function rpsDisplay(myImageChoice,comImageChoice,finalMessage){
    var imgdat={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src

    }
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissor').remove();

var humanDiv =document.createElement('div');
var botDiv =document.createElement('div');
var messageDiv =document.createElement('div');

humanDiv.innerHTML="<img src='"+ imgdat[myImageChoice] +"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
document.getElementById('flex-box-rps-div').appendChild(humanDiv);
botDiv.innerHTML="<img src='"+ imgdat[comImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba (243,38,24,1);'>"
document.getElementById('flex-box-rps-div').appendChild(botDiv);
messageDiv.innerHTML="<h1 style ='color:"+ finalMessage['color'] +";font-size:60px, padding:30px; '> "+ finalMessage['message'] +"</h1>"
document.getElementById('flex-box-rps-div').appendChild(messageDiv);

}
