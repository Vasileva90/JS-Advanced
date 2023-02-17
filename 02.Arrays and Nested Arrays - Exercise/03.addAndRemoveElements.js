function addAndRemoveElements(input) {
    let res = [];
    let initialNum = 1;
    input.forEach(el => {
        el === "add" ? res.push(initialNum) : res.pop();
        initialNum++;
    });
    res.length === 0 ? console.log("Empty") : console.log(res.join("\n"));
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);