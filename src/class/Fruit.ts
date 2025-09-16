export class Fruit{
    private _name: string|undefined;

    constructor(name:string|undefined) {
        this._name = name;
    }

    describe(): string{
        return `Le fruit choisi est : ${this._name}.`;
    }
}