import './styles/main.css';
import UI from './modules/ui.js';

document.addEventListener('DOMContentLoaded', UI.displayScores);

document.querySelector('#add-form').addEventListener('submit', (e) => {
  // prevent default submit
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  UI.getNewScore(name, score);
  UI.deleteScore('John Doe', 42);
  UI.deleteScore('farzad', 67);
  UI.deleteScore('amir', 20);
});

document.querySelector('#refresh').addEventListener('click', UI.refreshScores);