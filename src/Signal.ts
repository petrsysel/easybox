export class Signal<Emits, Provides>{
    private listeners: {
        event: Emits,
        listener: (data: Provides) => void
    }[] = []

    on(event: Emits, listener: (data: Provides) => void){
        this.listeners.push({
            event: event,
            listener: listener
        })
    }

    emit(event: Emits, data: Provides){
        this.listeners
            .filter(l => l.event === event)
            .forEach(l => l.listener(data))
    }
}