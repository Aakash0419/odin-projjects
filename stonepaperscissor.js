const ifcontains = (userchoices , availablechoices)=>{
    for(let i=0; i< availablechoices.length;i++){
        if(availablechoices[i].toLowerCase()===userchoices.toLowerCase()){
            return true;
        }
        
    }
    return false;
}
/*got some fixing to do*/
const  spc= () => {
    console.log("Start game");
    while(input!=quit){
    let choices = ["rock" , "paper" , "scissors"];
    let random = choices[Math.floor(Math.random()*choices.length)];
    /*getting random number from 1 to length of choice , then using floor function 
    on it to store and use as index for choices array*/ 
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
    input = window.prompt("Do u want to quit");
    input = input.toLowerCase();
    if(input!=quit){alert("invalid choice , continuing game"};
    }
}
spc();
