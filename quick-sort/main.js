function mergeSort(arr, left, right){

}

mergeSort(arr, 0, arr.length - 1);

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
const random_merge = random.array()
const random_quick = random.concat()
const random_bubble = random.concat()
const random_insertion = random.concat()
const random_selection = random.concat()

function executar_merge(array){
    const start = performance.now()
    mergeSort(random_merge, 0, random_merge.length - 1)
    const end = performance.now()
    console.log(`Execução MERGE: ${end-start}`)    
}

function executar_quik(array){
    const start = performance.now()
    mergeSort(random_merge, 0, random_merge.length - 1)
    const end = performance.now()
    console.log(`Execução QUICK: ${end-start}`) 
}


console.log("RANDOM")
executar_merge(random_merge)
executar_quik(random_quick)

console.log("SORT")
executar_merge(random_merge)
executar_quik(random_quick)