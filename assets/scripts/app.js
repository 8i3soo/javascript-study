const defaultResult = 0;
/*let currentResult = defaultResult; (변수나 상수값으로 변수를 초기화 할 수 있다.)
let currentResult = 0;*/
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1; 
/* =의 오른편에서 currentResult 값을 계속 참조중.(오른쪽이 먼저 실행. 그래서 오른쪽값이 왼쪽값으로 계속 덮어씌워지는 구조임.)
 한 행에서 하나의 연산자만 사용할 수 있는 것x 여러가지 사용 가능. ()괄호를 추가하면 먼저 계산하게 됨 => (currentResult + 10)*3 이런 구조*/

/*let calculationDescription = '(0 + 10)*3 / 2 - 1';
위에 쓰여진 것은 계산이 되는 식이 아니라 정적인 텍스트 형태임. 입력한 모양 그대로 출력됨.*/

let calculationDescription = '(' + defaultResult + '+ 10) * 3 / 2 - 1';

/*let erroMessage ='An error \n' +  'occureed!';
let erroMessage ='An error' +  'occureed!'; 이 경우에는 사이 공백을 줘도, 백틱을 사용했을때처럼 반영안됨. 줄바꿈을 하고 싶다면 \n을 해야한다.*/


//let calculationDescription = `(defaultResult + 10) * 3 / 2 - 1`; 백틱(`)을 사용하면 문자열을 각자 묶어주는 일을 안해도됨.
//let calculationDescription = '`(${defaultResult} + 10) * 3 / 2 - 1`;   백틱을 사용하는 경우 ${} 표현식 사용 가능.


/*let calculationDescription = '(' + currentResult + '+ 10) * 3 / 2 - 1';
위에 쓰여진 형태는 문자열 접합 작업, 따옴표로 감싸지 않은 부분은 자바스크립트가 값을 찾아볼 수 있음. => 문자열을 접합 시킬 때 +를 사용할 수 있다
위에 쓰여진 형태로 결과값을 보면 currentResult가 0이 아니라 계산된 값으로 나옴(자바스크립트 코드는 위에서 아래로 실행된다.) */

outputResult(currentResult, calculationDescription);





