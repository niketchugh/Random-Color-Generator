const getColor = ()=>{
    //Hex Code
    const random =Math.floor( Math.random()* 16777215);
    const hexCode =`#${random.toString(16)}`//toString converts to hexadecimal 
    document.body.style.backgroundColor = hexCode;
    document.getElementById('color-code').innerText = hexCode;
    

    navigator.clipboard.writeText(hexCode);
}
//event call
document.getElementById('btn').addEventListener('click',getColor);

//initial call
getColor();