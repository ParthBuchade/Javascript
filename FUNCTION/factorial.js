function fact(num){
    fact = 1;
    if(num == 0)
        return 1;
    for(i=1;i<=num;i++){
        fact = fact*i;
    }
    return fact;
}
c = fact(10)
console.log(c);