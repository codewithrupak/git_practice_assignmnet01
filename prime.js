function numcheck(num){
    let count = 0;
    for(let y = 0; y <= num; y++){
        if (num % y == 0){
            count++
        }
    }if (count == 2){
        console.log("is a prime number")
    }else{
        console.log("not a prime number")
    }
}numcheck(15)
// just check line number 5 and add count