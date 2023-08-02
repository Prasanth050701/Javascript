function * generator()  
{  
yield 30;  
console.log('First Console');
yield 20;  
}  
// Call the  Function  
var mygen = generator();  
console.log(mygen.next().value);  
console.log(mygen.next().value);  
console.log(mygen.next().value); 