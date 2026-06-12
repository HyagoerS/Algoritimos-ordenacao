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

/*
do

  swapped = false

  for i = 1 to indexOfLastUnsortedElement-1

    if leftElement > rightElement

      swap(leftElement, rightElement)

      swapped = true; ++swapCounter

while swapped
*/