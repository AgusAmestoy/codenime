var InitialValue = 0;
function ImagePass(){
    const img = document.querySelectorAll('li img');
    for(let i = 0; i < img.length; i++){
        img[i].style.display = 'none';
    }
    InitialValue++;
    if(InitialValue > img.length){
        InitialValue = 1;
    }
    img[InitialValue-1].style.display = 'block';
}

function ImageShowcase(){
    setTimeout(ImageShowcase, 10000);
    ImagePass();
}

ImageShowcase();

document.querySelector('.image-showcase').addEventListener('click', ImagePass);

