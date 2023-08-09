class LocalStorage{
    constructor(){
        try{
            this.Load()
        }catch(e){
            //failed to load, boring, who cares
        }
        if(!this.memory){
            this.memory = {}
            this.Save()
        }
    }
    Load(){
        this.memory = JSON.parse(localStorage.getItem("memory"));
    }
    Save(){
        if(!this.memory){
            throw("lets not save this, there is nothing to save")
        }
        localStorage.setItem("memory", JSON.stringify(this.memory));
    }
    ClearMemory(){
        console.log(window.alert('woah, are you sure you want to clear memory?'))
        localStorage.clear();
    }
    SetValue(keys,value){
        accessNestedKeyCreatingLayersAsNeeded(this.memory,keys,value)
        console.log(this.memory)
        this.Save()
    }
    GetValue(keys){
        return accessNestedKeyCreatingLayersAsNeeded(this.memory,keys)
    }
}

function accessNestedKeyCreatingLayersAsNeeded(obj,keys,value){
    //If you provide a non null value, it will be set, otherwise we return
    let i = 0
    for(let key of keys){
        let at_right_level = i === keys.length - 1
        if(at_right_level){
            if(value != null){
                //save if we have a value to save
                obj[key] = value
            }else{
                //return the value if there is one
                if(obj[key]){
                    return obj[key]
                }else{
                    return null
                }
            }
        }else{
            if(!obj[key]){
                obj[key] = {}
            }
            obj = obj[key]
        }
        console.log(key,obj)
        i++
    }
}

const storage = new LocalStorage()

export {storage}