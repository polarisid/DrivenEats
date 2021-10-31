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
        const meubut = document.querySelector(".fixed-bar-container button");
        meubut.toggleAttribute("disabled")
        meubut.innerHTML ="Fechar Pedido";
        meubut.classList.add("fechar-pedido");

    }
}



function fechar(){
    //calcular valores selecionados
    var valor_prato1 =[];
    var valor_prato2 =[];
    var valor_prato3 =[];
    var valor_prato1 = document.querySelector(".prato-section .selecionado .valor").innerHTML.split(" ");
    var valor_prato2 = document.querySelector(".bebida-section .selecionado .valor").innerHTML.split(" ");
    var valor_prato3 = document.querySelector(".sobremesa-section .selecionado .valor").innerHTML.split(" ");
    var valor_total = (parseFloat(valor_prato1[1].replace(",", ".")) + parseFloat(valor_prato2[1].replace(",", ".")) +parseFloat(valor_prato3[1].replace(",", "."))) ;
    
    var nome = window.prompt("Por favor insira seu nome completo", "nome");
    var adress = window.prompt("Por favor insira seu Endereço", "Endereço");


    console.log(valor_total.toFixed(2))
    console.log(valor_prato1)


}