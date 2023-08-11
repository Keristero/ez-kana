import k from "../modules/kaboom.js"

import {hiragana_sets} from "../modules/data/kana.js"

k.scene("game", () => {
    let input_text = add([
        text("hello"),
        pos(120, 80),
    ]);

    input_text.text = "test 2"
})

console.log(hiragana_sets)