'use strict';
console.log('are you hearing the object literal js');

//Declare Global variables!!!
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookieTable = document.getElementById('storeList');
// let newStore;

//declare constructor function-name should be capitolized!!!!!
function CookieStore(storeName,custMaxHour, custMinHour, avgCookiePerSale, hourlyCustomers, hourlyCookies){
  this.storeName = storeName;
  this.custMaxHour = custMaxHour;
  this.custMinHour = custMinHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlyCustomers = hourlyCustomers;
  this.hourlyCookies = hourlyCookies;
  // PizzaPicture.allImages.push(this);
  this.numCustomersPerHour();
  this.cookiesForEachHour();
  CookieStore.storeArray.push(this);
}

// PizzaPicture.allImages = [];
CookieStore.storeArray = [];
console.log(CookieStore.storeArray);

//declare prototype methods
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

//Declare regular functions
function random(min, max){
  return Math.round(Math.random() * (max - min) + min);
}
new CookieStore('Seattle', 65, 23, 6.3, [], []);
new CookieStore('Tokyo', 24, 3, 1.2, [], []);
new CookieStore('Dubai', 38, 11, 3.7, [], []);
new CookieStore('Paris', 20, 11, 2.3, [], []);
new CookieStore('Lima', 16, 2, 4.6, [], []);

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

CookieStore.prototype.render = function() {
  // cookieTable.innerHTML = '';
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

  let allStoreDayTotals = document.createElement('td'); //adds sums to end of table
  allStoreDayTotals.textContent = totalCookieSum;
  locRow.appendChild(allStoreDayTotals);
  cookieTable.appendChild(locRow); //putting row onto table
};

CookieStore.prototype.footer = function(){

  let footerRow = document.createElement ('tr');
  let nameCell = document.createElement('td');
  nameCell.textContent = 'Totals';
  footerRow.appendChild(nameCell);
  //loop through hours of the day
  let totalTally = 0;
  for(let i = 0; i < hours.length; i++){
    let hourlyTally = 0;
    for(let j = 0; j < CookieStore.storeArray.length; j++){
      // console.log(storeArray[j].hourlyCookies[i]);
      hourlyTally += CookieStore.storeArray[j].hourlyCookies[i];
      totalTally += CookieStore.storeArray[j].hourlyCookies[i];
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

function handleFormSubmitted(event){
  event.preventDefault();
  let storeName = event.target.storeName.value;
  let custMaxHour = parseInt(event.target.custMaxHour.value);

  let custMinHour = parseInt(event.target.custMinHour.value);
  let avgCookiePerSale = parseInt(event.target.avgCookiePerSale.value);

  new CookieStore(storeName, custMaxHour, custMinHour, avgCookiePerSale, [], []);

  finalRender();

  form = document.getElementById('formElement');
  form.reset();
}

let form = document.getElementById('formElement');
console.log(form);
form.addEventListener('submit', handleFormSubmitted);

function finalRender(){
  cookieTable.innerHTML = '';
  CookieStore.prototype.tableHeader();
  for(let i = 0; i < CookieStore.storeArray.length; i++){
    CookieStore.storeArray[i].render();
  }
  CookieStore.prototype.footer();
}

finalRender();


