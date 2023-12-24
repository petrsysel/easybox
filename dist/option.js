"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSome = exports.some = exports.none = void 0;
exports.none = undefined;
function some(value) {
    return { value: value };
}
exports.some = some;
function isSome(o) {
    return o !== exports.none;
}
exports.isSome = isSome;
