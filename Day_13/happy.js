// Create a function to transform num and check if it can be reduced  to 1
// Ex: happyAlgorithm(139) ➞ "HAPPY 5"
// Step 1: Transform 139
// 1² + 3² + 9² = 1 + 9 + 81 = 91
// Step 2: Transform 91
// 9² + 1² = 81 + 1 = 82

// Step 3: Transform 82
// 8² + 2² = 64 + 4 = 68

// Step 4: Transform 68
// 6² + 8² = 36 + 64 = 100

// Step 5: Transform 100
// 1² + 0² + 0² = 1 + 0 + 0 = 1


const happyAlgorithm = (num) => {
    let one = 1;
    let transforms = 0;
    let spl = num.toString().split("");
    if(num === 1) {
        console.log("Happy " + transforms);
        return "Happy " + transforms;
    } else if(num < 1) {
        console.log(num + " is false");
    } else {
        spl.map((number, i) => {
            let nu = parseInt(number);
            let arr = [];
            let mer = arr.push(nu);
            // console.log(nu);
            console.log(mer);
        });
    }
}

happyAlgorithm(139);