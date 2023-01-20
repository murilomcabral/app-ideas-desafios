// homescreen START button
const startDiv = document.querySelector('.startDiv');
startDiv.addEventListener('click', startPreview);

function startPreview() {
  startDiv.remove()
  startDiv.removeEventListener('click', startPreview)
  createBoxes()
}

function createBoxes() {
  
}