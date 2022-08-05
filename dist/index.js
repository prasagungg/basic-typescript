"use strict";
//basic types
let id = 5;
let company = "Agung Group";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
//Tuple
let person = [1, "brad", true];
//tuple array
let employe;
employe = [
    [1, "Brad"],
    [2, "Jonh"],
];
//union
let pid;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "agung",
};
//Type Assertion
let cid = 1;
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "agung",
};
