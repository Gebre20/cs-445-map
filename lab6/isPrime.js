async function isPrime(num){
    for (let i = 2, s = Math.sqrt(num); i <= s; i++){
        if (num % i === 0){
            return `{prime: false}`;
        } 
    }
    return `{prime: true}`;    
}

async function isPrimeAsync() {
    let result = await isPrime(7);
    console.log(result);
}
console.log('start');
isPrimeAsync(7);
console.log('end');