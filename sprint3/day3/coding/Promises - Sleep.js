function sleep (time) {
    return new Promise ((resolve,reject) => {
        if(!time || typeof time !== 'number'){
            reject('Input must be a number')
        }
        setTimeout( () => resolve('i won'),time)
    })
}

sleep(2000).then( () => console.log("Success")).catch( err => console.log(err))