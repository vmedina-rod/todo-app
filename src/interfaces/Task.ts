class Task {
    title: String;
    isCompleted: boolean;
    id: BigInt;
    owner: String;
    priority: number;

    constructor(
        id: BigInt,
        title: String,
        isCompleted: boolean = false,
        owner: String,
        priority: number,
    ) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.owner = owner;
        this.id = id;
        this.priority = priority;
    }
}

export default Task;