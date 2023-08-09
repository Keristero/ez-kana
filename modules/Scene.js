class Scene{
    constructor(){
        this.canvas = document.createElement('canvas')
        this.ctx = this.canvas.getContext('2d')
        document.body.appendChild(this.canvas)
        this.canvas.style.position = "absolute"
        this.canvas.style.left = 0
        this.canvas.style.top = 0
        this.canvas.style.zIndex = 0
    }
}
export {Scene}