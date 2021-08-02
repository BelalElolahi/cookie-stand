"use strict";
let div1 = document.getElementById('div1');

const Seattle = {
    bracnchNAme: 'Seattle',
    pranchHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
    avgMinMAX:[23,65,6.3],
    /* minimumNumberOfCustomersPerHour: 23,
    maximumCustomersPerHour: 65,
    avargeNumberOfCookiesPerCustomer: 6.3, */
    
    numberOfCustomersPerHour: 0,
    cookieSalesEachHour:[],
    cookieSalesTotal:0,
    getCustomerperHour: function () {

        this.numberOfCustomersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
        console.log(this.numberOfCustomersPerHour);
        return this.numberOfCustomersPerHour;
    },
     getcookieSalesEachHour: function()
     {
        for (let i = 0; i < this.pranchHour.length; i++) {
            this.getCustomerperHour();
            this.cookieSalesEachHour.push(Math.ceil(this.numberOfCustomersPerHour * this.avgMinMAX[2]));
            this.cookieSalesTotal+=this.cookieSalesEachHour[i];
            
        }
     },
    render: function () {
        let h2Element = document.createElement('h2');
        console.log(h2Element);
        h2Element.textContent = this.bracnchNAme;
        div1.appendChild(h2Element);

        let ulelement = document.createElement('ul');
        div1.appendChild(ulelement)
        
        this.getcookieSalesEachHour();
        for (let i = 0; i < this.cookieSalesEachHour.length;i++)
        {
        let liElement = document.createElement('li');
        liElement.textContent = this.pranchHour[i]+" : "+this.cookieSalesEachHour[i]+" Cookies";
        ulelement.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent ="Total :"+this.cookieSalesTotal;
        ulelement.appendChild(liElement);


         
    }

};
 Seattle.getCustomerperHour();
//console.log(Seattle);
Seattle.render(); 


const Tokyo = {
    bracnchNAme: 'Tokyo',
    pranchHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
    avgMinMAX:[3,24,1.2],
    /* minimumNumberOfCustomersPerHour: 3,
    maximumCustomersPerHour: 24,
    avargeNumberOfCookiesPerCustomer: 1.2, */
    
    numberOfCustomersPerHour: 0,
    cookieSalesEachHour:[],
    cookieSalesTotal:0,
    getCustomerperHour: function () {

        this.numberOfCustomersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
        console.log(this.numberOfCustomersPerHour);
        return this.numberOfCustomersPerHour;
    },
     getcookieSalesEachHour: function()
     {
        for (let i = 0; i < this.pranchHour.length; i++) {
            this.getCustomerperHour();
            this.cookieSalesEachHour.push(Math.ceil(this.numberOfCustomersPerHour * this.avgMinMAX[2]));
            this.cookieSalesTotal+=this.cookieSalesEachHour[i];
            
        }
     },
    render: function () {
        let h2Element = document.createElement('h2');
        console.log(h2Element);
        h2Element.textContent = this.bracnchNAme;
        div1.appendChild(h2Element);

        let ulelement = document.createElement('ul');
        div1.appendChild(ulelement)
        
        this.getcookieSalesEachHour();
        for (let i = 0; i < this.cookieSalesEachHour.length;i++)
        {
        let liElement = document.createElement('li');
        liElement.textContent = this.pranchHour[i]+" : "+this.cookieSalesEachHour[i]+" Cookies";
        ulelement.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent ="Total :"+this.cookieSalesTotal;
        ulelement.appendChild(liElement);


         
    }

};
Tokyo.getCustomerperHour();
//console.log(Tokyo);
Tokyo.render(); 


const Dubai = {
    bracnchNAme: 'Dubai',
    pranchHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
    avgMinMAX:[11,38,3.7],
    /* minimumNumberOfCustomersPerHour: 11,
    maximumCustomersPerHour: 38,
    avargeNumberOfCookiesPerCustomer: 3.7, */
    
    numberOfCustomersPerHour: 0,
    cookieSalesEachHour:[],
    cookieSalesTotal:0,
    getCustomerperHour: function () {

        this.numberOfCustomersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
        console.log(this.numberOfCustomersPerHour);
        return this.numberOfCustomersPerHour;
    },
     getcookieSalesEachHour: function()
     {
        for (let i = 0; i < this.pranchHour.length; i++) {
            this.getCustomerperHour();
            this.cookieSalesEachHour.push(Math.ceil(this.numberOfCustomersPerHour * this.avgMinMAX[2]));
            this.cookieSalesTotal+=this.cookieSalesEachHour[i];
            
        }
     },
    render: function () {
        let h2Element = document.createElement('h2');
        console.log(h2Element);
        h2Element.textContent = this.bracnchNAme;
        div1.appendChild(h2Element);

        let ulelement = document.createElement('ul');
        div1.appendChild(ulelement)
        
        this.getcookieSalesEachHour();
        for (let i = 0; i < this.cookieSalesEachHour.length;i++)
        {
        let liElement = document.createElement('li');
        liElement.textContent = this.pranchHour[i]+" : "+this.cookieSalesEachHour[i]+" Cookies";
        ulelement.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent ="Total :"+this.cookieSalesTotal;
        ulelement.appendChild(liElement);


         
    }

};
Dubai.getCustomerperHour();
//console.log(Dubai);
Dubai.render(); 




const Paris	 = {
    bracnchNAme: 'Paris	',
    pranchHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
    avgMinMAX:[20,38,2.3],
    /* minimumNumberOfCustomersPerHour: 20,
    maximumCustomersPerHour: 38,
    avargeNumberOfCookiesPerCustomer: 2.3, */
    
    numberOfCustomersPerHour: 0,
    cookieSalesEachHour:[],
    cookieSalesTotal:0,
    getCustomerperHour: function () {

        this.numberOfCustomersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
        console.log(this.numberOfCustomersPerHour);
        return this.numberOfCustomersPerHour;
    },
     getcookieSalesEachHour: function()
     {
        for (let i = 0; i < this.pranchHour.length; i++) {
            this.getCustomerperHour();
            this.cookieSalesEachHour.push(Math.ceil(this.numberOfCustomersPerHour * this.avgMinMAX[2]));
            this.cookieSalesTotal+=this.cookieSalesEachHour[i];
            
        }
     },
    render: function () {
        let h2Element = document.createElement('h2');
        console.log(h2Element);
        h2Element.textContent = this.bracnchNAme;
        div1.appendChild(h2Element);

        let ulelement = document.createElement('ul');
        div1.appendChild(ulelement)
        
        this.getcookieSalesEachHour();
        for (let i = 0; i < this.cookieSalesEachHour.length;i++)
        {
        let liElement = document.createElement('li');
        liElement.textContent = this.pranchHour[i]+" : "+this.cookieSalesEachHour[i]+" Cookies";
        ulelement.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent ="Total :"+this.cookieSalesTotal;
        ulelement.appendChild(liElement);


         
    }

};
Paris.getCustomerperHour();
//console.log(Paris	);
Paris.render(); 


const Lima	 = {
    bracnchNAme: 'Lima	',
    pranchHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'],
    avgMinMAX:[2,16,4.6],
    /* minimumNumberOfCustomersPerHour: 2,
    maximumCustomersPerHour: 16,
    avargeNumberOfCookiesPerCustomer: 4.6, */
    
    numberOfCustomersPerHour: 0,
    cookieSalesEachHour:[],
    cookieSalesTotal:0,
    getCustomerperHour: function () {

        this.numberOfCustomersPerHour = Math.floor(Math.random() * (this.avgMinMAX[1] - this.avgMinMAX[0] + 1) + this.avgMinMAX[0]);
        console.log(this.numberOfCustomersPerHour);
        return this.numberOfCustomersPerHour;
    },
     getcookieSalesEachHour: function()
     {
        for (let i = 0; i < this.pranchHour.length; i++) {
            this.getCustomerperHour();
            this.cookieSalesEachHour.push(Math.ceil(this.numberOfCustomersPerHour * this.avgMinMAX[2]));
            this.cookieSalesTotal+=this.cookieSalesEachHour[i];
            
        }
     },
    render: function () {
        let h2Element = document.createElement('h2');
        console.log(h2Element);
        h2Element.textContent = this.bracnchNAme;
        div1.appendChild(h2Element);

        let ulelement = document.createElement('ul');
        div1.appendChild(ulelement)
        
        this.getcookieSalesEachHour();
        for (let i = 0; i < this.cookieSalesEachHour.length;i++)
        {
        let liElement = document.createElement('li');
        liElement.textContent = this.pranchHour[i]+" : "+this.cookieSalesEachHour[i]+" Cookies";
        ulelement.appendChild(liElement);
        }

        let liElement = document.createElement('li');
        liElement.textContent ="Total :"+this.cookieSalesTotal;
        ulelement.appendChild(liElement);


         
    }

};
Lima.getCustomerperHour();
//console.log(Lima	);
Lima.render(); 