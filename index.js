function select(elemento){
    const elemento_selecionado = document.querySelector(".selecionado");


    if(elemento_selecionado!==null){
        elemento_selecionado.classList.remove("selecionado");
    }

   
    
    elemento.classList.toggle("selecionado");   
    elemento.querySelector(".icon-check").classList.toggle("escondido");
}


    const elemento_selected = elemento.querySelectorAll(".opcao-card")
