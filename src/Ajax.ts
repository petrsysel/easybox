export class Ajax{
    static async load(path: string){
        const response = await fetch(path)
        return response.text()
    }
}