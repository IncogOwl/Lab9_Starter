// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let output = document.querySelector("output");
//   let firstNum = document.querySelector("#first-num").value;
//   let secondNum = document.querySelector("#second-num").value;
//   let operator = document.querySelector("#operator").value;
//   output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
// });

// let errorBtns = Array.from(
//   document.querySelectorAll("#error-btns > button")
// );

// Start your code here
// You may move this JS to another file if you wish
class ValidError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    try {
      let output = document.querySelector("output");
      let firstNum = document.querySelector("#first-num").value;
      let secondNum = document.querySelector("#second-num").value;
      let operator = document.querySelector("#operator").value;
      if (isNaN(firstNum) || isNaN(secondNum)) {
        throw new ValidError("Non-Numeric data");
      }
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (error) {
      if (error instanceof ValidError) {
        console.error("The input was not valid", error);
        output.innerHTML = "Error: " + error.message;
      } else {
        throw error;
      }
    } finally {
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
  });

  let errorBtns = Array.from(document.querySelectorAll("#error-btns > button"));

  // Adding event listeners to perform specific actions based on button text content
  errorBtns.forEach((button) => {
    button.addEventListener("click", () => {
      switch (button.textContent) {
        case "Console Log":
          console.log("This is a console log message.");
          break;
        case "Console Error":
          console.error("This is a console error message.");
          break;
        case "Console Count":
          console.count("Console count");
          break;
        case "Console Warn":
          console.warn("This is a console warning message.");
          break;
        case "Console Assert":
          console.assert(false, "This is a console assertion failed message.");
          break;
        case "Console Clear":
          console.clear();
          break;
        case "Console Dir":
          console.dir(document.body);
          break;
        case "Console dirxml":
          console.dirxml(document);
          break;
        case "Console Group Start":
          console.group("Group Start");
          break;
        case "Console Group End":
          console.groupEnd();
          break;
        case "Console Table":
          console.table([
            { name: "Varun", age: 18 },
            { name: "Parekh", age: 109 },
          ]);
          break;
        case "Start Timer":
          console.time("Timer");
          break;
        case "End Timer":
          console.timeEnd("Timer");
          break;
        case "Console Trace":
          console.trace("Trace message");
          break;
        case "Trigger a Global Error":
          throw new Error("This is a global error.");
          break;
        default:
          console.log("Button not handled.");
      }
    });
  });
  // Global error handler
  window.onerror = function (message, source, lineno, colno, error) {
    console.log("Global error caught:");
    console.log("Message:", message);
    console.log("Source:", source);
    console.log("Line:", lineno);
    console.log("Column:", colno);
    console.log("Error object:", error);
    return true;
  };
});
