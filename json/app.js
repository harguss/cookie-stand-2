'use strict';
console.log('are you hearing the object literal js');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//constructor function
function CookieStore(storeName,custMaxHour, custMinHour, avgCookiePerSale, hourlyCustomers, hourlyCookies){
  this.storeName = storeName;
  this.custMaxHour = custMaxHour;
  this.custMinHour = custMinHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlyCustomers = hourlyCustomers;
  this.hourlyCookies = hourlyCookies;
}

//make prototype methods for our objects so they can so stuff.
CookieStore.prototype.numCustomersPerHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
  }
};
CookieStore.prototype.cookiesForEachHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
  }
};


function random(min, max){
  return Math.round(Math.random() * (max - min) + min);
}

//call new for each store
let firstStore = new CookieStore('Seattle', 65, 23, 6.3, [], []);
let secondStore = new CookieStore('Tokyo', 24, 3, 1.2, [], []);
let thirdStore =  new CookieStore('Dubai', 38, 11, 3.7, [], []);
let forthStore = new CookieStore('Paris', 20, 11, 2.3, [], []);
let fifthStore = new CookieStore('Lima', 16, 2, 4.6, [], []);








// tableHeader method
CookieStore.prototype.tableHeader = function(){

};
// render body method


// tableFooter method


















//store all the stores in an array to loop over once they have their data.
let storeArray = [firstStore, secondStore, thirdStore, forthStore, fifthStore];
console.log('storeArray', storeArray);

firstStore.numCustomersPerHour();
firstStore.cookiesForEachHour();
secondStore.numCustomersPerHour();
secondStore.cookiesForEachHour();
thirdStore.numCustomersPerHour();
thirdStore.cookiesForEachHour();
forthStore.numCustomersPerHour();
forthStore.cookiesForEachHour();
fifthStore.numCustomersPerHour();
fifthStore.cookiesForEachHour();






// //How do we access the DOM
// let ulElement = document.getElementById('storeList');
// // console.log('this is our ul: ',ulElement);


// // console.log('store Array',storeArray[0].hourlyCookies);

// for(let i = 0; i < storeArray.length; i++){
//   for(let j = 0; j < hours.length; j++){
//     // console.log('inside for loop J: ', hours[j]);
//     // create need some li's
//     let hourlyLi = document.createElement('li');
//     // set the textContent to that li
//     hourlyLi.textContent = hours[j] + ' ' + storeArray[i].hourlyCookies[j];
//     // then we need to append that li to our ul variable ulElement
//     ulElement.appendChild(hourlyLi);

//   }
// }

