function solve() {
  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  function generate(event) {
     let input = JSON.parse(document.querySelector('textarea').value);
     input.forEach(furniture => {
       let tr = document.createElement('tr');
       let td1 = document.createElement('td');
       let img = document.createElement('img');
       img.src = furniture.img;
       td1.appendChild(img);
       tr.appendChild(td1);

       let td2 = document.createElement('td');
       let p2 = document.createElement('p');
       p2.textContent = furniture.name;
       td2.appendChild(p2);
       tr.appendChild(td2);

       let td3 = document.createElement('td');
       let p3 = document.createElement('p');
       p3.textContent = Number(furniture.price);
       td3.appendChild(p3);
       tr.appendChild(td3);

       let td4 = document.createElement('td');
       let p4 = document.createElement('p');
       p4.textContent = Number(furniture.decFactor);
       td4.appendChild(p4);
       tr.appendChild(td4);

       let td5 = document.createElement('td');
       let input = document.createElement('input');
       input.type = 'checkbox';
       td5.appendChild(input);
       tr.appendChild(td5);

       document.querySelector('tbody').appendChild(tr);
     });
  }

  function buy(event) {
    let checkboxes = Array.from(document.querySelectorAll('tbody input')).filter((checkbox) => checkbox.checked);
    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    checkboxes.forEach((checkbox) => {
      let parent = checkbox.parentElement.parentElement;
      let data = Array.from(parent.querySelectorAll('p'));
      boughtFurniture.push(data[0].textContent);
      totalPrice += Number(data[1].textContent);
      totalDecorationFactor += Number(data[2].textContent);
    });

    let output = document.querySelectorAll('textarea')[1];
    output.textContent += `Bought furniture: ${boughtFurniture.join(", ")}\n`;
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${totalDecorationFactor / checkboxes.length}`;
  }
}
//------------------------------------------------------------


// function solve() {
//   let textarea = document.querySelectorAll('textarea');
//   let tbody = document.querySelector('tbody');
 
//   [...document.querySelectorAll('button')].forEach(btn => btn.addEventListener('click', execute));

//   function execute(btn) {
//     if (!textarea[0].value) return;
//     if (btn.target.textContent === 'Generate') {
//       let input = JSON.parse(textarea[0].value);
//       input.forEach(furniture => {
//         tbody.innerHTML += `<tr>
//           <td><img src=${furniture.img}></td>
//           <td><p>${furniture.name}</p></td>
//           <td><p>${furniture.price}</p></td>
//           <td><p>${furniture.decFactor}</p></td>
//           <td><input type="checkbox"/></td>
//           </tr>`
//       })
//     } else {
//       let furnitureName = [];
//       let totalPrice = 0;
//       let averageDecFactor = 0;
//       [...document.querySelectorAll('input:checked')]
//         .forEach(furniture => {
//           let parentRow = furniture.parentNode.parentNode;
//           averageDecFactor += Number(parentRow.children[3].textContent);
//           totalPrice += Number(parentRow.children[2].textContent);
//           furnitureName.push(parentRow.children[1].textContent);
//         });
//       textarea[1].textContent += `Bought furniture: ${furnitureName.join(', ')}\n`;
//       textarea[1].textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
//       textarea[1].textContent += `Average decoration factor: ${averageDecFactor / furnitureName.length}`;
//     }
//   }
//}