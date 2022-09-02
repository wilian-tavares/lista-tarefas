const container = document.querySelector("#container");
const ul = document.createElement('ul');
const li = document.createElement('li');

//const buttonAdd = document.querySelector('#buttonAdd');
const buttonRemove = document.querySelector("#buttonRemove");

const atividade = document.querySelector('#atividade');

// const add = document.querySelector('#add');
const buttonAdd = document.querySelector('.buttonAdd')

function addTarefa() {
    li.innerHTML += `<li> 
    <button id="buttonRemove">X</button>
        ${atividade.value} 
        <button class="buttonAdd">Adicionar</button>
    </li>`
    ul.appendChild(li)
    container.appendChild(ul)
    atividade.value = '';
}

function removerTarefa() {
    ul.remove()
}

//const add = document.querySelector('#add');
//add.addEventListener('click', () => console.log('funcionou'));



buttonAdd.addEventListener('click', addTarefa)

// adicionar.addEventListener('click', addTarefa)
buttonRemove.addEventListener('click', removerTarefa)