export class DomHelper{
    body(){
        return document.body as HTMLBodyElement
    }

    makeDiv(){
        return document.createElement('div') as HTMLDivElement
    }

    make(tag: keyof HTMLElementTagNameMap){
        return document.createElement(tag)
    }

    get(id: string){
        return document.getElementById(id)
    }

    appentToBody(element: HTMLElement){
        document.body.appendChild(element)
    }

    makeDivWith(content: string){
        const div = this.makeDiv()
        div.innerHTML = content
    }

    
}