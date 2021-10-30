import React, {useEffect, useRef, useState} from "react";

function AddButton(Amount){
    function Button(C = ''){
        return(
            <button className={C}></button>
        )
    }
    Amount = Amount / CPP;
    var Buttons = []
    for(let i = 0; i < Amount; i++){
        if(i != 0){
            Buttons.push(Button());
        }else{
            Buttons.push(Button('active'));
        }
        
    }
    return Buttons;
}


var ContentAmount = 30;
var CPP = 5;    //  Contenido por pagina     
                //  luego hacemos que lo calcule en base al tamaño de la pantalla

function AddContent(Amount){
    function Recomendation(Title, Img, ID){
        return(
            <div id={ID} className="content">
                <a href="#"><img src={Img} alt="-alt-"></img></a>
                <p className="content-title">{Title}</p>
            </div>
        )
    }

    let Content = [];
    for(let i = 0; i < Amount; i++){
        var Title = "Titulo";
        var Img = "img/content/content1.jpg";
        var ID = "content-" + (i+1);

        Content.push(Recomendation(Title, Img, ID));
    }
    return(
        Content
    );
}

function GenerateSliders(Amount){
    var Sliders = [];
    for(let i = 0; i < Amount; i++){
        var Title = "Titulo";
        Sliders.push(Slider((i+1),Title));
    }
        
    return(
        Sliders
    )
}

function Slider(Title){
    
    const Slider = useRef(null);

    function Next(){
        const Show = Slider.current.querySelector('.recommendations');
        var Dot = Slider.current.querySelector('.dots .active');
        if(Show.children.length > 0){

            var Elements = [];

            for(let i = 0; i < CPP; i++){
                Elements.push(Show.children[i]);
            }
            
            const Width = Show.children[0].offsetWidth * CPP;
            
            Show.style.transition = `0.75s ease-out all`;
            Show.style.transform = `translateX(-${Width}px)`;

            const transition = () =>{
                if(Dot.nextSibling){
                    Dot.nextSibling.classList.add('active');
                }else{
                    Dot.parentNode.firstChild.classList.add('active');
                }
                Dot.classList.remove('active');

                Show.style.transition = `none`;
                Show.style.transform = `translateX(0)`
                for(let i = 0; i < CPP; i++){
                    Show.appendChild(Elements[i]);
                }
                Show.removeEventListener('transitionend', transition);
            }
            Show.addEventListener('transitionend', transition);
        }
    }
    
    function Prev(){
        const Show = Slider.current.querySelector('.recommendations');
        var Dot = Slider.current.querySelector('.dots .active');
        
        if(Show.children.length > 0){
            var Elements = [];
            for(let i = Show.children.length - 1; i > Show.children.length-(CPP +1); i--){
                Elements.push(Show.children[i])
            }
            for(let i = 0; i < CPP; i++){
                Show.insertBefore(Elements[i],Show.firstChild);
            }

            const Width = Show.children[0].offsetWidth * CPP;

            Show.style.transition = `none`;
            Show.style.transform = `translateX(-${Width}px)`;
            
            setTimeout(() =>{
                if(Dot.previousSibling){
                    Dot.previousSibling.classList.add('active');
                }else{
                    Dot.parentNode.lastChild.classList.add('active');
                }
                Dot.classList.remove('active');
                
                Show.style.transition = `0.75s ease-out all`;
                Show.style.transform = `translateX(0px)`;
            },50);
        }
    }

    React.useEffect(() => {
        var LeftArrow = Slider.current.querySelector('.left-arrow');
        var RightArrow = Slider.current.querySelector('.right-arrow');
        LeftArrow.addEventListener('click', Prev);
        RightArrow.addEventListener('click', Next);

        return () => {
            LeftArrow.removeEventListener('click', Prev);
            RightArrow.removeEventListener('click', Next);
        }
    })

    return(

        <div ref={Slider} className="slider-container">
            <div className="container-title-controller">
                <h3>{Title}</h3>
                <div role="tablist" className="dots">
                    {AddButton(ContentAmount)}
                </div>
            </div>
            <div className="container-recommendation">
                <button aria-label="<" className="arrows left-arrow" ><i className="fas fa-chevron-left"></i></button>
                <div className="recommendations">
                    {AddContent(ContentAmount)}
                </div>
                <button aria-label=">" className="arrows right-arrow"><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    )
}

export {GenerateSliders, Slider};
