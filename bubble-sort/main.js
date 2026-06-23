function bubble_sort(array){

    let swapped = false
    let j = 1
    
    do{
        swapped = false
        for (let i = 0; i < array.length - j; i++){
                if (array[i] > array[i+1]){
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp 
                swapped = true
            }
        }
        j++

    }while (swapped)
}
let array = [2, 24, 6, 1, 6]
console.log(array)
bubble_sort(array)
console.log(array)

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
const random_bubble = random.concat()


function executar_bubble(array){
    const start = performance.now()
    bubbleSort(array)
    const end = performance.now()
    console.log(`Execução BUBBLE: ${end - start} ms`)
}



console.log("RANDOM")
executar_bubble(random_bubble)


console.log("SORT")
executar_bubble(sort_bubble)

//Qual é principio de fucionamento
//O tempo de execução (On²) em casos especiais (On)
//Se é estavel ou in-place
//

/*
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true; ++swapCounter

while swapped
*/