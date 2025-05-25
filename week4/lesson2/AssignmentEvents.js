document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("inputField").addEventListener("input", (e) => {
    console.log("Input event: " + e.target.value);
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightgreen";
  });
  
  document.getElementById("dblClickBox").addEventListener("dblclick", () => {
    document.getElementById("dblClickBox").textContent = "Double-clicked!";
  });
  
  document.getElementById("checkBox").addEventListener("change", (e) => {
    alert("Checkbox is now " + (e.target.checked ? "checked" : "unchecked"));
  });
  
  document.getElementById("selectMenu").addEventListener("change", (e) => {
    alert("You selected: " + e.target.value);
  });
  
  document.getElementById("mouseMoveBox").addEventListener("mousemove", () => {
    document.getElementById("mouseMoveBox").textContent = "Mouse is moving!";
  });
  
  const focusBlur = document.getElementById("focusBlur");
  focusBlur.addEventListener("focus", () => {
    focusBlur.style.border = "2px solid green";
  });
  focusBlur.addEventListener("blur", () => {
    focusBlur.style.border = "1px solid gray";
  });
  
  document.getElementById("submitForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted!");
  });
  
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyPressOutput").textContent = "You pressed: " + e.key;
  });
 