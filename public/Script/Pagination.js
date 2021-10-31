const PaginationContainer = document.querySelector('.pagination-container');
const Button = PaginationContainer.querySelectorAll('.button');

function SetPage(item){
    var page = item.innerText;
    console.log(page);
}

Button.forEach(item => item.addEventListener('click', SetPage(item)));
