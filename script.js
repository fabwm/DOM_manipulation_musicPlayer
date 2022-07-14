document.querySelector('.botao-pause').style.display = 'none'; 

let musicas = [
    {titulo:'Fade to Black', artista:'Metallica', src:'musicas/Fade To Black.mp3', img:'imagens/ride.jpg', album:'Ride The Lightning'},
    {titulo:'Ride The Lightning', artista:'Metallica', src:'musicas/Ride The Lightning.mp3', img:'imagens/ride.jpg', album:'Ride The Lightning'},
    {titulo:'Welcome Home (Sanitarium)', artista:'Metallica', src:'musicas/Welcome Home (Sanitarium).mp3', img:'imagens/master.jpg', album:'Master of Puppets'},
    {titulo:'For Whom The Bell Tolls', artista:'Metallica', src:'musicas/For Whom The Bell Tolls.mp3', img:'imagens/ride.jpg', album:'Ride The Lightning'}
];

let indexMusic = 0;

let audio = document.querySelector('audio');
let barra = document.querySelector('progress');

let nomeMusic = document.querySelector('.descricao h2');
let imagem = document.querySelector('.image');
let banda = document.querySelector('.descricao i');
let albumBanda = document.querySelector('.descricao h3');

const musicEnd = document.querySelector('.fim')

const end = progressMusic(Math.floor(audio.duration));

//eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pauseMusica);
audio.addEventListener('timeupdate', progressoMusica);
musicEnd.textContent = end;
document.querySelector('.botao-back').addEventListener('click', () =>{
    indexMusic--;
    if (indexMusic < 0){
        indexMusic = 3
    }
    alterarMusic(indexMusic)
});
document.querySelector('.botao-foward').addEventListener('click', () =>{
    indexMusic++;
    if (indexMusic > 3){
        indexMusic = 0
    }
    alterarMusic(indexMusic)
});
//funções
function alterarMusic (index) {
    audio.play();
    audio.setAttribute('src', musicas[index].src);
    audio.addEventListener('loadeddata', () => {
        nomeMusic.textContent = musicas[index].titulo;
        banda.textContent = musicas[index].artista;
        imagem.textContent = musicas[index].img;
        albumBanda.texteContent = musicas[index].album;
    })
}

function tocarMusica () {
    audio.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pauseMusica () {
    audio.pause();
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block';
}

function progressoMusica () {
    barra.style.width = parseFloat(audio.currentTime / audio.duration * 100).toFixed(1) + '%';
    let musicTime = document.querySelector('.inicio')
    musicTime.textContent = progressMusic(parseInt(audio.currentTime));
}

function progressMusic (seg) {
    let campoMin = Math.floor(seg / 60);
    let campoSeg = seg % 60;
    if (campoSeg < 10){
        campoSeg = '0' + campoSeg;
    }

    return campoMin+ ':' +campoSeg;
}

//alterarMusicEnd()







