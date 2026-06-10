const canvas = document.querySelector("canvas")
const board = canvas.getContext("2d")

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_RATIO.WIDTH
canvas.height = DISPLAY_PIXEL.HEIGHT * ASPECT_RATIO.HEIGHT

const playerProperty = {
    width: 100,
    height: 100,
    speed: 1,
    color: "blue",
    position: {
        x: 0,
        y: 0
    }
}

const enemyProperty = {
    width: 100,
    height: 100,
    speed: 1,
    color: "red",
    position: {
        x: canvas.width - 100,
        y: canvas.height - 100
    }
}

const ground = new Ground('/src/assets/background.jpg', canvas.width, canvas.height)
const player = new Player(playerProperty)
const enemy = new Enemy(enemyProperty)

function animate() {
    ground.create()
    player.create()
    // enemy.create()

    player.update()
    enemy.update()

    window.requestAnimationFrame(animate)
}

window.addEventListener(
    "keydown", 
    function(callback) {
        player.movement(callback.key)
    }
)

animate()