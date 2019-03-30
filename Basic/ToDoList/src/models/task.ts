export class Task{
    id: number;
    header: string;
    taskContent: string;
    isDone: boolean;

    constructor(
        id: number,
        header: string,
        taskContent: string,
        isDone: boolean
        ){
            this.id = id;
            this.header = header;
            this.taskContent = taskContent;
            this.isDone = isDone;
    }
}