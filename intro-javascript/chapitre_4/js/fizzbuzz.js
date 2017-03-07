for (var nbr = 1; nbr <= 100; nbr++) {
    if ((nbr % 3 === 0) && (nbr % 5 !== 0)){
        console.log("Fizz");
    } else if ((nbr % 5 === 0) && (nbr % 3 !== 0)) {
        console.log("Buzz");
    } else if ((nbr % 5 === 0) && (nbr % 3 === 0)) {
        console.log("Fizzbuzz");

    } else {
        console.log(nbr);
    }
}
