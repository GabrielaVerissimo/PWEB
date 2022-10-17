var jogador = parseInt(prompt("Escolha sua jogada:\n1. Pedra\n2. Papel\n3. Tesoura"));

var maquina = Math.floor(Math.random() * 3) + 1;
alert(jogador, maquina);

if (jogador == maquina) {
    alert("Empate");
} else if (jogador == 1 && maquina == 2) {
    alert("Você perdeu... \nPedra perde pro Papel");
} else if (jogador == 1 && maquina == 3) {
    alert("Você venceu!! \nPedra ganha da Tesoura");
} else if (jogador == 2 && maquina == 1) {
    alert("Você venceu!! \nPapel ganha da Pedra");
} else if (jogador == 2 && maquina == 3) {
    alert("Você perdeu... \nPapel perde pra Tesoura");
} else if (jogador == 3 && maquina == 1) {
    alert("Você perdeu... \nTesoura perde pra Pedra");
} else {
    alert("Jogada inválida");
}