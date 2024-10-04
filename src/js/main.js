import data from './data.json';

const inputelement = document.querySelector('input');
const rowelement = document.querySelector('#row');

console.log(rowelement);
for (let objectsdata of data) {
  const div = document.createElement('div');
  div.classList.add('col');
  div.innerHTML = `
  <div class="card">
            <img
              src=${objectsdata.image}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">${objectsdata.name}</h5>
              <p class="card-text">
                ${objectsdata.description}
              </p>
            </div>
          </div>`;
  //   p.textContent = objectsdata.name;
  rowelement.appendChild(div);
}
function renderpokemons(list) {}
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault();
    inputelement.focus();
  }
});
