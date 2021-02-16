'use strict'
let userName=prompt("Enter Your Name");
alert("Wlcome"+" "+" "+userName);
info();

function info(){
let myName =prompt("Whats My Name ?");
let myAge = prompt("How Old Is Me ?");
let myFavouritColor = prompt("What is my favourite color ?");
let myFavouritChips = prompt("Whats My Favourite Food ?")
}

function yesno()
{
    var question1=prompt("Answer About the question by Yes,No ,Y,N \n Ar You Married ?");
    if(question1.toLowerCase()=="YES".toLowerCase() || question1.toLowerCase()=="Y".toLowerCase() || question1.toLowerCase()=="NO".toLowerCase() || question1.toLowerCase()=="N".toLowerCase())
    var question2=prompt("Do You Have Achildren ?");
    else { 
        alert("You Must Enter : yes,no ,y or n no case sensitive"); 
        yesno();
    }
    if(question2.toLowerCase()=="YES".toLowerCase() || question2.toLowerCase()=="Y".toLowerCase() || question2.toLowerCase()=="NO".toLowerCase() || question2.toLowerCase()=="N".toLowerCase())
    var question3=prompt("Do You have more than one children?");
    else  { 
        alert("You Must Enter : yes,no ,y or  n no case sensitive");
        yesno();}
    if(question3.toLowerCase()=="YES".toLowerCase() || question3.toLowerCase()=="Y".toLowerCase() || question3.toLowerCase()=="NO".toLowerCase() || question3.toLowerCase()=="N".toLowerCase())
    var question4=prompt("Do You Have A job ?");
    else  { 
        alert("You Must Enter : yes,no ,y or n no case sensitive");
        yesno();}
    if(question4.toLowerCase()=="YES".toLowerCase() || question4.toLowerCase()=="Y".toLowerCase() || question4.toLowerCase()=="NO".toLowerCase() || question4.toLowerCase()=="N".toLowerCase())
    var question5=prompt("Do You Have A house ?");
    if(question5.toLowerCase()=="YES".toLowerCase() || question5.toLowerCase()=="Y".toLowerCase() || question5=="NO".toLowerCase() || question5.toLowerCase()=="N".toLowerCase())
   alert("Fine You Answered All Right &hearts;");
    else  { 
        alert("You Must Enter : yes,no ,y or n no case sensitive");
    }
    
}