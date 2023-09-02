// Get elements from the DOM
const display = document.querySelector(".display");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

// Add event listeners to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "=") {
      // Evaluate the expression and display the result
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (value === "AC") {
      // Clear the display
      display.value = "0";
    } else if (value === "+-") {
      // Toggle the sign of the current value
      display.value = parseFloat(display.value) * -1;
    } else {
      // Append the clicked button's value to the display
      if (display.value === "0" || display.value === "Error") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
});
