window.onload = function(){
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let body = document.querySelector('a');

    let nombre = 'Flor'
    console.log(nombre);
    if(nombre != ''){
        subtitulo.innerHTML += nombre; 
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }

   subtitulo.style.textTranform = 'uppercase';

    
    if(true){
       fondo.classList.add('fondo');
       enlace.style.color = '#E51B3E';
    }

    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }

    container.style.display = 'block';
}
/*     console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px'; */

