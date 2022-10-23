/*
var dox = new Dox(2,1);

var playerDesign;
var player = Player(playerDesign);

var npcDesign;
var npc = Npc(npcDesign)

dox.players.push(player)
dox.npcs.push(npc)
dox.run()
*/

class Player {
    constructor(map) {
        this.map = this.initMap(map)
        this.element = this.createPlayer()
        this.playerPosition = {"x":0, "y":0}
        this.isShot = false
        this.isNpc = false
    }
    initMap(map)
    {
        console.log(this);
        if (!map.players.includes(this)) {
            map.players.push(this)
        }
        return map
    }
    createPlayer()
    {
        var player = document.createElement("div")
        Object.assign(player.style, {
            backgroundColor : "black",
            border: "thin solid black",
            color: "black",
            className: "",
            position: "absolute",
            width: "10px",
            height: "10px"
        });
        this.map.element.appendChild(player);
        return player
    }
    updatePlayerPosition(x, y)
    {
        var playerXPosition = this.playerPosition.x  + parseFloat(this.element.style.width) + x;
        var mapWidth = parseFloat(this.map.element.style.width)
        if (playerXPosition < mapWidth && playerXPosition > parseFloat(this.element.style.width))
        {
            this.playerPosition.x += x;          
            Object.assign(this.element.style, {
                left: this.playerPosition.x + "px"
            })
    
        }
        var playerYPosition = this.playerPosition.y + parseFloat(this.element.style.height) + y 
        var mapHeight = parseFloat(this.map.element.style.height)
        if (playerYPosition < mapHeight && playerYPosition > parseFloat(this.element.style.height)) 
        {
            this.playerPosition.y += y;          
            Object.assign(this.element.style, {
                top: this.playerPosition.y + "px"
            })
    
        }        
    }
    createBullet() {
        var bullet = document.createElement("div");
        bullet.className = "";
        Object.assign(bullet.style, {
            position: "absolute",
            backgroundColor: "red",
            border: "thin solid black",
            color: "red",
            width: "10px",
            height: "4px",
            left: this.playerPosition.x + "px",
            top: this.playerPosition.y + "px"
        })
        this.map.element.appendChild(bullet);    
        return bullet
    }
    shoot() {
        var bullet = this.createBullet()
        var bulletPosition = parseInt(bullet.style.left);
        var bulletInterval = setInterval(function(){
            bulletPosition += 1
            bullet.style.left = bulletPosition + "px"
            if (bulletPosition >= parseInt(this.map.element.style.width))
            {
                bullet.remove()
                clearInterval(bulletInterval)
            }
            for (var i in this.map.players)
            {
                var player = this.map.players[i]
                if (player, player.isNpc === true && bulletPosition == player.playerPosition.x && parseFloat(bullet.style.top) == player.playerPosition.y)
                {
                    player.isShot = true
                    player.element.remove()
                }
    
            }
        },2)

    }
}
class Gamemap {
    constructor() {
        this.element = this.createMap()
        this.players = []
    }
    createMap() {
        var map = document.createElement("div");
        map.className = "position-absolute top-50 start-50 translate-middle";
        Object.assign(map.style, {
            backgroundColor: "grey",
            border: "thin solid black",
            color:"green",
            width: "400px",
            height: "400px"
        });
        document.body.appendChild(map);
        return map
    }
}
function movePressed(player, direction, event)
{
    if (direction === "down" && event.keyCode === 40)
    {
        player.updatePlayerPosition(0, 20)  
    }
    if (direction === "up" && event.keyCode === 38)
    {
        player.updatePlayerPosition(0, -20)  
    }
    if (direction === "left" && event.keyCode === 37)
    {
        player.updatePlayerPosition(-20, 0)  
    }
    if (direction === "right" && event.keyCode === 39)
    {
        player.updatePlayerPosition(20, 0)  
    }
}

function shootPressed(player, event)
{
    if (event.isComposing || event.keyCode === 32) 
    {
        player.shoot()
    }
}

var map = new Gamemap()
var player = new Player(map)
var npc = new Player(map)
npc.isNpc = true
npc.updatePlayerPosition(380, 200)
var side = "down";
var npcInterval = setInterval(function() {
    if (side === "down" && npc.playerPosition.y <= parseFloat(this.map.element.style.height) - parseFloat(this.npc.element.style.height) - 50)
    {
        npc.updatePlayerPosition(0, Math.floor(Math.random() * 15)+1)
    }
    else
    {
        side = "up";
    }
    if (side === "up" && npc.playerPosition.y >=  parseFloat(this.npc.element.style.height) + 50)
    {
        npc.updatePlayerPosition(0, -(Math.floor(Math.random() * 15)+1))
    }
    else
    {
        side = "down";
    }
    if(npc.isShot)
    {
        clearInterval(npcInterval)
    } 
}, 30)
player.updatePlayerPosition(10,200)
addEventListener('keydown', (event) => {movePressed(player, "down", event)})
addEventListener('keydown', (event) => {movePressed(player, "up", event)})
addEventListener('keydown', (event) => {movePressed(player, "left", event)})
addEventListener('keydown', (event) => {movePressed(player, "right", event)})
addEventListener('keydown', (event) => {shootPressed(player, event)})