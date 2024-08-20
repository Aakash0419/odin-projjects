// let game = parseInt(prompt("Enter a limit"));
// for(let i= 0 ; i< game;i++){
//     let fiz = parseInt(prompt("enter a number"));
//     if(fiz%5===0&&fiz%3===0){
//         console.log("FizzBuzz\n");
//     }
//     else if(fiz%5===0){
//         console.log("Buzz\n");
//     }
//     else if(fiz%3===0){
//         console.log("Fizz\n");
//     }
//     else console.log(`${fiz}\n`);
// }
// alert("ayo wtf");
const ifcontains = (userchoices , availablechoices)=>{
    for(let i=0; i< availablechoices.length;i++){
        if(availablechoices[i].toLowerCase()===userchoices.toLowerCase()){
            return true;
        }
        else false;
    }
}
const  spc= () => {
    let choices = ["rock" , "paper" , "scissors"];
    let random = choices[Math.floor(Math.random()*choices.length)];
    let userchoice = prompt("Enter a user choice");
    if(!ifcontains(userchoice,choices)){
        console.log("Invalid choice");
        spc();
    }
    userchoice = userchoice.toLowerCase();
    
    
    

    console.log(`Your choice:${userchoice}\t Computer's choice:${random}`);

    if (random===userchoice){
        console.log("try again");
        spc();
    }

    else if ((random === "rock" && userchoice === "paper") || (random === "paper" && userchoice === "scissor") || (random === "scissor" && userchoice === "rock")) {
        console.log("You wins");
    }
    
    else {
        console.log("computer wins");
    }


}
spc();