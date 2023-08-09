
import { InputBoxScene } from './InputBoxScene.js';
import {Scene} from './Scene.js'
import { async_sleep_ms } from './handy_dandies.js'

class ReviewItemScene extends Scene{
    constructor(){
        super()
        //ctx.fillRect(0,0,canvas.width,canvas.height)
        this.input_box = new InputBoxScene()
        this.input_box.canvas.style.zLayer = this.canvas.style.zLayer + 1
    }
    PresentText(text){
        this.text = text
        this.Draw()
    }
    Draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.font = "30px Arial";
        let middle_x = this.canvas.width/2
        let middle_y = this.canvas.height/2
        this.ctx.fillText(this.text,middle_x,middle_y)
    }
    async AwaitAnswer(){
        let answer = null
        let answer_handler = (event)=>{
            this.input_box.canvas.removeEventListener('submit_answer',answer_handler)
            answer = event.detail
        }
        this.input_box.canvas.addEventListener('submit_answer',answer_handler)
        while(answer == null){
            await(async_sleep_ms(100))
            console.log('slep')
        }
        return answer
    }
}

export {ReviewItemScene}