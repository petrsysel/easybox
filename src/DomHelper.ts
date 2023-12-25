export class DomHelper{
    static body(){
        return document.body as HTMLBodyElement
    }

    static makeDiv(){
        return document.createElement('div') as HTMLDivElement
    }

    static make(tag: keyof HTMLElementTagNameMap){
        return document.createElement(tag)
    }

    static get(id: string){
        return document.getElementById(id)
    }

    static appentToBody(element: HTMLElement){
        document.body.appendChild(element)
    }
    
    static makeDivWith(content: string){
        const div = this.makeDiv()
        div.innerHTML = content
    }
}