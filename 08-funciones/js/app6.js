const player = {
    reproducir: function(id){
        console.log(`Reproduciendo la cancion: ${id}`);
    },
    pausar: function(){
        console.log(`Pausando musica...`);
    },
    crearPlaylist: function (nombre) {
        console.log(`Playlist ${nombre} creada.`);
    },
    reproducirPlaylist: function (nombre){
        console.log(`Reproduciendo Playlist ${nombre}.`);
    }
}

player.reproducir(55);
player.pausar();
player.crearPlaylist('Las mamalonas');
player.reproducirPlaylist('Las Mamalonas');

player.borrar = function (id){
    console.log(`Borrando la cancion ${id}`);
}

player.borrar (55);