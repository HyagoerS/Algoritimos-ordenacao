function insertionSort(lista) {
    for (let i = 1; i < lista.length; i++) {
        let chave = lista[i];
        let j = i - 1;

        // Compara a chave com os elementos à esquerda
        // até encontrar um elemento menor que ela
        while (j >= 0 && chave < lista[j]) {
            lista[j + 1] = lista[j];
            j--;
        }

        // Insere a chave na posição correta
        lista[j + 1] = chave;
    }

    return lista;
}



const numeros = [5, 2, 4, 6, 1, 3];
console.log(insertionSort(numeros));



function random_array(){
    const array = []
    const MAX = 1000
    for (let i = 0; i < MAX; i++){
        const random = Math.floor(Math.random() * MAX)
        array.push(random)
    }
    return array
}

const random = random_array()
const random_insertion = random.concat()


function executar_insertion(array){
    const start = performance.now()
    insertionSort(array)
    const end = performance.now()
    console.log(`Execução INSERTION: ${end - start} ms`)
}



console.log("RANDOM")
executar_insertion(random_insertion)


console.log("SORT")
executar_insertion(sort_insertion)

/*
mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here
*/