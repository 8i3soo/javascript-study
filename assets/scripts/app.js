const defaultResult = 0;
let currentResult = defaultResult;

function add() {
    currentResult = currentResult +  parseInt(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', add); //버튼을 눌러야지만 실행할 수 있도록 만든 것







