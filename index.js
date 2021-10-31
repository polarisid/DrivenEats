function select(elemento){

    if(elemento.querySelector(".almoco")!==null){
        const elemento_selecionado = document.querySelector(".prato-section .selecionado");
        const icon_selected = document.querySelector(".prato-section .mostrar")
        if(elemento_selecionado!==null){
        elemento_selecionado.classList.toggle("selecionado");
        }
        if(icon_selected!==null){
        icon_selected.classList.toggle("mostrar");
        }
        //para fazer toogle ao clicar novamente adicionar else aqui
        elemento.querySelector(".icon-check").classList.add("mostrar");
        elemento.classList.add("selecionado");
    }

    if(elemento.querySelector(".bebida")!==null){
        const elemento_selecionado = document.querySelector(".bebida-section .selecionado");
        const icon_selected = document.querySelector(".bebida-section .mostrar")
        if(elemento_selecionado!==null){
        elemento_selecionado.classList.toggle("selecionado");
        }
        if(icon_selected!==null){
        icon_selected.classList.toggle("mostrar");
        }
        elemento.querySelector(".icon-check").classList.add("mostrar");
        elemento.classList.add("selecionado");
    }

    if(elemento.querySelector(".sobremesa")!==null){
        const elemento_selecionado = document.querySelector(".sobremesa-section .selecionado");
        const icon_selected = document.querySelector(".sobremesa-section .mostrar")
        if(elemento_selecionado!==null){
        elemento_selecionado.classList.toggle("selecionado");
        }
        if(icon_selected!==null){
        icon_selected.classList.toggle("mostrar");
        }
        elemento.querySelector(".icon-check").classList.add("mostrar");
        elemento.classList.add("selecionado");
    }
    
    if((document.querySelector(".sobremesa-section .selecionado")!==null) && (document.querySelector(".bebida-section .selecionado")!==null) && (document.querySelector(".prato-section .selecionado")!==null)){
        console.log("Miseravao")
        const meubut = document.querySelector(".fixed-bar-container button");
        meubut.toggleAttribute("disabled")
        meubut.innerHTML ="Fechar Pedido";
        meubut.classList.add("fechar-pedido");

    }
}



