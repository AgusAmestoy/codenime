
const PaginationContainer = document.querySelector('.pagination-container');
const Button = PaginationContainer.querySelectorAll('.button');

Button.forEach( item => {  
    item.addEventListener( 'click' , event => {   

        Animelist(  item.firstChild.textContent  );

  } )  }  ) ; 

