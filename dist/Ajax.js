"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ajax = void 0;
class Ajax {
    static async load(path) {
        const response = await fetch(path);
        return response.text();
    }
}
exports.Ajax = Ajax;
