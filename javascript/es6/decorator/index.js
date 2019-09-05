/*
 * @Author: Blue
 * @Date: 2019-07-12 16:58:48
 * @Last Modified by: Blue
 * @Last Modified time: 2019-07-23 14:50:29
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//1. decorator
var A = /** @class */ (function () {
    function A() {
    }
    A.isTest = function () {
        console.log("is A");
    };
    A = __decorate([
        B
    ], A);
    return A;
}());
;
function B(target) {
    target.isTest = true;
    console.log(target);
}
;
console.log(A.isTest);
//true
// function C(target) {
//    target.test = true;
// }
// function D() {}
// D = C(D) || D;
// console.log(D.test); true
//2. 多个参数
function E(isTest) {
    return function (target) {
        target.isTest = isTest;
        target.testMsg = function (testMsg) {
            alert(testMsg);
        };
    };
}
;
var F = /** @class */ (function () {
    function F() {
    }
    F.isTest = false;
    F.testMsg = {};
    F = __decorate([
        E(true)
    ], F);
    return F;
}());
;
console.log(F.isTest);
// F.testMsg('halo');   true, alert('halo')
//3. prototype
var G = /** @class */ (function () {
    function G() {
    }
    G.isTest = false;
    G = __decorate([
        H
    ], G);
    return G;
}());
;
function H(target) {
    target.prototype.isTest = 'halo';
}
;
var I = new G();
// console.log(I.isTest);  halo
var J = /** @class */ (function () {
    function J() {
    }
    J.prototype.name = function () {
        return 'halo';
    };
    __decorate([
        readOnly
    ], J.prototype, "name");
    return J;
}());
;
function readOnly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
readOnly(J.prototype, 'name', descriptor);
