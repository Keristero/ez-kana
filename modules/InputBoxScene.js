import { Scene } from "./Scene.js"

class InputBoxScene extends Scene{
    constructor(){
        super()
        this.user_input = ""
        this.valid_input_regex = /^[a-zA-Z0-9]{1}$/
        this.key_press_listener = document.addEventListener("keydown", (event) => {
            if(event.key.match(this.valid_input_regex)){
                this.user_input+=event.key
            }else if(event.key == "Enter"){
                let event = new CustomEvent("submit_answer",{detail:this.user_input});
                this.canvas.dispatchEvent(event);
                this.user_input = ""
            }else if(event.key == "Backspace"){
                if(this.user_input.length > 0){
                    this.user_input = this.user_input.slice(0,this.user_input.length-1)
                }
            }
            this.Draw()
            event.preventDefault()
        });
    }
    Draw(){
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.user_input,0,30)
    }
}

export {InputBoxScene}