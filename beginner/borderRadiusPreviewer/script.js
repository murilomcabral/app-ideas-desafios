const box = document.querySelector('div.box');
const textArea = document.querySelector('textarea.copyCode')

const input = {
  topLeft: document.querySelector('.topLeft'),
  topRight: document.querySelector('.topRight'),
  bottomLeft: document.querySelector('.bottomLeft'),
  bottomRight: document.querySelector('.bottomRight'),
};

const min = 0;
const max = 150;

const inputList = [input.topLeft, input.topRight, input.bottomLeft, input.bottomRight];

inputList.forEach((element) => {
  element.addEventListener('input', (event) => {

    if (event.target.value < min) {
      event.target.value = min;
    } else if (event.target.value > max) {
      event.target.value = max;
    }
    
    box.style.cssText = `border-top-left-radius: ${input.topLeft.value}px; border-top-right-radius: ${input.topRight.value}px; border-bottom-left-radius: ${input.bottomLeft.value}px; border-bottom-right-radius: ${input.bottomRight.value}px;`
    const txt = `element {\n  border-top-left-radius: ${input.topLeft.value}px;\n  border-top-right-radius: ${input.topRight.value}px;\n  border-bottom-left-radius: ${input.bottomLeft.value}px;\n  border-bottom-right-radius: ${input.bottomRight.value}px;\n}`
    textArea.textContent = txt
  });
});

textArea.addEventListener('click', copyText)

function copyText() {
  navigator.clipboard.writeText(textArea.value)

  const copyAlert = document.createElement('div')
  copyAlert.textContent = 'Code copied!'
  copyAlert.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255 0 0/ 0.9); border-radius: 20px; padding: 10px; color: white;'
  document.body.appendChild(copyAlert)
  
  setTimeout(() => {
    copyAlert.remove()
  }, 600);
}