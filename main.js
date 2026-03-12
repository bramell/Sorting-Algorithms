import randomArray from "./randomArray.js";
import BubbleSort from "./Algorithms/BubbleSort.js";

function main() {
    let arraySize = 10;
    let maxValue = 100;

    // Generate random array
    let arr = randomArray(arraySize, maxValue);

    // Bubble Sort
    const bubbleSort = new BubbleSort(arraySize, maxValue);
    bubbleSort.bubbleSortEvent(arr);
}

main();