async function Soma(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('Tem que ser um valor númerico!')
    }else{
        return a + b
    }
}

async function Exe() {
    try{
        const result = await Soma(50,33)
        console.log(result)
    }catch(err){
        console.log(err)
    }
    }
  

Exe()