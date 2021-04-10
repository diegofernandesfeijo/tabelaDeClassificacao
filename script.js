/*podemos criar um objeto com atributos*/
var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

var rafa = {
  nome:"Rafa",
  vitorias: 2,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

/*depois podemos chamar todo o objeto ou chamar somente um atributo*/
//console.log(paulo) /*todo objeto*/
//console.log(rafa.vitorias) /*somente atributo do objeto*/

rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
//função que calcula os pontos
function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos
}

var jogadores = [rafa, paulo]

exibirJogadoresNaTela(jogadores) //mostra a função criada abaixo

//função que exibe os jogadores na tela
function exibirJogadoresNaTela(jogadores) {
  var html = ''
  for(i = 0; i < jogadores.length; i++) {
    html += '<tr><td>' + jogadores[i].nome + '</td>'
    html += '<td>' + jogadores[i].vitorias + '</td>'
    html += '<td>' + jogadores[i].empates + '</td>'
    html += '<td>' + jogadores[i].derrotas + '</td>'
    html += '<td>' + jogadores[i].pontos + '</td>'
    html += '<td><button onClick="adicionarVitoria('+ i + ')">Vitória</button></td>'
    html += '<td><button onClick="adicionarEmpate('+ i + ')">Empate</button></td>'
    html += '<td><button onClick="adicionarDerrota('+ i +')">Derrota</button></td></tr>'
  }
  //variavel que pega id do HTML para mostrar na tela usando getElementById
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html //concatena no id "tabelaJogadores"
}

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}


//+= é a mesma coisa que ex.: (html = html + algo) / ou / html += algo