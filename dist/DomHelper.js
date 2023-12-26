"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomHelper = void 0;
class DomHelper {
    static body() {
        return document.body;
    }
    static makeDiv() {
        return document.createElement('div');
    }
    static make(tag) {
        return document.createElement(tag);
    }
    static get(id) {
        return document.getElementById(id);
    }
    static appentToBody(element) {
        document.body.appendChild(element);
    }
    static makeDivWith(content) {
        const div = this.makeDiv();
        div.innerHTML = content;
        return div;
    }
}
exports.DomHelper = DomHelper;
