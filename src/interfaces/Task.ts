class Task {
    title: String;
    isCompleted: boolean;
    id: BigInt;
    owner: String;
    priority: number;
    created_at: Date;

    constructor(
        id: BigInt,
        title: String,
        isCompleted: boolean = false,
        owner: String,
        priority: number,
        created_at: Date,
    ) {
        this.title = title;
        this.isCompleted = isCompleted;
        this.owner = owner;
        this.id = id;
        this.priority = priority
        this.created_at = created_at
    }
}

export default Task;