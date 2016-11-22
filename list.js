//Badigina Irina

'use strict';

const names = ['James', 'Oliver', 'Mike', 'Nick', 'Aaron',
            'Artemy', 'Phillip', 'Anna', 'Carol', 'Kate'];
const womenNames = ['Anna', 'Carol', 'Kate'];
const jobs = ['Illustrator', 'Doctor', 'Programmer',
            'Engineer', 'Orthodontist', 'Cartographer'];
const maxSalary = 120;
const minSalary = 20;
const maxAge = 35;
const minAge = 20;

/*******************************/

var people = [10];

var peopleList = document.getElementsByClassName('people')[0];
for (var i = 1; i <= 10; i++) {
  createPerson(people);
  appendPerson(people, i, peopleList);
}

for (var i = 0; i < peopleList.childNodes.length; i++) {
  decoratePerson(peopleList.childNodes[i]);
}

/*******************************/

function createPerson(list) {
  list.push({
    name: names[Math.floor(Math.random() * names.length)],
    age: Math.floor(Math.random() * (maxAge - minAge)) + minAge,
    job: jobs[Math.floor(Math.random() * jobs.length)],
    salary: Math.floor(Math.random() * (maxSalary - minSalary)) + minSalary
  });
}

function appendPerson(source, number, list) {

  var newElement = document.createElement('li');

  for (var key in source[number]) {
    var elementProperty = document.createElement('span');
    elementProperty.setAttribute('class', key);
    elementProperty.textContent = source[number][key];
    newElement.appendChild(elementProperty);
  }

  list.appendChild(newElement);
}

function decoratePerson(node) {
  for (var i = 0; i < node.childNodes.length; i++) {
    switch (node.childNodes[i].className) {
      case 'name':
        if (womenNames.indexOf(node.childNodes[i].textContent) >= 0)
          node.style.fontSize = '1.5em';
      break;
      case 'age':
        if (node.childNodes[i].textContent> 20 &&
            node.childNodes[i].textContent < 27) {
            for (var j = 0; j < node.childNodes.length; j++) {
              if (node.childNodes[j].className == 'name')
                  node.childNodes[j].style.fontWeight = "900";
            }
          }
      break;
      case 'job':
        if (node.childNodes[i].textContent == 'Doctor') {
          //not sure if border or underline was meant
          node.style.textDecoration = 'underline';
          node.style.borderBottom = '2px solid black';
        }
      break;
      case 'salary':
        if (node.childNodes[i].textContent < 50)
          node.style.backgroundColor = '#EE5F5B';
        else if (node.childNodes[i].textContent < 80)
          node.style.backgroundColor = '#F89406';
        else
          node.style.backgroundColor = '#62C462';
      break;
      // default:
      // break;
    }
  }
}
