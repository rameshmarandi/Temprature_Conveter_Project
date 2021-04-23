

const TempConv = () =>{
    const numberTemp = document.getElementById("temp").value;
    const Temp_diff = document.getElementById("Temp_diff"); 
    const selectOption = Temp_diff.options[Temp_diff.selectedIndex].value;
if(numberTemp === ""){
    alert("Please Enter Temprature!!");
}else{

    const celToFar = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }


    const farToCel = (fehr) => {
        let celsius = Math.round((fehr - 32) * 5 / 9);
        return celsius;
    }

    let result ;

    if(selectOption === "cel"){
        result = celToFar(numberTemp);
        document.getElementById("resultContainer").innerHTML = `[ ${result} °Fahrenheit ]`;
    }else{
        result = farToCel(numberTemp);
        document.getElementById("resultContainer").innerHTML = `[ ${result} °Celsius ]`;
    }
}
}
    
   