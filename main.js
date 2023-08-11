//import kaboom context
import k from './modules/kaboom.js'

//scenes
import './scenes/game.js'

//other libs
import {storage} from './modules/storage.js'
storage.SetValue(["a","b","c"],'test')
console.log(storage.GetValue(["g"]))

//go to main game scene
k.go('game')