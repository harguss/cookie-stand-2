'use strict';
console.log('are you hearing the objectliteral js');

// Stores the min/max hourly customers, and the average cookies per customer, in object properties
// 1. () Uses a method of that object to generate a random number of customers per hour. 

// 2.() Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// 3. Need two Arrays === Store the results for each location in a separate array… perhaps as a property of the object representing that location
// 4. Display the values of each array as unordered lists in the browser
// 5. Calculating the sum of these hourly totals; your output for each location should look like this:




const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let firstStore = {
  storeName : 'Seattle',
  custMaxHour : 65,
  custMinHour : 23,
  avgCookiePerSale : 6.3,
  hourlyCustomers :  [],
  hourlyCookies :   [],
  numCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  }
  // cookiesForEachHour : function(){

  // }

};
console.log(firstStore);
console.log('store hours list', hours);
firstStore.numCustomersPerHour();


function random(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

// custEachHour: [],
// cookieEachHour: [],
// totalDailyCookies: 0,
// calcCustomersEachHour: function(){
//   for(let i = 0; i < hours.length; i++){
//     this.customersEachHour.push(random(this.minCustomerPerHour, this.maxCustomerPerHour));
//   }
// },






let secondStore = {
  storeName : 'Tokyo',
  custMaxHour : 24,
  custMinHour : 3,
  avgCookiePerSale : 1.2,
};
console.log(secondStore);


let thirdStore = {
  storeName : 'Dubai',
  custMaxHour : 38,
  custMinHour : 11,
  avgCookiePerSale : 3.7,
};

console.log(thirdStore);

let forthStore = {
  storeName : 'Paris',
  custMaxHour : 20,
  custMinHour : 11,
  avgCookiePerSale : 2.3,
};
console.log(forthStore);

let fifthStore = {
  storeName : 'Lima',
  custMaxHour :  16,
  custMinHour : 2,
  avgCookiePerSale : 4.6,
};

console.log(fifthStore);

