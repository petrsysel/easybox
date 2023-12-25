export declare class Signal<Emits, Provides> {
    private listeners;
    on(event: Emits, listener: (data: Provides) => void): void;
    emit(event: Emits, data: Provides): void;
}
