function rotateArray(arr, num) {
    for(let i = 0; i < num; i++) {
        let currEl = arr.pop();
        arr.unshift(currEl);
    }
    console.log(arr.join(" "));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2);