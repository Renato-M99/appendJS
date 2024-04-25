// capturando o formulario e as tags que irao ser modificadas
const form = document.querySelector('form');
const div = document.querySelector('div');

// evento

form.addEventListener('submit', (event) =>{

    event.preventDefault();


    let value = Number(form.inValor.value);

    for(let count = 1; count<=value; count++){
        let p = document.createElement('p');
        
        div.append(p);

        p.innerHTML= `${count}`;
      
    }
    
});

