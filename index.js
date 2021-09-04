const chalk= require("chalk");
var readline =require("readline-sync");

console.log("Welcome to quiz on popular show \"Doraemon \"");
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
    q:"Who is the only female character in the show whom nobita likes very much?\na)Ran\nb)Christine\nc)shizuka\nd)Miyoko",
    ans:"c"
  },
  {
    q:"What is the color of Dorami, Doraemon's sister?\na)pink\nb)orange\nc)purple\nd)yellow",
    ans:"d"
  },
  {
    q:"What is Gian passion?\na)dancing\nb)karate\nc)sumo\nd)singing",
    ans:"d",
  },
  {
  q:"What marks usuallly scored by nobita in tests?\na)100\nb)0\nc)25\nd)50",
  ans:"b"
  }
]
function ask(quest,answ,i)
{
  console.log("Question ",i,"\n",quest);
  var read=readline.question("\nAns :");
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
  console.log("Current score :",score,"\n_______________");
}

for(i=0;i<ques.length;i=i+1)
{
  ask(ques[i].q,ques[i].ans,i+1);
}

console.log("Final score :",score);
if(score<top[0].sc)
{
  console.log("You are not top scorer,Watch Doaremon its fun!....");
  console.log("Cureent top scorer:",top[0].name,"\n",top[0].name,"Score:",top[0].sc);
}
else
if(score===top[0].sc)
{
  console.log("You are also one of the top scorer");
}
else
{
  console.log("Congrats!,You score top in the list,Cartooniee.");
}
console.log("Thank You for playing...................")