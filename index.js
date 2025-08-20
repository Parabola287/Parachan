const Click =document.getElementById("Clickbtn")
const username=window.prompt("Enter your name")

Click.addEventListener("click",event=>{
    event.target.style.backgroundColor="tomato"
    Click.textContent= `I love you,${username} 😆`

})
