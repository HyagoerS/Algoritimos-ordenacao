/*function merge(esquerda, direita){
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

console.log(merge([1, 2, 9, 10, 11, 12], [3, 5, 13]))*/
function merge(arr, left, mid, right) {
    const n1 = mid - left + 1;
    const n2 = right - mid;

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0, j = 0;
    let k = left;

    // Merge the temp arrays back into arr[left..right]
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, left, right) {
    if (left >= right)
        return;

    const mid = Math.floor(left + (right - left) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}


// Driver code
const arr = [38, 27, 43, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr.join(" "));
