'use strict'



let userName=prompt("Enter Your Name");
if (userName !=null)
{alert("Wlcome"+" "+" "+userName+"  "+"  "+ "^_^" );
}
/*yesno();*/

alert ('Lets Start Maths Game');
numbersGame();
alert ('Another guess number game');
game2();


function numbersGame(){
let num;
let i=1;
while( i<=7 ){
num=prompt('Enter a number grater or less than 25');
if (num<25 && num !=null)      
alert('too low');
else if (num>25 && num !=null)alert('too high');
i++;}    
 alert("Refresh Page You Had all attepmts");}



function yesno()
{
    var question1=prompt("Answer About the question by Yes,No ,Y,N \n iS my name is Samah ?");
    if(question1.toLowerCase()=="YES".toLowerCase() || question1.toLowerCase()=="Y".toLowerCase() || question1.toLowerCase()=="NO".toLowerCase() || question1.toLowerCase()=="N".toLowerCase())
    var question2=prompt("Do I like healty food ?");
    else { 
        alert("You Must Enter : yes,no ,y or n no case sensitive Start Agin"); 
        yesno();
    }
    if(question2.toLowerCase()=="YES".toLowerCase() || question2.toLowerCase()=="Y".toLowerCase() || question2.toLowerCase()=="NO".toLowerCase() || question2.toLowerCase()=="N".toLowerCase())
    var question3=prompt("Am I married");
    else  { 
        alert("You Must Enter : yes,no ,y or  n no case sensitive Start Agin");
        yesno();}
    if(question3.toLowerCase()=="YES".toLowerCase() || question3.toLowerCase()=="Y".toLowerCase() || question3.toLowerCase()=="NO".toLowerCase() || question3.toLowerCase()=="N".toLowerCase())
    var question4=prompt("Do I have Children ?");
    else  { 
        alert("You Must Enter : yes,no ,y or n no case sensitive Start Agin");
        yesno();}
    if(question4.toLowerCase()=="YES".toLowerCase() || question4.toLowerCase()=="Y".toLowerCase() || question4.toLowerCase()=="NO".toLowerCase() || question4.toLowerCase()=="N".toLowerCase())
    var question5=prompt("Do i have a carr ?");
    if(question5.toLowerCase()=="YES".toLowerCase() || question5.toLowerCase()=="Y".toLowerCase() || question5=="NO".toLowerCase() || question5.toLowerCase()=="N".toLowerCase())
   alert("Fine You Answered All Right &hearts;");
    else  { 
        alert("You Must Enter : yes,no ,y or n no case sensitive  Start Agin");
    }
    alert ('You Have Answered Well ');
}


function game2(){
    let guess;
    for (i=1;i<=7;i++)
    {
      guess= prompt('GUESS a number');
      if (guess != 1 || guess !=2  || guess !=3)
      {
          alert('Wrong , this is attempt '+'  '+ i);
      } 
    }
}