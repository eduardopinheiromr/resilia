window.addEventListener('load', teclouAlgo);

var search = document.getElementById('search');
var divFilme = document.getElementById('filmepesquisado');
var btnFecharPesquisa = document.getElementById('fecharpesquisa');

function teclouAlgo(event) {
  search.addEventListener('keyup', pesquisaFilme);
}

function pesquisaFilme() {
  if (event.key === 'Enter') {
    let filme = search.value;
    buscaAPI(filme);
  }
}

function buscaAPI(nomeDoFilme) {
  fetch(`https://www.omdbapi.com/?t=${nomeDoFilme}&apikey=f3982364`).then(
    function (response) {
      response.json().then(function (data) {
        render(data);
      });
    }
  );
}

function render(apiJSON) {
  divFilme.innerHTML = '';

  var divTexto = document.createElement('div');
  divTexto.classList.add('movieinfo');

  var titulo = document.createElement('span');
  var atores = document.createElement('span');
  var ano = document.createElement('span');
  var tempo = document.createElement('span');
  var genero = document.createElement('span');
  var plot = document.createElement('span');
  var imagem = document.createElement('img');

  imagem.src = apiJSON.Poster;
  titulo.innerHTML = apiJSON.Title;
  titulo.classList.add('titulopesquisado');
  atores.innerHTML = `<strong>Atores principais:</strong> ${apiJSON.Actors}`;
  ano.innerHTML = `<strong>Lançamento:</strong> ${apiJSON.Year}`;
  tempo.innerHTML = `<strong>Duração:</strong> ${apiJSON.Runtime}`;
  genero.innerHTML = `<strong>Gênero:</strong> ${apiJSON.Genre}`;
  plot.innerHTML = `<strong>Sinopse:</strong> ${apiJSON.Plot}`;
  plot.classList.add('sinopse');

  divTexto.appendChild(titulo);
  divTexto.appendChild(genero);
  divTexto.appendChild(ano);
  divTexto.appendChild(atores);
  divTexto.appendChild(tempo);
  divTexto.appendChild(plot);

  btnFecharPesquisa.style.display = 'block';
  divFilme.appendChild(imagem);
  divFilme.appendChild(divTexto);
  search.value = '';
}

function fecharPesquisa() {
  divFilme.innerHTML = '';
  btnFecharPesquisa.style.display = 'none';
}
