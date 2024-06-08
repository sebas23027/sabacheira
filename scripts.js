

const jogadores = [
    { nome: "Jogador 1", numero: 1, posicao: "Guarda-Redes", imagem: "img1.jpg", categoria: "guarda-redes" },
    { nome: "Jogador 2", numero: 2, posicao: "Defesa", imagem: "img2.jpg", categoria: "defesas" },
    { nome: "Jogador 3", numero: 3, posicao: "Médio", imagem: "img3.jpg", categoria: "medios" },
    { nome: "Jogador 4", numero: 4, posicao: "Avançado", imagem: "img4.jpg", categoria: "avancados" },
    { nome: "Treinador 1", posicao: "Treinador", imagem: "img5.jpg", categoria: "treinadores" }
];

const fotosEquipaJogos = [
    { src: "jogo1.jpg", alt: "Jogo 1" },
    { src: "jogo2.jpg", alt: "Jogo 2" },
    { src: "jogo3.jpg", alt: "Jogo 3" },
    // Adicione mais fotos conforme necessário
];

const jogadorInfo = {
    img: document.getElementById('jogador-img'),
    nome: document.getElementById('jogador-nome'),
    posicao: document.getElementById('jogador-posicao'),
    numero: document.getElementById('jogador-numero')
};

let currentCategoria = 'todos';
let currentIndex = 0;
let filteredJogadores = jogadores;

function updateJogadorInfo() {
    const jogador = filteredJogadores[currentIndex];
    jogadorInfo.img.src = jogador.imagem;
    jogadorInfo.nome.textContent = `Nome: ${jogador.nome}`;
    jogadorInfo.posicao.textContent = `Posição: ${jogador.posicao}`;
    jogadorInfo.numero.textContent = `Número: ${jogador.numero || 'N/A'}`;
}

function filterJogadores(categoria) {
    currentCategoria = categoria;
    filteredJogadores = categoria === 'todos' ? jogadores : jogadores.filter(jogador => jogador.categoria === categoria);
    currentIndex = 0;
    updateJogadorInfo();
}

function handleAnteriorClick() {
    if (currentIndex > 0) {
        currentIndex--;
        updateJogadorInfo();
    }
}

function handleProximoClick() {
    if (currentIndex < filteredJogadores.length - 1) {
        currentIndex++;
        updateJogadorInfo();
    }
}

function handleCategoriaChange(event) {
    filterJogadores(event.target.value);
}

function showFotosEquipaJogos() {
    const equipaJogosContainer = document.getElementById('equipa-jogos');
    equipaJogosContainer.innerHTML = ''; // Limpa o contêiner

    fotosEquipaJogos.forEach(foto => {
        const imgElement = document.createElement('img');
        imgElement.src = foto.src;
        imgElement.alt = foto.alt;
        imgElement.classList.add('jogo-img'); // Adicione uma classe CSS para estilização se necessário
        equipaJogosContainer.appendChild(imgElement);
    });
}

// Inicialização
filterJogadores('todos');
showFotosEquipaJogos();