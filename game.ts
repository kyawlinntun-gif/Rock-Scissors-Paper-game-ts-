let data : [string, string, string] = ['Rock', 'Scissors', 'Paper'];

const play = (pickValue : string) => {
    let random : number = Math.floor(Math.random() * data.length);
    let randomValue : string = data[random];
    if(pickValue === 'Rock') {
        if(randomValue === 'Rock') {
            console.log("Play again!");
        } else if(randomValue === 'Scissors') {
            console.log("You win!");
        } else {
            console.log("You defeat!");
        }
        console.log(randomValue);
    } else if(pickValue === 'Scissors') {
        if(randomValue === 'Rock') {
            console.log("You defeat!");
        } else if(randomValue === 'Scissors') {
            console.log("Play again!");
        } else {
            console.log("You win!");
        }
        console.log(randomValue);
    } else {
        if(randomValue === 'Rock') {
            console.log("You win!");
        } else if(randomValue === 'Scissors') {
            console.log("You defeat!")
        } else {
            console.log("Play again!");
        }
        console.log(randomValue);
    }
}

play('Paper');