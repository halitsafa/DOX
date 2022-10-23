class Dox {
    constructor(doxSpecs, mapSpecs, playerSpecs, npcSpecs) {
        this.map = new Map() //initiates map by type
        this.player = new Player()
        this.npc = new Npc()
        this.mapType = createMap(mapSpecs) // could be 2 or 3 dimensions
        this.camera = this.createCamera(doxSpecs.view) //camera view, could be 0,1,3 godview, fps, thirdperson
        this.players = createPlayers(playerSpecs)
        this.npcs = createNPCS(npcSpecs)
    }
    createCamera() {
        console.log("create camera")
    }
    createMap()
    {
        console.log(this.mapType)
    }
    createPlayers()
    {
        console.log(this.players);
    }
    createNPCS()
    {
        console.log("npcs created");
    }
    move(player, speed, x, y, z)
    {
        player.move()
    }
    attack(player, attackeds)
    {

    }
    pick()
    {

    }
    ride()
    {

    }
    use() 
    {

    }
    run()
    {

    }
 }

class Map {
    constructor(size, type, background)
    {
        this.size = size
        this.type = type
        this.background = background
    }
    get() 
    {

    }
    create()
    {

    }
    update() 
    {

    }
    remove()
    {}
}

class Player {
    constructor(design, animations, specs) {
        this.design = this.createPlayerFromHTML(design)
        this.animations = animations || null
        this.position = {"x":0,"y":0,"z":0}
        this.specs = specs || {"health":0, "xp":0, "coin":0}
    }
    createPlayerFromHTML(design) {
        console.log(design);
    }
}
 
class Npc {
    constructor(design, mission, animations) {
        this.design = design
        this.mission = mission || null
        this.animations = animations || null
    }
    
}