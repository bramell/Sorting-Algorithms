export default class BubbleSort {
    constructor(size, max) {
        this.size = size;
        this.max = max;
        this.array = [];
    }

    // Setters
    set size(value) {
        if (value <= 0) {
            throw new Error("Size must be a positive integer.");
        }
        this._size = value;
    }

    set max(value) {
        if (value <= 0) {
            throw new Error("Max must be a positive integer.");
        }
        this._max = value;
    }

    set array(value) {
        if (!Array.isArray(value)) {
            throw new Error("Array must be an array.");
        }
        this._array = value;
    }

    initializeGUI() {
        document.getElementById('bubble-original').textContent = '';
        document.getElementById('bubble-sorted').textContent = '';
        document.getElementById('bubble-passes').textContent = '';
    }

    bubbleSortEvent(arr) {
        const bubbleSortButton = document.querySelector('#bubble-sort .code-runner button');
        bubbleSortButton.addEventListener('click', () => {
            this.initializeGUI();

            const bubbleOriginal = document.getElementById('bubble-original');
            const bubbleSorted = document.getElementById('bubble-sorted');


            const sortedArray = this.bubbleSort([...arr]); //Shallow copy to avoid mutating original array

            bubbleOriginal.textContent = arr.join(' | ');
            bubbleSorted.textContent = sortedArray.join(' | ');
        });
    }

    bubbleSort(arr) {
        let pass = document.getElementById('bubble-passes');
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }

            console.log(`Pass ${i + 1}: ${arr.join(' | ')}`);

            const p = document.createElement('p');
            const span = document.createElement('span');
            span.textContent = `Pass ${i + 1}: ${arr.join(' | ')}`;
            p.appendChild(span);

            pass.appendChild(p);
        }

        return arr;
    }
}