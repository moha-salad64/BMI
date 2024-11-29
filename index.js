const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const btnCalculate = document.getElementById('btncalculate');
const errorText = document.querySelector('.errorText');
let result = document.getElementById('result');

btnCalculate.addEventListener('click', (event) => {
    event.preventDefault();
    let inputWeight = weight.value;
    let inputHeight = height.value;

    //checking the input fields empty
    if (!inputHeight && !inputWeight) {
        height.style.border = '1px solid red';
        weight.style.border = '1px solid red';
        // errorText.innerHTML = 'input required!'
    }
    else if (!inputHeight) {
        height.style.border = '1px solid red';
        // errorText.innerHTML = 'input required!'
    }
    else if (!inputWeight) {
        weight.style.border = '1px solid red';
        // errorText.innerHTML = 'input required!'
    }
    else {
        calculateBMI();
    }

    // calculating BMI value fucntion
    function calculateBMI() {
        //calculating BMI value by fixed 2 point value
        let BMI = (inputWeight / (inputHeight * inputHeight)).toFixed(2);
        //checking BMI less than 18
        if (BMI <= 18.5) {
            result.innerText = `Under Weight: ${BMI}`;
            result.style.fontWeight = '600';
        }
        else if (BMI > 18.6 && BMI < 25) {
            result.innerHTML = `Normal Weight: ${BMI}`;
            result.style.fontWeight = '600';
        }
        else {
            result.textContent = `Overweight: ${BMI}`;
            result.style.fontWeight = '600';
        }
        //clear border style
        height.style.border = "";
        weight.style.border = "";
        //clear value input 
        weight.value = "";
        height.value = "";
    }
})

