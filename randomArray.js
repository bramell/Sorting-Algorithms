export default function randomArray(size, max) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        let int = Math.floor(Math.random() * max);
        
        if (int > 0) {
            arr.push(int);
        }
    }

    return arr;
}