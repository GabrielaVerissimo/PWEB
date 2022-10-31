var aluno1 = new Object();

//Primeira forma de criar Objeto
aluno1.ra = "0030481921038";
aluno1.nome = "Gabriela Verissimo e Silva";
alert("PRIMEIRA FORMA:" +
      "\n\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);


//Segunda forma de criar Objeto
aluno1["ra"] = "00304819210**";
aluno1["nome"] = "Gabriela Silva";
alert("SEGUNDA FORMA:" +
      "\n\nNome: " + aluno1["nome"] + 
      "\nRA: " + aluno1["ra"]);


//Terceira forma de criar Objeto
var ra = "ra", nome = "nome"
aluno1[ra] = "00304819210**";
aluno1[nome] = "Gabriela Verissimo";
alert("TERCEIRA FORMA:" +
      "\n\nNome: " + aluno1.nome + 
      "\nRA: " + aluno1.ra);