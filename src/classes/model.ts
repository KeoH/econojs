export class Model {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayname() {
        console.log('My name is ' + this.name);
    }
}