let grabId = (id) => document.getElementById(id);

let fullName = grabId('name'), email = grabId('email'), phoneNumber = grabId('phone'), btn = grabId('btn');
let currentFormIndex = 0;
let currentNumberIndex = 0;
let formFields = ['step1Form', 'step2Form', 'step3Form', 'step4Form', 'step5'];
let numbers = [1, 2, 3, 4];

function nextForm(){
    let currentFormField = grabId(formFields[currentFormIndex]);
    let currentNumberItem = grabId(numbers[currentNumberIndex]);
    currentFormIndex++;
    currentNumberIndex++;
    let nextFormField = grabId(formFields[currentFormIndex]);
    let nextNumberItem = grabId(numbers[currentNumberIndex]);
    
    currentFormField.style.display = 'none';
    nextFormField.style.display = 'block';
}

btn.addEventListener('click', (e)=>{
    e.preventDefault();

    nextForm();
});
