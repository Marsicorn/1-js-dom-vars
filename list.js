//Badigina Irina

'use strict';

const peopleNames = [
    {   name: 'Shannon',
        gender: 'male' },
    {   name: 'James',
        gender: 'male' },
    {   name: 'Oliver',
        gender: 'male' },
    {   name: 'Mike',
        gender: 'male' },
    {   name: 'Artemy',
        gender: 'male' },
    {   name: 'Philip',
        gender: 'male' },
    {   name: 'Anna',
        gender: 'female' },
    {   name: 'Carol',
        gender: 'female' },
    {   name: 'Kate',
        gender: 'female' },
    {   name: 'Taylor',
        gender: 'female' }
];

const jobs = ['illustrator', 'doctor', 'programmer',
            'engineer', 'orthodontist', 'cartographer'];

const maxSalary = 120;
const minSalary = 20;
const maxAge = 35;
const minAge = 20;

let people = new Array(10);
let data = '<ol class=\"people\">';
for (let i = 0; i < 10; i++) {
    people[i] = createPerson();

    data += '<li style=\"background-color:' + backgroundColor(people[i].salary) + ';'
        + (people[i].gender == 'female' ? ' font-size: 1.5em;' : '')
        + (people[i].job == 'cartographer' ? ' border-bottom: 4px solid black;' : '')
        + '\">';

    data += '<span class=\"name\"'
            + (people[i].age > 20 && people[i].age < 27 ? ' style=\"font-weight: bold;\"' : '')
            + '>' + people[i].name + '<\/span>';
    data += '<span class=\"age\">' + people[i].age + '<\/span>';
    data += '<span class=\"job\">' + people[i].job + '<\/span>';
    data += '<span class=\"salary\">' + people[i].salary + '<\/span>';

    data += '</li>';
}
data += '</ol>';

document.querySelector('.content').innerHTML = data;

/**/

function backgroundColor(salary) {
    return salary < 50 ? '#EE5F5B' : salary < 80 ? '#F89406' : '#62C462';
}

function createPerson() {
    let index = getRandom(0, peopleNames.length);
    return  {
        name: peopleNames[index].name,
        gender: peopleNames[index].gender,
        age: getRandom(minAge, maxAge),
        job: jobs[getRandom(0, jobs.length)],
        salary: getRandom(minSalary, maxSalary)
    };
}

function getRandom(from, to) {
    return Math.floor((Math.random() * (to - from)) + from);
}