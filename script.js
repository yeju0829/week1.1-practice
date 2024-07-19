// function setupHideFunction() {
//     const closeButton = document.querySelector(".xbox"); //<div class="message" class="xbox">X</div>  닫기 버튼
//     closeButton.addEventListener("click", function () {
//       const mainBox = document.querySelector(".mainbox");
//       mainBox.style.display = "none";
//     });
//    }
   
//    setupHideFunction();

//---------

// document.addEventListener("DOMContentLoaded", function () {
//     const toggleButton = document.getElementById("toggleButton"); //document.queryselector("#toggleButton")
//     const mainBox = document.querySelector(".mainbox"); //document.getElementsByClassName("mainbox")
   
//     toggleButton.addEventListener("click", function () {
//       // mainbox의 표시 상태를 토글
//       if (mainBox.style.display === "none") {
//         mainBox.style.display = "flex"; // mainbox를 보이게 설정
//         toggleButton.textContent = "숨김"; // 버튼 텍스트를 '숨김'으로 변경
//       } else {
//         mainBox.style.display = "none"; // mainbox를 숨기기
//         toggleButton.textContent = "보임"; // 버튼 텍스트를 '보임'으로 변경
//       }
//     });
//    });

//----------
// document.addEventListener("DOMContentLoaded", function () {
//     const inputButton = document.getElementById("inputButton");
//     const textInput = document.getElementById("textInput");
//     const messages = document.querySelectorAll(".message");
   
//     inputButton.addEventListener("click", function () {
//       messages.forEach(function (message) {
//         message.textContent = textInput.value; // 입력된 값을 모든 message 요소에 적용
//       });
//       textInput.value = ""; // 입력 후 입력 필드 초기화
//     });
//    });
   
//-----------
// document.addEventListener("DOMContentLoaded", function () {
//     const calculateButton = document.getElementById("calculateButton");
//     const numInput1 = document.getElementById("numInput1");
//     const numInput2 = document.getElementById("numInput2");
//     const messages = document.querySelectorAll(".message");
   
//     calculateButton.addEventListener("click", function () {
//       const num1 = parseInt(numInput1.value, 10);
//       const num2 = parseInt(numInput2.value, 10);
//       const result = num1 * num2;
//       messages.forEach((message) => {
//         message.textContent = `${num1} X ${num2} = ${result}`; // 각 메시지 요소의 계산 결과 표시
//       });
//     });
//    });

//-----------
document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const numInput1 = document.getElementById("numInput1");
    const numInput2 = document.getElementById("numInput2");
    const messages = document.querySelectorAll(".message");
   
    calculateButton.addEventListener("click", function () {
      const num1 = parseInt(numInput1.value, 10) || 0;
      const num2 = parseInt(numInput2.value, 10) || 0;
      let increment = 1;
   
      messages.forEach(function (message) {
        const adjustedNum1 = num1 + increment;
        const adjustedNum2 = num2 + increment;
        const result = adjustedNum1 * adjustedNum2;
        message.textContent = `${adjustedNum1} X ${adjustedNum2} = ${result}`;
        increment++;
      });
    });
   });
   
   
   