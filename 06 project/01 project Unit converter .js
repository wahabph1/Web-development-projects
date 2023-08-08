console.log("hello:")
let fee= document.getElementById("feet");
let inch = document.getElementById("inch")

fee.addEventListener("input",function(){
  let f= this.value;
  let i = f*12;
  inch.value = i;

let a= parseInt(i);

let b = parseInt(f)

console.log(a+b)





  

})
inch.addEventListener("input",function(){

    let i = this.value;
    let f = i/12;
    if(!Number.isInteger(f))
    {
        f = f.toFixed(2);
    }
    fee.value= f;
})



