const grabItem = (id) => document.getElementById(id);

let fullName = grabItem('name'), email = grabItem('email'), phoneNumber = grabItem('phone'), btn = grabItem('btn');
let prevBtn = grabItem('prevBtn');

let form2Title = 'Select your plan';
let form2description = 'You have the option of monthly or yearly billing.';

let form3Title = 'Pick add-ons';
let form3description = 'Add-ons help enhance your gaming experience.';

let form4Title = 'Finishing up';
let form4description = 'Double-check everything looks OK before confirming.';

let elementIndex = 0;
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    setElementIndex();

    let elementIds = [];
    for (let i = 0; i < 4; i++){
        elementIds.push(grabItem(i));
    }
    console.log(elementIds);
    
    elementIds[elementIndex].style.display = 'block';
    elementIds[elementIndex - 1].style.display = 'none';
    console.log(elementIndex);
})

function setElementIndex(){
    if (elementIndex == 5){
        return;
    }
    elementIndex++;
}

prevBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    let elementIds = [];
    for (let i = 0; i < 4; i++){
        elementIds.push(grabItem(i));
    }
    console.log(elementIndex);
    
    elementIds[elementIndex - 1].style.display = 'block';
    elementIds[elementIndex].style.display = 'none';
    decreaseElemtentIdex();
})

function decreaseElemtentIdex(){
    if (elementIndex == -1){
        return;
    }
    elementIndex--;
}

console.log('hey');