export class Hero {


    id: number;
    name: string;
    isShy: boolean;
    

    constructor(id: number, name: string, isShy: boolean){
        this.name = name;
        this.id = id;
        this.isShy = isShy;
    }
}