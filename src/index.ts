//basic types
let id: number = 5;
let company: string = "Agung Group";
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "hello"];

//Tuple
let person: [number, string, boolean] = [1, "brad", true];

//tuple array
let employe: [number, string][];

employe = [
  [1, "Brad"],
  [2, "Jonh"],
];

//union
let pid: string | number;
pid = "22";

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

//Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "agung",
};

//Type Assertion
let cid: any = 1;
let customerId = <number>cid;

//functions
function addNum(x: number, y: number): number {
  return x + y;
}

//void
function log(message: string | number): void {
  console.log(message);
}

//Interface
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "agung",
};
