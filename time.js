//Badigina Irina
'use strict';

class Clock {
    constructor(date = new Date, format = ['hour', 'minute', 'second']) {
        if (date instanceof Date) this.time = date;
        else {
            if (date instanceof Array) format = date;
            this.time = new Date;
        }

        this.setTimeFormat(format);

        let clockId = document.querySelectorAll('.clock').length;
        document.querySelector('.content').innerHTML +=
            '<div class=\"clock\" id=\"clock' + clockId +
            '\"><div class=\"clock__value\"></div></div>';

        this.printTimeFormat(clockId);
        setInterval(this.getTime.bind(this, clockId), 1000);
    };

    getTime(clockId) {
        this.time.setSeconds(this.time.getSeconds() + 1);
        document.querySelector('#clock' + clockId + ' > .clock__value')
            .textContent =
            this.time.toLocaleString("ru", this.format);
    };

    printTimeFormat(clockId) {
        let timeFormat = '[ ';
        for (let component in this.format) {
            timeFormat += component + ' ';
        }
        timeFormat += ']';
        document.querySelector('#clock' + clockId).innerHTML += '<div class=\"clock__format\">' + timeFormat +  '</div>';
    }

    setTimeFormat(format) {
        let options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };

        for (let component in options) {
            if (format.indexOf(component) < 0)
                delete options[component];
        }

        if (Object.keys(options).length == 0)
            this.format = {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
        else this.format = options;
    }
};

let clock0 = new Clock(new Date('December 17, 1995 03:59:55'));
let clock1 = new Clock(['second', 'minute']);
let clock2 = new Clock(['second', 'month', 'day', 'minute'], new Date);
let clock3 = new Clock(['hahahaha']);
let clock4 = new Clock();

