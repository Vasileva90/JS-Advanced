function solve() {
    let text = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let textArr = text.split(" ");
    let result = "";
    switch (convention) {
        case "Camel Case":
          textArr.forEach((el, i) => {
            if(i === 0) {
              return result += el.toLowerCase();
            }
            return result += el[0].toUpperCase() + el.substring(1).toLowerCase();
          });
          break;
        case "Pascal Case":
          textArr.forEach((el, i) => {
            el = el.toLowerCase();
            result += el[0].toUpperCase() + el.substring(1);
          });
          break;
        default: result = "Error!";
    }
    document.getElementById('result').textContent = result;
}