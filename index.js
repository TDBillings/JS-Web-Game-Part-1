function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 35, 200)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 300)
newImage('assets/crate.png', 413, 135)
newImage('assets/well.png', 609, 100)

newItem('assets/sword.png', 535, 285)
newItem('assets/staff.png', 590, 133)
newItem('assets/sheild.png', 105, 185)


