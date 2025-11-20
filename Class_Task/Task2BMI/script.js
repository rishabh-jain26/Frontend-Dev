const button = document.getElementById('bmiForm');

button.addEventListener("submit",(e)=>{
    e.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.getElementById('result');
    const bmiValue = calculateBMI(weight,height);
    result.textContent =  "Your BMI: "+bmiValue.toFixed(2);
    printBMI(bmiValue);
    if(bmiValue<18.5){
        result.textContent += " (Underweight)";
    }
    else if(bmiValue>=18.5 && bmiValue<24.9){
        result.textContent += " (Normal weight)";
    }
    else if(bmiValue>=25 && bmiValue<29.9){
        result.textContent += " (Overweight)";
    }
    else{
        result.textContent += " (Obesity)";
    }
})
function calculateBMI(weight, height){
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}
function printBMI(bmi){
    console.log("Your BMI : " + bmi.toFixed(2));
}