"use strict";
let div1 = document.getElementById('div1');
let tabelele = document.createElement('table');
div1.appendChild(tabelele);


let cookieFormBranch = document.getElementById('branchForm');


let Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function headTable() {
    let trElement = document.createElement('tr');
    tabelele.appendChild(trElement);

    Hours.unshift(''); // add embty string at the first in the array 
    Hours.push('Daily Total');
    for (let i = 0; i < Hours.length; i++) {
        let thEle1 = document.createElement('th');
        thEle1.textContent = Hours[i];
        trElement.appendChild(thEle1);
    }
    Hours.shift();
    Hours.pop();
}


function footerTable() {
    let TotalOfEachHoure = [];
    let TotalOfTtotal = 0;
    let trElement = document.createElement('tr');
    tabelele.appendChild(trElement);
    let thEle = document.createElement('th');
    thEle.textContent = "Totals";
    trElement.appendChild(thEle);

    for (let i = 0; i < Hours.length; i++) {
        let total = 0;
        for (let j = 0; j < all.length; j++) {
            total += all[j].cookieSalesEachHour[i];
            console.log(TotalOfTtotal);
        }
        TotalOfEachHoure.push(total);
        let thEle1 = document.createElement('th');
        thEle1.textContent = total;
        trElement.appendChild(thEle1);

    }

    for (let i = 0; i < all.length; i++) {
        TotalOfTtotal += all[i].totalOfCookie
    }
    //console.log(TotalOfTtotal);
    let thEle1 = document.createElement('th');
    thEle1.textContent = TotalOfTtotal;
    trElement.appendChild(thEle1);

    /* let thEle1 = document.createElement('th');
     thEle1.textContent="Totals";
    tabelele.appendChild(thEle1);
    
    

  let cookieTotalArray = [];
  let totalOfTotal=0;
  for (var i = 0; i < Hours.length; i++) {
     let TotalforEchHour =0;
     for (var j = 0; j < all.length; j++) {

           TotalforEchHour+=all[j].cookieSalesEachHour[i];

    } 
    cookieTotalArray.push(TotalforEchHour);
    let tableFootCell1 = document.createElement('th');
    tableFootCell1.textContent = cookieTotalArray[i];
    tabelele.appendChild(tableFootCell1);
    /* totalOfTotal=parseInt(totalOfTotal+cookieTotalArray[i]);
    console.log(totalOfTotal); 
  }

 /*  let thFooter = document.createElement('th');
  thFooter.textContent = totalOfTotal;
  tabelele.appendChild(thFooter);  */


}




let all = [];

function Locations(branchName, min, max, avg) {
    this.branchName = branchName;
    this.avgMinMAX = [min, max, avg];
    this.Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.customersPerHour = 0;
    this.cookieSalesEachHour = [];
    this.totalOfCookie = 0;
    all.push(this);

}
Locations.prototype.getCustomerperHour = function () {
    this.customersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
    console.log(this.customersPerHour);
    return this.customersPerHour;
}

Locations.prototype.getcookieSalesEachHour = function () {
    for (let i = 0; i < this.Hours.length; i++) {
        this.getCustomerperHour();
        this.cookieSalesEachHour.push(Math.ceil(this.customersPerHour * this.avgMinMAX[2]));
        this.totalOfCookie += this.cookieSalesEachHour[i];
    }

}

Locations.prototype.render = function () {

    this.getcookieSalesEachHour();



    let trElement = document.createElement('tr');

    let tdEle1 = document.createElement('td');
    tdEle1.textContent = this.branchName;
    trElement.appendChild(tdEle1);

    for (let i = 0; i < this.cookieSalesEachHour.length; i++) {
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookieSalesEachHour[i];
        trElement.appendChild(tdElement);
        tabelele.appendChild(trElement);
    }
    let tdEle = document.createElement('td');
    tdEle.textContent = this.totalOfCookie;
    trElement.appendChild(tdEle);







}


headTable();

 let Seattle = new Locations('Seattle',23,65,6.3);
Seattle.getCustomerperHour();
Seattle.render();
//console.log(Seattle);

let Tokyo = new Locations('Tokyo',3,24,1.2);
Tokyo.getCustomerperHour();
Tokyo.render();

let Dubai = new Locations('Dubai',11,38,3.7);
Dubai.getCustomerperHour();
Dubai.render();

let Paris = new Locations('Paris',20,38,2.3);
Paris.getCustomerperHour();
Paris.render();

let Lima = new Locations('Lima',2,16,4.6);
Lima.getCustomerperHour();
Lima.render(); 
/* renderAll();
function renderAll(){
    for (let i = 0; i< locationsName.length ; i++) {
    //all[i].branchName.render();
    console.log(locationsName[i]);
    locationsName[i].render();
    locationsName[i].getCustomerperHour();
  }} */
cookieFormBranch.addEventListener('submit', branchHandler);
function branchHandler(submitEvent) {
    submitEvent.preventDefault(); // Stop refreshing
    let branchname = submitEvent.target.LocationName.value;
    let min1 = submitEvent.target.minimum.value;
    let max1 = submitEvent.target.maximum.value;
    let avg1 = submitEvent.target.avarge.value;
    console.log(min1);

    let newLocation = new Locations(branchname, min1, max1, avg1);
    //console.log(newLocation);
    newLocation.getCustomerperHour();
    newLocation.render();
    //onsole.log(all.length);
    
        tabelele.deleteRow(all.length);

        footerTable();
    


    cookieFormBranch.reset();
}

footerTable();




















