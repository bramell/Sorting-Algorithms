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

    /// Method to clear previous results from the GUI
    initializeGUI() {
        document.getElementById('bubble-original').textContent = '';
        document.getElementById('bubble-sorted').textContent = '';
        document.getElementById('bubble-passes').textContent = '';
    }

    /// Event listener for Bubble Sort button
    bubbleSortEvent(arr) {
        const bubbleSortButton = document.querySelector('#bubble-sort .code-runner button');

        bubbleSortButton.addEventListener('click', () => {

            this.initializeGUI();

            const bubbleOriginal = document.getElementById('bubble-original');
            const bubbleSorted = document.getElementById('bubble-sorted');
            const bubbleTime = document.getElementById('bubble-time');

            // Start timing the sorting process
            const startTime = performance.now();

            const sortedArray = this.bubbleSort([...arr]); //Shallow copy to avoid mutating original array

            const endTime = performance.now();
            bubbleTime.textContent = (endTime - startTime).toFixed(2);

            bubbleOriginal.textContent = arr.join(' | ');
            bubbleSorted.textContent = sortedArray.join(' | ');
        });
    }

    /// Bubble Sort Algorithm
    bubbleSort(arr) {
        let n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {

                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }

            // Create elements for each pass
            this.createPassElement(arr, i);
        }

        return arr;
    }

    // Create a new paragraph element for each pass and append it to the pass container
    createPassElement(arr, i) {
        let pass = document.getElementById('bubble-passes');

        const p = document.createElement('p');
        const span = document.createElement('span');
        span.textContent = `Pass ${i + 1}: ${arr.join(' | ')}`;
        p.appendChild(span);

        pass.appendChild(p);
    }
}