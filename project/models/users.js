class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `hola soy ${this.name}`
    }
}
module.exports = User;