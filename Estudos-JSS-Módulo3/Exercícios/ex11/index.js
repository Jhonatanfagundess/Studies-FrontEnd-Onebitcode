function Escalar(){
    const namePlayer = document.getElementById('name').value
    const NumberPlayer = document.getElementById('numbercam').value
    const positionPlayer = document.getElementById('position').value

    const confirma = confirm('Escalar: ' + namePlayer + ' Como: ' + positionPlayer + '?')

    if(confirma){
        const teamlist = document.getElementById('team-list')
        const playeritem = document.createElement('li')
        playeritem.id = 'player' + NumberPlayer
        playeritem.innerText = positionPlayer + ':' + namePlayer + '(' + NumberPlayer + ')'
        teamlist.appendChild(playeritem)
        document.getElementById('name').value =''
        document.getElementById('numbercam').value=''
        document.getElementById('position').value=''

    }
}




function Remover() { 
    const NumberPlayer = document.getElementById("numberToRemove").value;
    const playerToRemove = document.getElementById('player' + NumberPlayer);
  
    if (!playerToRemove) {
        alert("Jogador não encontrado!");
        return; // Sai da função se o jogador não existir
    }

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");
  
    if (confirmation) {
        document.getElementById("team-list").removeChild(playerToRemove);
        document.getElementById("numberToRemove").value = "";
    }
}