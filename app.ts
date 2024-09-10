class User {
    name : string;
    constructor(_name:string){
        this.name = _name;
    }
}

const john : User = new User("Джон");
const header = this.document.getElementById("header");
header.innerHTML = "Hello " + john.name;