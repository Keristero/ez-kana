function async_sleep_ms(time_ms){
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,time_ms)
    })
}

export {async_sleep_ms}