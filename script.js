function changeText() {
  document.getElementById('intro-text').textContent =
    'I’m currently diving deep into JavaScript and building interactive web experiences!';
}

function changeStyle() {
  document.getElementById('main-heading').style.color = '#e87307';
  document.body.style.backgroundColor = '#fdf6ec';
}

function addItem() {
  const ul = document.getElementById('skill-list');
  const input = document.getElementById('new-skill');
  const skill = input.value.trim();

  if (skill !== '') {
    const newItem = document.createElement('li');
    newItem.textContent = skill;
    ul.appendChild(newItem);
    input.value = ''; // Clear input
  } else {
    alert('Please enter a skill.');
  }
}

function removeItem() {
  const ul = document.getElementById('skill-list');
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  } else {
    alert('No skills to remove.');
  }
}
