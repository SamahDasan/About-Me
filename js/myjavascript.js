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
/*num=prompt('Guess A number value Between 20 and 25');
if (num==25) alert('Yes the secret number is 25 ^_^');*/
//if (num !=25 && num !=null)
while( i<=4 ){
    num=prompt('Enter Number Value Between 20 and 25');
    if (num==25){alert('Yes My Secret Number is 25 ^_^');break;}
    else if (num <25 && num !=null )      
    alert('too low');
    else if (num>25 && num !=null)alert('too high');
    i++;
    }    




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
    
       var questions=['What place I preferred to visit Italy or Britin or Japan ??',
        'What Kinds Of Food I preferred healthy,spicy,sweety',
        'What is My Hoppy ?  painting or swimming or animating',
        'what type of movies i preferred ? comedy,horror or action',
         'Waht type of books i preferred ? Novel , Science or History',
            'What is My Favourite Perfume Brands ? Lancome, Guccie or Channel',
            'What Colors I like ? Red, blue or green'];
        var answeres1=['italy','britin','japan'];
        var answeres2=['healty','spicy'];
        var answeres3=['painting','animating'];
        var answeres4=['comedy','horror'];
        var answeres5=['Science','History'];
        var answeres6=['lancome','guccie'];
        var answeres6=['red ', 'blue'];
        let a;
        let i=1;
        let sum =0;
            a=prompt(questions[i]).toLowerCase();
            if (a!=answerse1[0] || a!=answerse1[1] ||a!=answerse1[2] )
            while(i<=7){
                alert('try again') ;
                a=prompt(questions[i]).toLowerCase();
                if (a==answerse1[0] || a ==answerse1[1] ||a ==answerse1[2])
                {sum=sum+1;
                break;
                }
                i++;
            }
        }
