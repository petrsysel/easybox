"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomHelper = void 0;
class DomHelper {
    body() {
        return document.body;
    }
    makeDiv() {
        return document.createElement('div');
    }
    make(tag) {
        return document.createElement(tag);
    }
    get(id) {
        return document.getElementById(id);
    }
    appentToBody(element) {
        document.body.appendChild(element);
    }
    makeDivWith(content) {
        const div = this.makeDiv();
        div.innerHTML = content;
    }
}
exports.DomHelper = DomHelper;
