// en esta parte se obtiene la info de las cards y de los botones
const botonesGenero = document.querySelectorAll('.botonGenero');
const cardsLibros = document.querySelectorAll('.libros');


// hacer qe pase algo al dar click

botonesGenero.forEach(boton => {
    boton.addEventListener('click' , () =>{
        const generoSeleccionado = boton.getAttribute('data-genero'); // se le pide que obtenga el genero selecionado del boton
       
       

        cardsLibros.forEach(card => {  // esta funcion hace que se muestre o se ocultend los libros segun genero
            const generoLibro = card.querySelector('.genero').textContent;

            if (generoSeleccionado === "todos" || generoLibro === generoSeleccionado){
                card.style.display = 'block'; // muestra el libro
            }
            else{
                card.style.display ='none'; // oculta
            }
        });



    });
});