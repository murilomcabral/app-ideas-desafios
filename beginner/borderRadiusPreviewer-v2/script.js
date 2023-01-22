//boxContainer 'div' must be added
const boxContainer = document.querySelector('.boxContainer')

class BoxFrame {
  height
  width
  constructor(height='300', width='300') {
    this.height = height;
    this.width = width;
  }

  create() {
    const inputList = []
    for (let i = 0; i < 4; i++) {
      const radiusInputBox = document.createElement('input')
      radiusInputBox.setAttribute('type','number')
      radiusInputBox.setAttribute('value','0')
      inputList.push(radiusInputBox)
    }
    inputList[0].setAttribute('class','borderInput topLeft')
    inputList[1].setAttribute('class','borderInput topRight')
    inputList[2].setAttribute('class','borderInput bottomLeft')
    inputList[3].setAttribute('class','borderInput bottomRight')
    
    const textArea = document.createElement('textarea')
    textArea.setAttribute('class','copyCode')
    textArea.setAttribute('readonly','')
    textArea.addEventListener('click', copyText)
    
    function copyText() {
      navigator.clipboard.writeText(textBox.value)
    
      const copyAlert = document.createElement('div')
      copyAlert.textContent = 'Code copied!'
      copyAlert.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: rgba(255 0 0/ 0.9); border-radius: 20px; padding: 10px; color: white;'
      document.body.appendChild(copyAlert)
      
      setTimeout(() => {
        copyAlert.remove()
      }, 600);
    }
    
    const box = document.createElement('div')
    box.setAttribute('class','box')
    box.style.cssText = `height: ${this.height}px; width: ${this.width}px;`

    box.appendChild(inputList[0])
    box.appendChild(inputList[1])
    box.appendChild(inputList[2])
    box.appendChild(inputList[3])
    box.appendChild(textArea)
    boxContainer.appendChild(box)

    const boxF = document.querySelector('div.box');
    const textBox = document.querySelector('textarea.copyCode')

    const input = {
      topLeft: document.querySelector('.topLeft'),
      topRight: document.querySelector('.topRight'),
      bottomLeft: document.querySelector('.bottomLeft'),
      bottomRight: document.querySelector('.bottomRight'),
    };

    const min = 0;
    const max = 150;

    const inputsList = [input.topLeft, input.topRight, input.bottomLeft, input.bottomRight];

    inputsList.forEach((element) => {
      element.addEventListener('input', (event) => {

        if (event.target.value < min) {
          event.target.value = min;
        } else if (event.target.value > max) {
          event.target.value = max;
        }
        
        boxF.style.cssText = `height: ${this.height}px; width: ${this.width}px; border-top-left-radius: ${input.topLeft.value}px; border-top-right-radius: ${input.topRight.value}px; border-bottom-left-radius: ${input.bottomLeft.value}px; border-bottom-right-radius: ${input.bottomRight.value}px;`
        const txt = `element {\n  height: ${this.height}px;\n  width: ${this.width}px;\n  border-top-left-radius: ${input.topLeft.value}px;\n  border-top-right-radius: ${input.topRight.value}px;\n  border-bottom-left-radius: ${input.bottomLeft.value}px;\n  border-bottom-right-radius: ${input.bottomRight.value}px;\n}`
        textBox.textContent = txt
      });
    });
  }
}