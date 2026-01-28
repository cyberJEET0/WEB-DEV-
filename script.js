//onst timerID=setInterval(()=>{console.log("setInterval")},1000)

//const timeoutId=setTimeout(()=>{clear setInterval(timerID)},10000)
// clearTimeout(timeoutID)

let num=1;
const id=setInterval(()=>{
    if(num==10)clearInterval(id)
    console.log(num)
    num+=1
},1000)


