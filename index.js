function myEach(collection, callback){
    let modif = collection
    if (!Array.isArray(modif)){
        modif = Object.values(modif)
    } 
    modif.forEach(element => {
        callback(element)
    });
    return collection
}


function myMap(collection, callback){
    let modif = collection
    let result =[]
    if (!Array.isArray(modif)){
        modif = Object.values(modif)
    } 
    modif.forEach(element => {
        result.push(callback(element))
    });
    return result
}

function myReduce(collection, callback, acc){
    let modif = collection
    if (!Array.isArray(modif)){
        modif = Object.values(modif)
    } 
    if (!acc) {
        acc = modif[0]
        for (let i=1; i< modif.length; i++){
            acc= callback (acc, modif[i])
        }
        return acc
    }

    for (let i=0; i< modif.length; i++){
        acc= callback (acc, modif[i])
    }
    return acc
}

function myFind(collection, predicate){
    let modif = collection
    if (!Array.isArray(modif)){
        modif = Object.values(modif)
    } 
    for (let element of modif){
        if (predicate(element)){
            return element
        }
    };
    return undefined
}

function myFilter(collection, predicate){
    let modif = collection
    let result =[]
    if (!Array.isArray(modif)){
        modif = Object.values(modif)
    } 
    modif.forEach(element => {
        if(predicate(element)){
            result.push(element)
        }
    });
    return result
}

function mySize(collection){
    let modif = collection
    if (!Array.isArray(modif)){
        modif = Object.values(modif)
    } 
    return modif.length
}

function myFirst(array, n){
    if (!n){
        return array[0]
    }
    let result=[]
    for (let i=0; i<n; i++){
        result.push(array[i])
    }
    return result
}

function myLast(array,n){
    if (!n){
        return array[array.length-1]
    }
    let startPosit = array.length-n
    return array.slice(startPosit)

}

function myKeys(object){
    let keys =[]
    for ( let value in object){
        keys.push(value)
    }
    return keys
}

function myValues(object){
    let values =[]
    for ( let value in object){
        values.push(object[value])
    }
    return values
}