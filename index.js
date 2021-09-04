const chalk= require("chalk");
var readline =require("readline-sync");

console.log("Welcome to Game \"How better u know me\"");
var name=readline.question("Enter Your Name :");
console.log("Welcome ",name,"!.....\n");
score =0;
top=[
  {
    name:"Raj",
    sc:3
  },
  {
    name:"kaj",
    sc:2
  }
]
ques=[
  {
    q:"What is my age? :",
    ans:"23"
  },
  {
    q:"Which sport i like? :",
    ans:"cricket"
  },
  {
    q:"What is my dog name? :",
    ans:"Don't have dog",
  },
  {
  q:"I vaccinated with 2 doses? :",
  ans:"yes"
  },
  {
    q:"I live in which country at present? :",
    ans:"india",
    act:"Past,Present in India."
  }
]
function ask(quest,answ,i)
{
  console.log("Question ",i);
  var read=readline.question(quest);
  if(read.toUpperCase()==answ.toUpperCase())
  {
    console.log("Yes,you are "+chalk.green("Right!..."));
    score=score+1;
  }
  else
  {
    console.log(chalk.red("Wrong!.."));
    if(i==5)
     console.log("Actual answer :",ques[i-1].act);
    else  
    console.log("Actual answer :",answ);
    score=score-1;
  }
  console.log("Current score :",score,"\n_______________\n");
}

for(i=0;i<ques.length;i=i+1)
{
  ask(ques[i].q,ques[i].ans,i+1);
}

console.log("Final score :",score);
if(score<top[0].sc)
{
  console.log("You are not top scorer,Lets meet!...");
  console.log("Cureent top scorer:",top[0].name,"\n",top[0].name,"Score:",top[0].sc);
}
else
if(score===top[0].sc)
{
  console.log("You are also one of the top scorer");
}
else
{
  console.log("Congrats!,You score top in the list,Stop knowing more about me now.");
}
console.log("Thank You for playing...................")