let counterValue = document.getElementById('value')
let decreBtn = document.getElementById('decre')
let resetBtn = document.getElementById('reset')
let increBtn = document.getElementById('incre')
let appInput = document.getElementById('app2')
let userDecre = document.getElementById('user1')
let userIncre = document.getElementById('user2')

userIncre.onclick =() => {

    let userValue = Number(appInput.value);

    let  resultValue = Number(value.textContent);

    let totalResult = userValue + resultValue ;

    counterValue.innerHTML = totalResult;
}

userDecre.onclick =() => {

    let userValue1 = Number(appInput.value);

    let  resultValue2 = Number(value.textContent);

    let totalResult1 = userValue1 - resultValue2 ;

    counterValue.innerHTML = totalResult1;


}

decreBtn.onclick = () => {
    let convertfirstNumber = Number(value.textContent);
    let convertsecondNumber = Number(counterValue.textContent);
    let value1 = convertsecondNumber - 1 ;
    value.innerHTML = value1;
}
increBtn.onclick = () => {
    let convertsecondNumber2 = Number(value.textContent);
    let convertsecondNumber3 = Number(counterValue.textContent);
    let value2 = convertsecondNumber3 + 1;
    value.innerHTML = value2;
}
// appInput.onlink =() => {
//     let inputValue = Number(appInput.value);
//     let value3 = inputValue + value2;
//     value.innerHTML =value3;
// }
// increBtn.onclick = () => {
//     let convertsecondNumber = Number(appInput.textContent);
//     let totalResult = convertsecondNumber + appInput ;
//       counterValue.innerHTML =totalResult;
// }

resetBtn.onclick = () => {
    value.innerHTML = 0;
}


