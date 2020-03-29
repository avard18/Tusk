///////////1//////////////////         
//let a= +prompt("a")    ;
//let b=+prompt("b")    ;
//let c=alert(a+b  )   ;

////////////////2///////////////////
/*let a= +prompt("a")    ;
let b=+prompt("b")    ;
for (i=a;i<=b;i++){
    if (i%2==1){
        console.log(i)  ;
    }
}*/

///////////////3////////////////////
/*let a=+prompt("a")    ;
let b=+prompt("b")    ;
let c=+prompt("c")  ;

if (a>b && a>c) {
    console.log("max="+a)    ;
}
else if (b>a && b>c){
    console.log("max="+b)    ;   
}
else   console.log("max="+c)    ;
*/

////////////////4//////////////
/*let a=+prompt("a")    ;
let b=+prompt("b")    ;
let c=+prompt("c")    ;
let max     ;
if (a>b && a>c && b>c) {
    console.log(a, b, c)    ;
}
else if (b>a && b>c && a>c){
    console.log(b, a, c)    ; 

}
else if  (b>a && b>c && a<c){
    console.log(b, c, a)    ; 
}
else if  (b>a && b>c && a<c){
    console.log(b, c, a)    ; 
}
else if  (c>a && c>b && b>a){
    console.log(c, b, a)    ; 
}
else console.log(c, a, b)*/

////////////////5///////////////////
/*let b=+prompt("b")    ;
let c=1 ;
while (b>0) {
    c*=b--; 
        ;
}
console.log(c)  ;*/
//////////////////6////////////////////
let b=+prompt("b");
for(i=0;i<=b;i++){
    let s=1;
    let q =(s+i);
    console.log(q+s)
}