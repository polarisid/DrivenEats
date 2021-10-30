function select(elemento){
    const elemento_selecionado = document.querySelector(".selecionado");
    const icon_selected = document.querySelector(".mostrar")
    console.log(elemento)

    if(elemento_selecionado!==null){
        elemento_selecionado.classList.toggle("selecionado");
        console.log(elemento_selecionado)
    }
    if(icon_selected!==null){
        icon_selected.classList.toggle("mostrar");
    }
    elemento.querySelector(".icon-check").classList.add("mostrar");
    elemento.classList.add("selecionado");

}


