/*
 * object.function.apply(object2, arrayArguments);
 * object.prototype._property = value;
 * Object.values();
 * */

export default class Persona extends Object{
    
    static countId = 0;
 
    static get MAX_OBJ(){
      return 5;
    }
 
    constructor(name, age, tel){
      super();
      if(countID < MAX_OBJ){
      this._id = ++Persona.countId;
      }
      this._name = name;
      this._age = age;
      this._tel = tel;
    }
 
    toString(){
      return `No. ${this._id}\nName: ${this._name}\nAge: ${this._age}\nTel.: ${this._tel}`;
    }
 
    get name(){
      return this._name;
    }
    set name(name){
      this._name = name;
    }
    get age(){
      return this._age;
    }
    set age(age){
      this._age = age;
    }
    get tel(){
      return this._tel;
    }
    set tel(tel){
      this._tel = tel;
    }
  }

