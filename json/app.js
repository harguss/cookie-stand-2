'use strict';
console.log('are you hearing the object literal js');


//Declare Global variables!!!
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookieTable = document.getElementById('storeList');
let newStore;

//declare constructor function-name should be capitolized!!!!!
function CookieStore(storeName,custMaxHour, custMinHour, avgCookiePerSale, hourlyCustomers, hourlyCookies){
  this.storeName = storeName;
  this.custMaxHour = custMaxHour;
  this.custMinHour = custMinHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlyCustomers = hourlyCustomers;
  this.hourlyCookies = hourlyCookies;
}
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






//call new for each store
let firstStore = new CookieStore('Seattle', 65, 23, 6.3, [], []);
let secondStore = new CookieStore('Tokyo', 24, 3, 1.2, [], []);
let thirdStore =  new CookieStore('Dubai', 38, 11, 3.7, [], []);
let forthStore = new CookieStore('Paris', 20, 11, 2.3, [], []);
let fifthStore = new CookieStore('Lima', 16, 2, 4.6, [], []);




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


//Add event listners and handlers
function handleFormSubmitted(event){
  event.preventDefault();
  let storeName = event.target.storeName.value;
  let custMaxHour = event.target.custMaxHour.value;
  let custMinHour = event.target.custMinHour.value;
  let avgCookiePerSale = event.target.avgCookiePerSale.value;
  newStore = new CookieStore(storeName, custMaxHour, custMinHour, avgCookiePerSale, [], []);
  newStore.numCustomersPerHour();
  newStore.cookiesForEachHour();
  newStore.render();
  let form = document.getElementById('formElement');
  form.reset();
  //final render()
}
let formElement = document.getElementById('formElement');
formElement.addEventListener('submit', handleFormSubmitted);


//CallFunctions
//You still need to do this
//1.run the header function
CookieStore.prototype.tableHeader();
//2.then run stores render ();
firstStore.render();
secondStore.render();
thirdStore.render();
forthStore.render();
fifthStore.render();
//3. then we run the footer to get totals

CookieStore.prototype.footer();
var Table = document.getElementById("mytable");
 Table.innerHTML = "";

 function finalRender(){
  cookieTable.innerHTML = '';

//////////
function handleFormSubmitted(event){
  event.preventDefault();
  // console.log('we made it to the event function');
  // console.log('event',event.target.storeName.value);
  // console.log('event',event.target.custMaxHour.value);
  // console.log('event',event.target.custMinHour.value);
  // console.log('event',event.target.avgCookiePerSale.value);

  let storeName = event.target.storeName.value;
  // console.log('location name', storeName);
  let custMaxHour =event.target.custMaxHour.value;
  // console.log('max customers in an hour', custMaxHour);
  let custMinHour = event.target.custMinHour.value;
  // console.log('Minimum customers in an hour', custMinHour);
  let avgCookiePerSale = event.target.avgCookiePerSale;
  // console.log('Average numbers of cookies bought', avgCookiePerSale);
newStore = new CookieStore(storeName, custMaxHour, custMinHour, avgCookiePerSale, [], []);
newStore.numCustomersPerHour();
newStore.cookiesForEachHour();
newStore,render();
let form = document.getElementById('formElement');
formElement.addEventListener('submit', 'handleFormSubmitted');
/////////

// function finalRender(){
  CookieStore.prototype.tableHeader();

   for(let i = 0; i < storeArray.length; i++){
   storeArray[i].render();
   }

   CookieStore.prototype.footer();







finalRender();

  newStore = new CookieStore(storeName, custMaxHour, custMinHour, avgCookiePerSale, [], []);
  console.log('new store', newStore);

  newStore.numCustomersPerHour();
  newStore.cookiesForEachHour();
  newStore.render();

  let form = document.getElementById('new-store');
  form.reset();

  // we re run all the stores from the storeArray
//  finalRender();
}

// console.log('form?????',formElement);
let formElement = document.getElementById('formElement');
formElement.addEventListener('submit', handleFormSubmitted);

formElement.addEventListener('submit', function(event){
  event.preventDefault();
  // console.log('clickin on submit.');
});

finalRender();