const space = {
    name : 'Space-X',
    speed : 0
}

function acelerar(space: { name: string; speed: number } , speed: number){
    space.speed = speed
}

acelerar(space,10)