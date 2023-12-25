"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signal = void 0;
class Signal {
    constructor() {
        this.listeners = [];
    }
    on(event, listener) {
        this.listeners.push({
            event: event,
            listener: listener
        });
    }
    emit(event, data) {
        this.listeners
            .filter(l => l.event === event)
            .forEach(l => l.listener(data));
    }
}
exports.Signal = Signal;
