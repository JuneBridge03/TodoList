export interface TodoEntity {
    id : number,
    title : string,
    isDone : boolean
}

export interface Action {
    type: string
    entity: TodoEntity
}