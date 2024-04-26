/*
 * object.function.apply(object2, arrayArguments);
 * object.prototype._property = value;
 * Object.values();
 * */

export default class Empleado extends Persona{
    
    static countId = 0;
 
    static get MAX_OBJ(){
      return 5;
    }
 
    constructor(name, age, tel, salary){
      super(name, age, tel);
      if(countID < MAX_OBJ){
      this._id = ++Clase.countId;
      }
      this._salary = salary;
    }
 
    toString(){
      return `${super.toString()}\nId Empleado: ${this._id}\nSalary: ${this._salary}`;
    }
 
    get salary(){
      return this._salary;
    }
 
    set salary(salary){
      this._salary = salary;
    }
  }

