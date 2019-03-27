export class Task{
    id: number;
    header: string;
    task: string;
    isDone: boolean;

    constructor(
        id: number,
        header: string,
        task: string,
        isDone: boolean
        ){
            this.id = id;
            this.header = header;
            this.task = task;
            this.isDone = isDone;
    }
}