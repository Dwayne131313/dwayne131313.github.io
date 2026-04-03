/*NOT FULLY SAFE BUT ITS SOMETHING! */

// Disable right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Block common DevTools shortcuts
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C", "K"].includes(e.key)) ||
    (e.ctrlKey && ["U", "S"].includes(e.key))
  ) {
    e.preventDefault();
    return false;
  }
});

// Detect DevTools opening
function detectDevTools() {
  const threshold = 160;

  if (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  ) {
    document.body.innerHTML = "DevTools detected. Access blocked.";
  }
}

setInterval(detectDevTools, 1000);

// Block text selection
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});

// Block dragging
document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});

// Disable copy
document.addEventListener("copy", function (e) {
  e.preventDefault();
});

// Console protection
(function () {
  function blockConsole() {
    console.clear();
  }

  setInterval(blockConsole, 500);
})();

// Debugger trap
(function () {
  function debuggerTrap() {
    debugger;
  }

  setInterval(debuggerTrap, 4000);
})();