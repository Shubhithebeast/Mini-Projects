let canvas = document.getElementById("canvas");
let history = [];
let currentStep = -1;

function enableDraggable(element) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  element.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    //  prevent going outside the canvas
    const canvasRect = canvas.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const newTop = element.offsetTop - pos2;
    const newLeft = element.offsetLeft - pos1;

    if (
      newTop >= canvasRect.top &&
      newLeft >= canvasRect.left &&
      newTop + elementRect.height <= canvasRect.bottom &&
      newLeft + elementRect.width <= canvasRect.right
    ) {
      element.style.top = newTop + "px";
      element.style.left = newLeft + "px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    saveHistory();
  }
}

function createTextElement(textContent) {
  let textElement = document.createElement("div");
  textElement.contentEditable = true;
  textElement.className = "draggable-text";
  textElement.innerText = textContent;

  enableDraggable(textElement);

  textElement.addEventListener("input", function () {
    saveHistory();
  });

  return textElement;
}

function saveHistory() {
  history[currentStep] = canvas.innerHTML;
  currentStep++;
  history.length = currentStep;
}

function undo() {
  if (currentStep > 0) {
    currentStep--;
    canvas.innerHTML = history[currentStep - 1];
  }
}

function redo() {
  if (currentStep < history.length - 1) {
    currentStep++;
    canvas.innerHTML = history[currentStep];
  }
}


      function boldText() {
        document.execCommand("bold", false, null);
      }

      function italicizeText() {
        document.execCommand("italic", false, null);
      }

      function underlineText() {
        document.execCommand("underline", false, null);
      }

      function changeTextColor(color) {
        // document.execCommand("styleWithCSS", false, true);
        document.execCommand("foreColor", false, color);
      }

      function setTextColor(color) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const span = document.createElement("span");
          span.style.color = color;
          range.surroundContents(span);
        }
      }
      

      function changeFontFamily(font) {
        document.execCommand("fontName", false, font);
      }

      function changeFontSize(size) {
        document.execCommand("fontSize", false, size);
      }

      function addText() {
        let text = createTextElement("New Text");
        canvas.appendChild(text);
        saveHistory();
      }


