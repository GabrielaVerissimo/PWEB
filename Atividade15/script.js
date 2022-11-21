function recuperaSelecao() {
    var selecao = document.getElementById('cursos').value;
    
    if (selecao == "ADS"){
        alert("Você será redirecionado para página do curso escolhido")
        window.open("http://www.fatecsorocaba.edu.br/curso_ads.asp"); 
    }
    if (selecao == "EA"){
        alert("Você será redirecionado para página do curso escolhido")
        window.open("http://www.fatecsorocaba.edu.br/curso_ea.asp");
        
    }  
    if (selecao == "SB"){
        alert("Você será redirecionado para página do curso escolhido")
        window.open("http://www.fatecsorocaba.edu.br/curso_sb.asp");
        
    }
    if (selecao == "POL"){
        alert("Você será redirecionado para página do curso escolhido")
        window.open("http://www.fatecsorocaba.edu.br/curso_pol.asp");
        
    }     
}
