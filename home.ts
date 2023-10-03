interface IUSer {
  [key: string]: number | string;
}

const myObject: IUSer = {
  name: "Yaroslav",
  age: 20,
  city: "Kharkov",
};





interface FunctionIndexInterface {
  [key: string]: (...args: any[]) => any;
}

const myFunctions: FunctionIndexInterface = {
  greet: (name: string) => `${name}`,
  add: (a: number, b: number) => a + b,
  printMessage: (...messages: string[]) => messages.join(" "),
};





interface NumerArray {
  [index: number]: number;
  length: number;
}

const myNumerArray: NumerArray = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};




interface MyInterface {
  name: string;
  [key: string]: any;
}

const obj: MyInterface = {
  name: "Yaroslav",
  age: 20,            
  city: "Kharkov",    
 
};




interface ITest {
[key: string]: any;
}

interface MyExtendedInterface extends ITest {
name: string;
age: number;
}

const a: MyExtendedInterface = {
name: "Yaroslav",
age: 20,
city: "Kharkov",  
};








interface IndexFun {
[key: string]: any;
}

function areAllValuesNumbers(obj: IndexFun): boolean {
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    if (typeof obj[key] !== 'number') {
      return false;
    }
  }
}
return true;
}
  
  