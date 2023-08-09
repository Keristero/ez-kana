let katakana = {
    vowels:["ア a","イ i","ウ u","エ e","オ o"],
    K:["カ ka","キ ki","ク ku","ケ ke","コ ko"]
}

function random_index_from_array(arr){
    return Math.floor(Math.random()*arr.length)
}

function get_random_kana_item_from_text_array(arr){
    let random_index = random_index_from_array(arr)
    let string = arr[random_index]
    let values = string.split(' ')
    return {present:values[0],answer:values[1],index:random_index}
}

function get_new_random_item_from_array(array,banned_index){
    let value = null
    while(value == null || value.index == banned_index){
        value = get_random_kana_item_from_text_array(array)
    }
    return value
}

export {katakana,get_new_random_item_from_array}