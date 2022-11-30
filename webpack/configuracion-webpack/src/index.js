import Template from './templates/Template.js';
import './styles/main.css';

(async function App() {
  const main = document.getElementById ('main');
  main.innerHTML = await Template();
})();
