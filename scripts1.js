const jogadores = [
    { nome: "Bernardo", numero: 1, posicao: "Guarda-Redes", imagem: "Jogadores/Treinadores.jpg", categoria: "guarda-redes" },
    { nome: "Vasco", numero: 76, posicao: "Guarda-Redes", imagem: "Jogadores/Treinadores.jpg", categoria: "guarda-redes" },
    { nome: "Marco Borges", numero: 2, posicao: "Defesa Central", imagem: "Jogadores/bogas.jpg", categoria: "defesas" },
    { nome: "Diogo Bento", numero: 3, posicao: "Médio", imagem: "Jogadores/bento.jpg", categoria: "medios" },
    { nome: "Fabio Lopes", numero: 4, posicao: "Defesa direito", imagem: "Jogadores/fabiolopes.jpg", categoria: "defesas" },
    { nome: "Guilherme Lopes",numero: 1, posicao: "Médio", imagem: "Jogadores/guilopes.jpg", categoria: "medios" },
    { nome: "Jhony Novais",numero: 1, posicao: "Médio Defensivo", imagem: "Jogadores/jhony.jpg", categoria: "medios" },
    { nome: "João Marques",numero: 1, posicao: "Defesa Direito", imagem: "Jogadores/joaozito.jpg", categoria: "defesas" },
    { nome: "Jose Luta",numero: 1, posicao: "Defesa Central", imagem: "Jogadores/luta.jpg", categoria: "defesas" },
    { nome: "Mario Bronze",numero: 1, posicao: "Ponta de Lança", imagem: "Jogadores/mario.jpg", categoria: "avancados" },
    { nome: "Luis Mendes",numero: 1, posicao: "Extremo Direito", imagem: "Jogadores/mendes.jpg", categoria: "avancados" },
    { nome: "Messi",numero: 1, posicao: "Ponta de Lança", imagem: "Jogadores/mini.jpg", categoria: "avancados" },
    { nome: "Ricardo Mendes",numero: 1, posicao: "Defesa Central", imagem: "Jogadores/pedras.jpg", categoria: "defesas" },
    { nome: "Ruben Lopes",numero: 1, posicao: "Defesa Esquerdo", imagem: "Jogadores/rubenlopes.jpg", categoria: "defesas" },
    { nome: "Rui Duarte",numero: 31, posicao: "Médio Defensivo", imagem: "Jogadores/ruiduarte.jpg", categoria: "medios" },
    { nome: "Sebastião Duarte",numero: 22, posicao: "Extremo Direito", imagem: "Jogadores/sebas.jpg", categoria: "avancados" },
    { nome: "Bicho",numero: 77, posicao: "Tudo", imagem: "Jogadores/tiago.jpg", categoria: "defesas" },
    { nome: "Conde",numero: 77, posicao: "", imagem: "Jogadores/conde.png", categoria: "trabalhador" },
    { nome: "António Stoffel",numero: 77, posicao: "Medio", imagem: "Jogadores/stof.png", categoria: "Medio" },
    { nome: "João Santos", posicao: "Treinador", imagem: "Jogadores/Treinadores.jpg", categoria: "treinadores" },
    { nome: "Gonçalo Duarte", posicao: "Treinador", imagem: "Jogadores/Treinadores.jpg", categoria: "treinadores" },
    { nome: "Francisco Bronze", posicao: "Treinador", imagem: "Jogadores/Treinadores.jpg", categoria: "treinadores" }

];

const fotosEquipaJogos = [
    { src: "equipa1.jpg", alt: "Jogo 1" },
    { src: "equipa2.jpg", alt: "Jogo 2" },
    { src: "equipa3.jpg", alt: "Jogo 3" }
];

const fotosEventos = [
    { src: "eventos/evento1.jpg", alt: "Evento 1" },
    { src: "eventos/evento2.jpg", alt: "Evento 2" },
    { src: "eventos/evento3.jpg", alt: "Evento 3" },
    { src: "eventos/evento4.jpg", alt: "Evento 2" },
    { src: "eventos/evento5.jpg", alt: "Evento 2" }
];

function criarMosaicoJogadores(jogadores) {
    const mosaicoContainer = document.getElementById('mosaico-jogadores');
    mosaicoContainer.innerHTML = ''; // Limpa o contêiner

    jogadores.forEach(jogador => {
        const jogadorDiv = document.createElement('div');
        jogadorDiv.classList.add('jogador-item');

        const jogadorImg = document.createElement('img');
        jogadorImg.src = jogador.imagem;
        jogadorImg.alt = jogador.nome;
        jogadorImg.classList.add('jogador-img');
        jogadorImg.addEventListener('click', () => {
            updateJogadorInfo(jogador); // Chama a função para exibir as informações do jogador
        });

        jogadorDiv.appendChild(jogadorImg);
        mosaicoContainer.appendChild(jogadorDiv);
    });
}

function updateJogadorInfo(jogador) {
    const overlay = document.getElementById('jogador-info-overlay');
    const imgOverlay = document.getElementById('jogador-img-overlay');
    const nomeOverlay = document.getElementById('jogador-nome-overlay');
    const numeroOverlay = document.getElementById('jogador-numero-overlay');
    const posicaoOverlay = document.getElementById('jogador-posicao-overlay');
    const fecharOverlay = document.getElementById('fechar-overlay');

    imgOverlay.src = jogador.imagem;
    nomeOverlay.textContent = `Nome: ${jogador.nome}`;
    numeroOverlay.textContent = `Número: ${jogador.numero || 'N/A'}`;
    posicaoOverlay.textContent = `Posição: ${jogador.posicao}`;

    overlay.style.display = 'flex'; // Exibe o overlay

    fecharOverlay.addEventListener('click', () => {
        overlay.style.display = 'none'; // Esconde o overlay ao clicar no botão "Fechar"
    });
}

function handleCategoriaChange() {
    const categoriaSelecionada = document.getElementById('categoria').value;
    const jogadoresFiltrados = categoriaSelecionada === 'todos' ? jogadores : jogadores.filter(jogador => jogador.categoria === categoriaSelecionada);
    criarMosaicoJogadores(jogadoresFiltrados);
}

function showFotosEquipaJogos() {
    const equipaJogosContainer = document.getElementById('equipa-jogos');
    equipaJogosContainer.innerHTML = ''; // Limpa o contêiner

    fotosEquipaJogos.forEach(foto => {
        const fotoDiv = document.createElement('div');
        fotoDiv.classList.add('foto-jogo');

        const imgElement = document.createElement('img');
        imgElement.src = foto.src;
        imgElement.alt = foto.alt;
        imgElement.classList.add('jogo-img');

        imgElement.addEventListener('click', () => {
            showFotosEquipaJogosOverlay(foto); // Chama a função para exibir as informações do jogador
        });

        fotoDiv.appendChild(imgElement);
        equipaJogosContainer.appendChild(fotoDiv);
    });
}

function showFotosEquipaJogosOverlay(foto){
    const over=document.getElementById('equipa-overlay');
    const imgOver=document.getElementById('equipa-img-overlay');
    const fecharOver = document.getElementById('fechar-imagem');

    imgOver.src=foto.src;
    over.style.display='flex';

    fecharOver.addEventListener('click', () => {
        over.style.display = 'none';
    });

    

}

function showEventos() {
    const eventoContainer = document.getElementById('eventos');
    eventoContainer.innerHTML = '';

    fotosEventos.forEach(evento => {
        const eventoDiv = document.createElement('div');
        eventoDiv.classList.add('foto-eventos');

        const imgElement = document.createElement('img');
        imgElement.src = evento.src;
        imgElement.alt = evento.alt;
        imgElement.classList.add('evento-img');

        eventoDiv.appendChild(imgElement);
        eventoContainer.appendChild(eventoDiv);

    });

}

// Adiciona o evento change ao select de categoria
document.getElementById('categoria').addEventListener('change', handleCategoriaChange);

criarMosaicoJogadores(jogadores);
showFotosEquipaJogos();


