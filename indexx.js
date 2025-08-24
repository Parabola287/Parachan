const startBtn=document.getElementById("startBtn")
const message=document.getElementById("message")
const loveQuestion=document.getElementById("loveQuestion")
const yesBtn=document.getElementById("yesBtn")
const noBtn=document.getElementById("noBtn")
const name=window.prompt("Enter your name")

startBtn.addEventListener("click",()=>{
    startBtn.style.display="none"
    message.textContent=`I love you,${name}😘 ❤  ` 
    
    setTimeout(()=>{
        loveQuestion.style.display="block"
    },800)
})
yesBtn.addEventListener("click",()=>{
    message.textContent=`I love you too,${name} 😊`
    loveQuestion.style.display="none"
})
noBtn.addEventListener("click",()=>{
    message.textContent=`You don't love  me ,i hate you,${name} 😭`
    loveQuestion.style.display="none"
})