const fs = require ("fs");

const fileName =  process.argv[2]; // path to file
const oadatoarr = fs.readFileSync(fileName, "utf-8")//le chemin

const datoarr = oadatoarr.split(" ").map(x => parseInt(x));

function bubbleSort(arr) {
  let n = arr.length;
  let boucle = 0 
  for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) { 
        boucle ++;
          if (arr[j] > arr[j+1]) {
              // swap arr[j] and arr[j+1]
              let temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
      
  }
  return ` Tri à bulles: ${boucle} comparaisons- tableau:  ${arr}`;
}

console.log(bubbleSort(datoarr));


function insertionSort(arr) {
    let n = arr.length;
    let boucle = 0
    for (let i = 1; i < n; i++) {
        boucle ++;
        let key = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return ` Tri par insertion: ${boucle} comparaisons- tableau:  ${arr}`;
  }
 
  console.log(insertionSort(datoarr));


  function selectionSort(arr) {
    let n = arr.length;
    let boucle = 0
    for (let i = 0; i < n-1; i++) {
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            boucle ++;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
    
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return ` tri par selection: ${boucle} comparaisons- tableau:  ${arr}`;;
  }
  
  console.log(selectionSort(datoarr));

  const mergeSort = (arr_numbers) => {
    let counter = 0;
    let numbers = [...arr_numbers];
    let half;

    const merger = (left, right) => {
      let arr = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          arr.push(left.shift()); // remove from the left part and push into the sorted array
        } else {
          arr.push(right.shift()); // remove from the right part and push into the sorted array
        }
      }
      return [...arr, ...left, ...right];
    };

    const mergeSortSplit = (numbers, half = numbers.length / 2) => {
      counter++;
      if (numbers.length < 2) return numbers;
      let left = numbers.splice(0, half); //left part of numbers
      return merger(mergeSortSplit(left), mergeSortSplit(numbers));
    };

    numbers = mergeSortSplit(arr_numbers, half);
    return `Tri fusion/Merge Sort: ${counter} comparaisons [${numbers}]`;
  };

console.log(mergeSort(datoarr)); 



