function factorial (nr) {
    console.log(nr);
    if (nr === 0) {
        return 1
    } else {
        return nr * factorial (--nr);
    }

}
console.log(factorial(15));

/* OutPut
15
14
13
12
11
10
9 
8 
7
6
5
4
3
2
1
0
1307674368000  */ // All factor are multiplied and gives answer