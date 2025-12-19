"use strict";
// Serve para enumerar tipos de dados
Object.defineProperty(exports, "__esModule", { value: true });
var desingcolors;
(function (desingcolors) {
    desingcolors["white"] = "#FFFFFF";
    desingcolors["black"] = "#000000";
})(desingcolors || (desingcolors = {}));
console.log(desingcolors.black);
var statusPermission;
(function (statusPermission) {
    statusPermission[statusPermission["ADMIN"] = 0] = "ADMIN";
    statusPermission[statusPermission["USER"] = 1] = "USER";
})(statusPermission || (statusPermission = {}));
console.log(statusPermission.ADMIN);
console.log(statusPermission.USER);
