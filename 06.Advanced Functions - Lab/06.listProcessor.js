function listProcessor(input) {
    let result = [];
    let commands = {
        add(string) {
           result.push(string);
        },
        remove(string) {
           while(result.includes(string)) {
              result.splice(result.indexOf(string), 1);
           }
        },
        print() {
            console.log(result.join(","));
        }
    }
    input.forEach(line => {
        let [command, param] = line.split(" ");
        commands[command](param);
    });
}

// function listProcessor(input) {
//     let arr = [];
//     let result = {
//         add: (string) => arr.push(string),
//         remove: (string) => (arr = arr.filter((el) => el !== string)),
//         print: () => console.log(arr.join(",")),
//     }

//     input.forEach(line => {
//          let [command, value] = line.split(" ");
//          result[command](value);
//     });
// }

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);