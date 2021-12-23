'use strict';
console.log('are you hearing the objectliteral js');

// Pat’s Salmon Cookies, soon with franchises internationally, needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.



const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let firstStore = {
  storeName : 'Seattle',
  custMaxHour : '65',
  custMinHour : '23',
  avgCookiePerSale :'6.3',
};
console.log(firstStore);


let secondStore = {
  storeName : 'Toykeo',
  custMaxHour : '24',
  custMinHour : '3',
  avgCookiePerSale :'1.2',
};
console.log(secondStore);


let thirdStore = {
  storeName : 'Dubai',
  custMaxHour : '38',
  custMinHour : '11',
  avgCookiePerSale :'3.7',
};

console.log(thirdStore);

let forthStore = {
  storeName : 'Paris',
  custMaxHour : '20',
  custMinHour : '11',
  avgCookiePerSale :'2.3',
};
console.log(forthStore);

let fifthStore = {
  storeName : 'Lima',
  custMaxHour : '16',
  custMinHour : '2',
  avgCookiePerSale :'4.6',
};

console.log(fifthStore);

