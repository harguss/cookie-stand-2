'use strict';
console.log('are you hearing the object literal js');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookieTable = document.getElementById('storeList');



//constructor function'Seattle', 65,            23,           6.3,              [],              []
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
    //push() built in array method.
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
  let cookieTable = document.getElementById('storeList');
  let headerRow = document.createElement('tr');
  let locationCell = document.createElement('th');
  locationCell.textContent = 'Location';
  headerRow.appendChild(locationCell);
  for(let i = 0; i < hours.length; i++){
    let hoursOpen = document.createElement('td');
    hoursOpen.textContent = hours[i];
    headerRow.appendChild(hoursOpen);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = 'total';
  headerRow.appendChild(totalCell);
  cookieTable.appendChild(headerRow);
};
///////


//body of table
CookieStore.prototype.render = function() {
  let locRow = document.createElement('tr');
  let locationCell = document.createElement('td');
  locationCell.textContent = this.storeName;
  locRow.appendChild(locationCell);
  let totalCookieSum = 0;
  for(let j = 0; j < hours.length; j++){
    let hourlyData = document.createElement('td');
    hourlyData.textContent = this.hourlyCookies[j];
    totalCookieSum += this.hourlyCookies[j];
    locRow.appendChild(hourlyData);
  }
  console.log('do we get a row total ',totalCookieSum);
  // Next Steps: total column
  let allStoreDayTotals = document.createElement('td'); //adds sums to end of table
  allStoreDayTotals.textContent = totalCookieSum;
  locRow.appendChild(allStoreDayTotals);
  cookieTable.appendChild(locRow); //putting row onto table
};



// Next Next Step: table row for footer
CookieStore.prototype.footer = function(){
  let footerRow = document.createElement ('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = 'Totals';
  footerRow.appendChild(nameCell);
  //loop through hours of the day
  let totalTally = 0;
  for(let i = 0; i < hours.length; i++){
    let hourlyTally = 0;
    for(let j = 0; j < storeArray.length; j++){
      // console.log(storeArray[j].hourlyCookies[i]);
      hourlyTally += storeArray[j].hourlyCookies[i];
      totalTally += storeArray[j].hourlyCookies[i];
    }
    let totalCell = document.createElement('td');
    totalCell.textContent = hourlyTally;
    footerRow.appendChild(totalCell);
  }//close 
  let totalFinalCell = document.createElement('td');
  totalFinalCell.textContent = totalTally;
  footerRow.appendChild(totalFinalCell);
  cookieTable.appendChild(footerRow);
};







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


//render order
CookieStore.prototype.tableHeader();

firstStore.render();
secondStore.render();
thirdStore.render();
forthStore.render();
fifthStore.render();


//then we run the footer
CookieStore.prototype.footer();
