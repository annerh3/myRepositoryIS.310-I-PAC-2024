// player a arrow function
const player = 
{
    reproducir: id => console.log(`Reproduciendo la cancion: ${id}`),
    pausar: () =>  console.log(`Pausando musica...`),
    crearPlaylist: nombre => console.log(`Playlist ${nombre} creada.`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo Playlist ${nombre}.`)
}

player.reproducir(40);
player.pausar();
player.crearPlaylist('Las mamalonas');
player.reproducirPlaylist('Las Mamalonas');
