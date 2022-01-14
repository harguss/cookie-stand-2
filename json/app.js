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
//get top the html and grab an element
  let cookieTable = document.getElementById('storeList');
  let headerRow = document.createElement('tr');
  let locationCell = document.createElement('th');
  locationCell.textContent = 'Location';
  headerRow.appendChild(locationCell);
  // console.log(headerRow);
  //for loop to loop over our hourly array and display the times
  for(let i = 0; i < hours.length; i++){
    // console.log(hours[i]);
    let hoursOpen = document.createElement('td');
    hoursOpen.textContent = hours[i];
    headerRow.appendChild(hoursOpen);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = 'total';
  headerRow.appendChild(totalCell);

  // console.log(headerRow);
  //actually add to the table
  cookieTable.appendChild(headerRow);
};


//body of table
CookieStore.prototype.render = function() {
  let cookieTable = document.getElementById('storeList');
  console.log('is this the table?', cookieTable);

  let locRow = document.createElement('tr');
  console.log('is this the header row', locRow);

  let locationCell = document.createElement('td');
  locationCell.textContent = this.storeName;
  locRow.appendChild(locationCell);


  // get hourly cookie totals for render
  for(let i = 0; i < storeArray.length; i ++){
    for(let j = 0; j < hours.length; j++){
      // console.log('for 15',this.hourlyCookies[j]);
      let hourlyData = document.createElement('td');
      hourlyData.textContent = this.hourlyCookies[j];
      locRow.appendChild(hourlyData);
    }
  }


  // then we are going to add the totals in the last column.
  // //  let allStoreDayTotals = document.createElement('td'); //adds sums to end of table
  // //   allStoreDayTotals.textContent = this.totalCookieSum;
  // //   locRow.appendChild(allStoreDayTotals);
  // //   //this is where totals are coming from
  cookieTable.appendChild(locRow); //putting row onto table
};

// table row for footer
CookieStore.prototype.footer = function(){
  console.log('this is the footer');
  //footer Totals.
};





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






//save store and run the app stuff
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






//then we run the render for the body
//for loop similar to demo code.





//render order
CookieStore.prototype.tableHeader();

firstStore.render();
secondStore.render();
thirdStore.render();
forthStore.render();
fifthStore.render();

//then we run the footer
CookieStore.prototype.footer();
