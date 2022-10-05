const chelsea = require('./basic2');

class chelseaW extends chelsea
{
    constructor(coach){
        //call parent class constructor
        super(coach)
    }

    get stadium(){
        return "Cobham";
    }
}

let chw = new chelseaW("Emma");
console.log(chw.coach + " " + chw.jersey);