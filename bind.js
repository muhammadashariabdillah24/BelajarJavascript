let modules = {
    x : function () {
        
        console.log('Hallo');
    }
}

let define = modules.x

let call = define.bind(modules)

call()