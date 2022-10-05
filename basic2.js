let sumInt = (a,b)=> a+b;
//console.log(sumInt(2,3));

//object
let person = {
    firstName:'Joe',
    lastName:'Bill',
    age:'24',
    fullName: function(){
        return this.firstName + this.lastName;
    }
}
for(let key in person){
    //console.log(person[key]);
}

console.log(person.fullName());

//class
module.exports = class chelsea 
{
    constructor(coach){
        this.coach = coach;
    }
    player = 'drogba';
    jersey = 'blue';

    get stadium(){
        return "Stamford Bridge";
    }

}

//let ch = new chelsea('Tuchel');
//console.log(ch.jersey + " " + ch.stadium + " " + ch.coach);