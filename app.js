// const root = document.querySelector('#root');
let books = window.books;
// [
//   {
//     id: '1',
//     title: `Apple. Эволюция компьютера`,
//     author: `Владимир Невзоров`,
//     img: `https://bukva.ua/img/products/449/449532_200.jpg`,
//     plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
//     и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
//     персональных компьютеров в целом.
//     В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
//     сопровождающиеся большим количеством оригинальных студийных фотографий.
//     Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
//     Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`
//   },
//   {
//     id: '2',
//     title: `Как объяснить ребенку информатику`,
//     author: `Кэрол Вордерман`,
//     img: `https://bukva.ua/img/products/480/480030_200.jpg`,
//     plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
//     в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
//     оставаясь в безопасности. 
//     Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
//     от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
//     обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
//     объясняются наглядно с помощью иллюстраций и схем.`
//   },
//   {
//     id: '3',
//     title: `Путь скрам-мастера. #ScrumMasterWay`,
//     author: `Зузана Шохова`,
//     img: `https://bukva.ua/img/products/480/480090_200.jpg`,
//     plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
//     Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
//     знаниями будете в течение всей карьеры.
//     Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
//     как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
//     какими инструментами ему нужно пользоваться.`
//   }
// ];

const root = document.getElementById('root');

//main 2 div гор 1 ul + кнопка add

console.log(root);

const main = document.createElement('main');
main.classList.add('flex');
const booksList = document.createElement('div');
booksList.classList.add('list');

const booksItems = document.createElement('ul');
booksItems.classList.add('items');

const addBtn = document.createElement('button');
addBtn.setAttribute('type', 'button');
addBtn.classList.add('btn');
addBtn.classList.add('addBtn');
addBtn.textContent = 'Add';

const box = document.createElement('div');
box.classList.add('box');


main.append(booksList);
booksList.append(booksItems);
booksList.append(addBtn);

main.append(box);

console.log(main);

root.append(main);

const string = books.map(({ id, title }) => {
    return `<li id="${id}" class="item"><h2>${title}</h2><button type="button" class="btn editBtn">Edit</button>
    <button type="button" class="btn editBtn">Delete</button></li>`;
}).join('');

console.log(string);

booksItems.insertAdjacentHTML('beforeend', string);

const titles = document.querySelectorAll('h2');


titles.forEach(el => {
    el.addEventListener('click', onTitleClick)
});

const renderPreview = ({ title, author, img, plot }) => {
    return `<h3>${title}</h3> <p>${author}</p> <img src="${img}" alt="${title}"/><p>${plot}</p>`
}

const renderForm = (obj) => {
    const string = `<form class="form">
    <label class="label">${Object.keys(obj)[1]}<input type="text" name="${Object.keys(obj)[1]}" value="${Object.values(obj)[1]}" class="input"></input></label>
    <label class="label">${Object.keys(obj)[2]}<input type="text" name="${Object.keys(obj)[2]}" value="${Object.values(obj)[2]}" class="input"></input></label>
    <label class="label">${Object.keys(obj)[3]}<input type="text" name="${Object.keys(obj)[3]}" value="${Object.values(obj)[3]}" class="input"></input></label>
    <label class="label">${Object.keys(obj)[4]}<input type="text" name="${Object.keys(obj)[4]}" value="${Object.values(obj)[4]}" class="input"></input></label>
    <button type="button" class="btn">Save</button>
    <button type="button" class="btn">Cancel</button>    
    </form>`;
   
    return string;
}


function onTitleClick(event) {
    box.innerHTML = '';
    const value = event.target.textContent;
    console.log(value);
    const obj = books.find((book) =>  book.title === value );
        box.insertAdjacentHTML('beforeend', renderPreview(obj));
}

const buttonEditElement = document.querySelectorAll('.editBtn');

// console.log(buttonEditElement);

buttonEditElement.forEach(el => {
    el.addEventListener('click', onEditBtnClick);
});

function onEditBtnClick(event) {
    box.innerHTML = '';
    const id = event.currentTarget.parentNode.getAttribute('id');
    const obj = books.find((book) => book.id === id);
    console.log(obj);
    box.insertAdjacentHTML('beforeend', renderForm(obj));
};

const addButton = document.querySelector('.addBtn');

addButton.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    box.innerHTML = '';
    const obj = {
        id: (Math.random() * 100),
        title: '',
        author: '',
        img: '',
        plot: ''
    }
    console.log(obj);
    box.insertAdjacentHTML('beforeend', renderForm (obj));
}



 

