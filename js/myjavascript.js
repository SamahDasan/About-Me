'use strict'
let userName=prompt("Enter Your Name");
alert("Wlcome"+" "+" "+userName+"  "+"  "+ "^_^" );


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
    
}