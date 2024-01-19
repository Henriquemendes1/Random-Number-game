alert('Welcome to the Random Number Game')
let maxNumber = 100
let secretNumber = parseInt(Math.random() * maxNumber + 1);
console.log(secretNumber);
let guess;
let attempt = 1;


while (guess != secretNumber) {
    guess = prompt(`Choose a number between 1 and ${maxNumber}`);
    
    if (guess == secretNumber) {
        break;
    } else {
        if (guess > secretNumber) {
            alert(`The secret number is smaller than ${guess}`);
        } else {
            alert(`The secret number is bigger than ${guess}`);
        }
        attempt++;
    }
}
//tentativas > 1 ? tentativas :(se não) tentativa
let wordTry = attempt > 1 ? 'attempts' : 'attempt';

alert(`That's right ! You discovered the secret number ${numeroSecreto} with ${attempt} ${wordTry}.`);