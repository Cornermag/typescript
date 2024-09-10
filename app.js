var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var john = new User("Джон");
var header = this.document.getElementById("header");
header.innerHTML = "Hello " + john.name;

let jane = new User("Джейн");
let dima = new User("Дима");
let alex = new User("Алекс");