var counter = document.getElementById('counter')
for(let i=10; i>=1; i--){
    setTimeout(()=>{
        console.log(i)
        counter.innerText=i
if(i==1){
console.log("Happy Independence Day")
counter.innerText="Happy Independence Day"
}
    },1000*(10-i))
}
