import {storage} from './modules/storage.js'
import {katakana,get_new_random_item_from_array} from './modules/kana.js'
import {ReviewItemScene} from './modules/ReviewItemScene.js'

storage.SetValue(["a","b","c"],'test')
console.log(storage.GetValue(["g"]))

let review_item_scene = new ReviewItemScene("")
let review_item = get_new_random_item_from_array(katakana.vowels)
while(true){

    console.log('reviewing',review_item)
    review_item_scene.PresentText(review_item.present)
    let user_answer = null;

    while(user_answer != review_item.answer){
        user_answer = await review_item_scene.AwaitAnswer()
        console.log(`user tried (${user_answer})`)
    }
    review_item = get_new_random_item_from_array(katakana.vowels,review_item.index)

    //Show scene
    //Wait for answer
    //Grade answer
}