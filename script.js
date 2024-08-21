//your code here
// Drag and Drop Implementation
const images = document.querySelectorAll('.image');

let dragSrcElement = null;

function handleDragStart(e) {
  dragSrcElement = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);

  this.classList.add('selected');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter() {
  this.classList.add('over');
}

function handleDragLeave() {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcElement !== this) {
    const temp = this.innerHTML;
    this.innerHTML = dragSrcElement.innerHTML;
    dragSrcElement.innerHTML = temp;

    // Swap background images as well
    const tempBg = this.style.backgroundImage;
    this.style.backgroundImage = dragSrcElement.style.backgroundImage;
    dragSrcElement.style.backgroundImage = tempBg;
  }

  return false;
}

function handleDragEnd() {
  images.forEach(image => {
    image.classList.remove('over', 'selected');
  });
}

images.forEach(image => {
  image.addEventListener('dragstart', handleDragStart);
  image.addEventListener('dragenter', handleDragEnter);
  image.addEventListener('dragover', handleDragOver);
  image.addEventListener('dragleave', handleDragLeave);
  image.addEventListener('drop', handleDrop);
  image.addEventListener('dragend', handleDragEnd);
});
