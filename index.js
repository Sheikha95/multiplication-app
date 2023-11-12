const num1 =Math.ceil(Math.random()*10)

const num2 =Math.ceil(Math.random()*10)

const questionEL= document.getElementById("question");
const inputEL= document.getElementById("input");
const formEL= document.getElementById("form");
const scoreEL= document.getElementById("score");
let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreEL.innerText=`score:${score}`
questionEL.innerText=`What is ${num1} muiltiply by ${num2}?`

const correctAns=num1*num2;

formEL.addEventListener("submit",()=>{
    const userAns=+inputEL.value
    if(userAns === correctAns){
        score++
        UPDateLocalStorage()

    }
    else
    {
        score--
        UPDateLocalStorage()
    }
})

function UPDateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}