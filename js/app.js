"use strict";
let div1 = document.getElementById('div1');
let tabelele = document.createElement('table');
      div1.appendChild(tabelele);
 headTable();
function headTable(){
    var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    let thEle1 = document.createElement('th');
    tabelele.appendChild(thEle1);
    for (let i =0;i<14;i++){
        let thEle = document.createElement('th');
            thEle.textContent = Hours[i];
            tabelele.appendChild(thEle);
    
        };
        let thEle2 = document.createElement('th');
            thEle2.textContent = "Daily Location Total";
            tabelele.appendChild(thEle2);
    
}





function Locations(branchName,min,max,avg){
   this.branchName =branchName;
   this.avgMinMAX = [min,max,avg];
   this.Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    this.customersPerHour= 0;
    this.cookieSalesEachHour= [];
    this.totalOfCookie= 0;
}
Locations.prototype.getCustomerperHour = function () {
    this.customersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
    console.log(this.customersPerHour);
    return this.customersPerHour;
    }

Locations.prototype.getcookieSalesEachHour = function() {
    for (let i = 0; i < this.Hours.length; i++) {
       this.getCustomerperHour();
       this.cookieSalesEachHour.push(Math.ceil(this.customersPerHour * this.avgMinMAX[2]));
       this.totalOfCookie += this.cookieSalesEachHour[i];
   }
}

Locations.prototype.render= function () {
   
    this.getcookieSalesEachHour();
    
   
        
        let trElement = document.createElement('tr');

    
        
        let tdEle1 = document.createElement('td');
        tdEle1.textContent = this.branchName;
        trElement.appendChild(tdEle1);
        
        for(let i =0;i<this.cookieSalesEachHour.length;i++){
        let tdElement = document.createElement('td');
        tdElement.textContent = this.cookieSalesEachHour[i] ;
        trElement.appendChild(tdElement);
        tabelele.appendChild(trElement);   
         }
        
         let tdEle = document.createElement('td');
        tdEle.textContent = this.totalOfCookie ;
        trElement.appendChild(tdEle);

        


    
 

}



/* render=function f(){
    let Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    for (let i=0;i<Hours.length+1;i++){
        if (i===0)
        {
            let th = document.createElement('th');
         th.textContent="Location";
        tableEle.appendChild(th);
        } else
        let th1 = document.createElement('th');
         th1.textContent= Hours[i];
        tableEle.appendChild(th1);
    }
}  
      */
    
      

      




 let Seattle = new Locations('Seattle',23,65,6.3);
Seattle.getCustomerperHour();
Seattle.render();
console.log(Seattle);

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


foterTable();
function foterTable(){
    let thEle1 = document.createElement('th');
     thEle1.textContent="Totals";
    tabelele.appendChild(thEle1);
    
    
    let hoursOfDay = 14;
  let cookieTotalArray = [];
  let total=0;
  for (var i = 0; i < hoursOfDay; i++) {


     let TotalforEchHour = Seattle.cookieSalesEachHour[i]+Tokyo.cookieSalesEachHour[i]
     +Paris.cookieSalesEachHour[i]+Lima.cookieSalesEachHour[i]+Dubai.cookieSalesEachHour[i];
        
    /* for (var j = 0; j < 5; j++) {
      
    } */
    cookieTotalArray.push(TotalforEchHour);
    let tableFootCell1 = document.createElement('th');
    tableFootCell1.textContent = cookieTotalArray[i];
    tabelele.appendChild(tableFootCell1);
    total=parseInt(total+cookieTotalArray[i]);
    console.log(total);
  }

  let thFooter = document.createElement('th');
  thFooter.textContent = total;
  tabelele.appendChild(thFooter);
         
       
}

    
    

    
    

  