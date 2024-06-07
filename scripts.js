

function setActiveLink() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
}

const jogadores = [
    { nome: "Bernardo", numero: 1, posicao: "Guarda-Redes", imagem: "cristianoimag.jpg", categoria: "guarda-redes" },
    { nome: "Mrco Borges", numero: 2, posicao: "Defesa", imagem: "img2.jpg", categoria: "defesas" },
    { nome: "Jogador 3", numero: 3, posicao: "Médio", imagem: "img3.jpg", categoria: "medios" },
    { nome: "Jogador 4", numero: 4, posicao: "Avançado", imagem: "img4.jpg", categoria: "avancados" },
    { nome: "Treinador 1", posicao: "Treinador", imagem: "img5.jpg", categoria: "treinadores" }
];

function updateJogadorInfo(jogador) {
    jogadorInfo.img.src = jogador.imagem;
    jogadorInfo.nome.textContent = `Nome: ${jogador.nome}`;
    jogadorInfo.posicao.textContent = `Posição: ${jogador.posicao}`;
    jogadorInfo.numero.textContent = `Número: ${jogador.numero || 'N/A'}`;
}

function filterJogadores(categoria) {
    currentCategoria = categoria;
    filteredJogadores = categoria === 'todos' ? jogadores : jogadores.filter(jogador => jogador.categoria === categoria);
    currentIndex = 0;
    updateJogadorInfo(filteredJogadores[currentIndex]);
}

function handleAnteriorClick() {
    if (currentIndex > 0) {
        currentIndex--;
        updateJogadorInfo(filteredJogadores[currentIndex]);
    }
}

function handleProximoClick() {
    if (currentIndex < filteredJogadores.length - 1) {
        currentIndex++;
        updateJogadorInfo(filteredJogadores[currentIndex]);
    }
}

function handleCategoriaChange(event) {
    const categoriaSelecionada = event.target.value;
    filterJogadores(categoriaSelecionada);
}

const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
const categoriaSelect = document.getElementById('categoria');
const jogadorInfo = {
    img: document.getElementById('jogador-img'),
    nome: document.getElementById('jogador-nome'),
    posicao: document.getElementById('jogador-posicao'),
    numero: document.getElementById('jogador-numero')
};



let currentCategoria = 'todos';
let currentIndex = 0;
let filteredJogadores = jogadores;

setActiveLink();
filterJogadores('todos');



const fotosEquipaJogos = [
    { src: "equipa1.jpg", alt: "Jogo 1" },
    { src: "equipa2.jpg", alt: "Jogo 2" },
    { src: "equipa3.jpg", alt: "Jogo 3" },
];

function showFotosEquipaJogos() {
    const equipaJogosContainer = document.getElementById('equipa-jogos');
    equipaJogosContainer.innerHTML = ''; 

    fotosEquipaJogos.forEach(foto => {
        const imgElement = document.createElement('img');
        imgElement.src = foto.src;
        imgElement.alt = foto.alt;
        imgElement.classList.add('jogo-img'); // Adicione uma classe CSS para estilização se necessário
        equipaJogosContainer.appendChild(imgElement);
    });
}


showFotosEquipaJogos();


