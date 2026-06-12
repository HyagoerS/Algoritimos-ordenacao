function encontrar_menor(array, j){
    //array = [10, 5, 6, 15, 2]
    //faça o algoritimo para encontrar o menor valor dentro do array e retornar o índice 
   
    let indice_menor = j
    let menor = array[j]


    for (let i = j; i < array.length; i++){
        if (array[i] < menor){
            menor = array[i]
            indice_menor = i
        }
    }
    return indice_menor
}

/*function swap(valor1, valor2){
    let temp = valor1
    valor1 = valor2
    valor2 = temp
}*/

function selection_sort(array){
    for (let i = 0; i < array.length; i++)
        indice_menor = encontrar_menor(array, i)
        
    let temp = array[j]
        array[i] = array[indice_menor]
        array[indice_menor] = temp
}

array = [2, 24, 6, 1, 6]
console.log(array)
selection_sort(array)
console.log(array)
