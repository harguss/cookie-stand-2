'use strict';
console.log('are you hearing the object literal js');

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
  },
  cookiesForEachHour : function(){
    // console.log('cookiesssss');
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
    }
  }

};
// console.log('this is the first store',firstStore);
// console.log('store hours list', hours);
firstStore.numCustomersPerHour();
firstStore.cookiesForEachHour();



let secondStore = {
  storeName : 'Tokyo',
  custMaxHour : 24,
  custMinHour : 3,
  avgCookiePerSale : 1.2,
  hourlyCustomers : [],
  hourlyCookies : [],
  numCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookiesForEachHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
    }
  }

};
// console.log(secondStore);
secondStore.numCustomersPerHour();
secondStore.cookiesForEachHour();


let thirdStore = {
  storeName : 'Dubai',
  custMaxHour : 38,
  custMinHour : 11,
  avgCookiePerSale : 3.7,
  hourlyCustomers : [],
  hourlyCookies : [],
  numCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookiesForEachHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
    }
  }
};

// console.log(thirdStore);
thirdStore.numCustomersPerHour();
thirdStore.cookiesForEachHour();

let forthStore = {
  storeName : 'Paris',
  custMaxHour : 20,
  custMinHour : 11,
  avgCookiePerSale : 2.3,
  hourlyCustomers : [],
  hourlyCookies : [],
  numCustomersPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookiesForEachHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
    }
  }
};
// console.log(forthStore);
forthStore.numCustomersPerHour();
forthStore.cookiesForEachHour();

let fifthStore = {
  storeName : 'Lima',
  custMaxHour :  16,
  custMinHour : 2,
  avgCookiePerSale : 4.6,
  hourlyCustomers : [],
  hourlyCookies : [],
  numCustomersPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookiesForEachHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
    }
  }
};
// console.log(fifthStore);
fifthStore.numCustomersPerHour();
fifthStore.cookiesForEachHour();




function random(min, max){
  return Math.round(Math.random() * (max - min) + min);
}
//                   0       1
let storeArray = [firstStore, secondStore, thirdStore, forthStore, fifthStore];

//How do we access the DOM
let ulElement = document.getElementById('storeList');
// console.log('this is our ul: ',ulElement);


// console.log('store Array',storeArray[0].hourlyCookies);

for(let i = 0; i < storeArray.length; i++){
  for(let j = 0; j < hours.length; j++){
    console.log('inside for loop J: ', hours[j]);
    // create need some li's
    let hourlyLi = document.createElement('li');
    // set the textContent to that li
    hourlyLi.textContent = hours[j] + ' ' + storeArray[i].hourlyCookies[j];
    // then we need to append that li to our ul variable ulElement
    ulElement.appendChild(hourlyLi);

  }
}
