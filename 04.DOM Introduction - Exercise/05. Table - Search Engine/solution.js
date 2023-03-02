function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);
    
   let rows = document.querySelectorAll("tbody tr");
   let input = document.getElementById("searchField");

   function onClick() {
      for (let row of rows) {
         row.classList.remove("select");              // Премахваме класа, ако вече имаме сложен такъв 
         if (row.innerHTML.includes(input.value)) {   // innerHTML проверява във всички деца на елемента, който сме избрали 
            row.className = "select";                 // Ако намери на самият ред слагаме className = select 
         }
      }
      input.value = "";                               // След въртенето на цикъла и търсенето зачистваме инпут полето да е празно 
   }
}