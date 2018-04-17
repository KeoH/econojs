"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Model {
    constructor(name) {
        this.name = name;
    }
    sayname() {
        console.log('My name is ' + this.name);
    }
}
exports.Model = Model;
