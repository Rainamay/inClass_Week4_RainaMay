console.log(hello());
console.log(calculate(20));
console.log(calculate(5));
console.log(add());


window.onload = function () {
    document.getElementById("btn1").addEventListener("click", changeButton);
    document.getElementById("btn1").addEventListener("mouseover", changeButtonTwo);
    document.getElementById("btn1").addEventListener("mouseout", changeButtonThree);
    document.getElementById("div1").innerHTML = "This is the new div content.";
    document.getElementById("div1").style.backgroundColor = "orange";
    

    var paras = document.getElementsByTagName("p");
    for(i = 0; i < paras.length; i++)
    {
        paras[i].style.backgroundColor = "yellow";
    }
}

function hello()
{
    return "hello!";
}

function calculate(x)
{
    if (x > 10)
    {
        x += 2
        return x;
    }
    else {
        x += 4
        return x;
    }
}

function add()
{
    var sum = 0;
    for(i = 1; i <= 10; i++)
    {
        sum += i;
    }

    return sum;
}

function changeButton()
{
    document.getElementById("btn1").innerHTML = "You clicked me";
    var divs = document.getElementsByTagName("div");
    for(i = 0; i < divs.length; i++)
    {
        divs[i].className = "blueviolet";
        divs[i].className += " + border";
    }
}

function changeButtonTwo()
{
    document.getElementById("btn1").innerHTML = "Mouseover";
}

function changeButtonThree()
{
    document.getElementById("btn1").innerHTML = "Click Me!";
}
