function tickets(arr, criteria) {
   class Ticket {
      constructor(destination, price, status) {
         this.destination = destination;
         this.price = price;
         this.status = status;
      }
   }
   let result = [];
   arr.forEach(el => {
       let [destination, price, status] = el.split("|");
       price = Number(price);
       let ticket = new Ticket(destination, price, status);
       result.push(ticket);
   });
    if(criteria === 'price') {
       result.sort((a, b) => a[criteria] - b[criteria]);
    } else {
       result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    return result;
}

tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');