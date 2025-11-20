/** 
*@param {number} price
*@param {number} Quantity
*@return {number}

*/
const button = document.getElementById('calcForm');

button.addEventListener("submit",(e)=>{
    e.preventDefault();
    const a = document.getElementById('num1').value;
    const b = document.getElementById('num2').value;
    const t = document.getElementById('total');
    t.textContent =  "Total: "+total(a,b);
    
    printTotal(a,b);
})


function total(price,Quantity){
    
    return  ((price * Quantity)<=1000) ? price * Quantity   : (price* Quantity)-((price * Quantity)/10);
}

function printTotal(a,b){
    console.log(total(a,b));
}
