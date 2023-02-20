function sortAnArrayBy2Criteria(input) {
    let result = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(result.join("\n"));
}

sortAnArrayBy2Criteria(['alpha', 
'beta', 
'gamma']
);