// Global variable
let clickCount = 0;

// Function with parameters and return value
function greetUser(name) {
  return `Hello, ${name}! Welcome to my portfolio.`;
}

// Function to update click count (demonstrates scope)
function updateClickCount() {
  clickCount++;
  console.log("Button clicked " + clickCount + " times.");
  return clickCount;
}

// Function to trigger animations dynamically
function triggerAnimation(elementId, animationClass) {
  const element = document.getElementById(elementId);
  element.classList.add(animationClass);

  // Remove class after animation ends so it can be reused
  element.addEventListener("animationend", () => {
    element.classList.remove(animationClass);
  }, { once: true });
}

// Button click event
document.getElementById("animateBtn").addEventListener("click", function () {
  console.log(greetUser("Visitor"));   // function with parameter + return
  updateClickCount();                  // function showing scope

  // Highlight "About Me" section
  triggerAnimation("about", "highlight");

  // Add bounce animation to button
  this.classList.add("bounce");
});

// Add dynamic CSS class for highlight
const style = document.createElement("style");
style.innerHTML = `
  .highlight {
    animation: flash 1s ease;
  }
`;
document.head.appendChild(style);
