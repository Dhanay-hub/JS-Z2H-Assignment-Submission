function add(){
    let no1=document.getElementById('inp1').value 
    console.log(no1)
    let no2=document.getElementById('inp2').value 
    console.log(no2)
    let data = `${no1} + ${no2}`
    console.log(data)
    let ans = eval(data)

    document.getElementById('two').innerHTML+=`<h1 class='todo'>sum = ${ans}</h1>`;
    console.log(ans)
    document.getElementById('inp1').value="";
    document.getElementById('inp2').value="";
}

function sub(){
    let no1=document.getElementById('inp1').value 
    console.log(no1)
    let no2=document.getElementById('inp2').value 
    console.log(no2)
    let data = `${no1} - ${no2}`
    console.log(data)
    let ans = eval(data)

    document.getElementById('two').innerHTML+=`<h1 class='todo'>sum = ${ans}</h1>`;
    console.log(ans)
    document.getElementById('inp1').value="";
    document.getElementById('inp2').value="";
}

function div(){
    let no1=document.getElementById('inp1').value 
    console.log(no1)
    let no2=document.getElementById('inp2').value 
    console.log(no2)
    let data = `${no1} / ${no2}`
    console.log(data)
    let ans = eval(data)

    document.getElementById('two').innerHTML+=`<h1 class='todo'>sum = ${ans}</h1>`;
    console.log(ans)
    document.getElementById('inp1').value="";
    document.getElementById('inp2').value="";
}

function mul(){
    let no1=document.getElementById('inp1').value 
    console.log(no1)
    let no2=document.getElementById('inp2').value 
    console.log(no2)
    let data = `${no1} * ${no2}`
    console.log(data)
    let ans = eval(data)

    document.getElementById('two').innerHTML+=`<h1 class='todo'>sum = ${ans}</h1>`;
    console.log(ans)
    document.getElementById('inp1').value="";
    document.getElementById('inp2').value="";
}

function remove()
{
    let data = document.getElementById('two').innerText = " "
    console.log("all clear")
}





