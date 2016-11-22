//Badigina Irina
//мне стыдно за именование, но иногда я просто не могу подобрать слов

'use strict';

const posProp = ['year', 'month', 'date', 'hours', 'minutes', 'seconds'];

function Clock(arg1, arg2) {
  if (arg1) {
    if (arg1 instanceof Date) { //got date
      this.time = arg1;
      if (arg2) { //got prop
        this.prop = arg2;
      }
      else {  //default prop
        this.prop = ['hours', 'minutes', 'seconds'];
      }
    } else  {//default date, got prop
      this.prop = arg1;
      this.time = new Date();
    }
  } else { //default date, default prop
    this.time =  new Date();
    this.prop = ['hours', 'minutes', 'seconds'];
  }

  //separators
  this.dm = ((this.prop.indexOf('date') >= 0 & this.prop.indexOf('month') >= 0) ?
              '.' : ' ');
  this.my = ((this.prop.indexOf('year') >= 0 & this.prop.indexOf('month') >= 0) ?
              '.' : ' ');
  this.hm = ((this.prop.indexOf('hours') >= 0 & this.prop.indexOf('minutes') >= 0) ?
              ':' : ' ');
  this.ms = ((this.prop.indexOf('seconds') >= 0 & this.prop.indexOf('minutes') >= 0) ?
              ':' : ' ');
}

Clock.prototype = {
  runClock: function() {
    this.time.setSeconds(this.time.getSeconds() + 1);

    document.querySelector('.clock').textContent = '';

    if (this.prop.indexOf('date') >= 0)
      document.querySelector('.clock').textContent += this.time.getDate();

    if (this.prop.indexOf('month') >= 0)
      document.querySelector('.clock').textContent += this.dm + (this.time.getMonth() + 1);

    if (this.prop.indexOf('year') >= 0)
      document.querySelector('.clock').textContent += this.my + (1900 + this.time.getYear());

    if (this.prop.indexOf('hours') >= 0)
      document.querySelector('.clock').textContent += ' ' + this.time.getHours();

    if (this.prop.indexOf('minutes') >= 0)
      document.querySelector('.clock').textContent += this.hm + this.time.getMinutes();

    if (this.prop.indexOf('seconds') >= 0)
      document.querySelector('.clock').textContent += this.ms + this.time.getSeconds();
  },
  stopClock: function() {
    clearInterval(this.interval);
  }
}

var clock1 = new Clock //tests
(new Date('December 17, 1995 03:59:55'), ['year',  'hours', 'minutes']);
// (['hours', 'seconds']);
// (new Date(2014, 6, 14), ['year', 'month', 'seconds']);
// ();

clock1.runClock();
setInterval(clock1.runClock.bind(clock1), 1000);
