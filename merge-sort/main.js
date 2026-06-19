function merge(esquerda, direita){
    const resultante = []
    let i = 0
    let j = 0

    while (i < esquerda.length && j < direita.length){
        if (esquerda[i] <= direita[j]){
            resultante.push(esquerda[i])
            i++
        }else{
            resultante.push(direita[j])
            j++
        }
    }
    for (let k = i; k < esquerda.length; k++){
        resultante.push(esquerda[k])
    }
    for (let k = j; k < direita.length; k++){
        resultante.push(direita[k])
    }
    return resultante
}


function merge_sort(array){

    if(array.legth > 1){
    let meio = Math.floor(array.length / 2)

    const esquerda = array.slice(0, meio)
    const direita = arra.slice(meio)


    merge_sort(esquerda)
    merge_sort(direita)

    return merge(esquerda, direita)
}
}

/*console.log(merge([1, 2, 9, 10, 11, 12], [3, 5, 13]))*/

let array = [1, 7, 4, 2, 8]
