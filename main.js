import BubbleSort from "./BubbleSort.js";

function main() {
    let arr = randomArray(10, 100);

    // Bubble Sort
    const bubbleSort = new BubbleSort(10, 100);
    bubbleSort.bubbleSortEvent(arr);
}

function randomArray(size, max) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        let int = Math.floor(Math.random() * max);
        
        if (int > 0) {
            arr.push(int);
        }
    }

    return arr;
}

main();