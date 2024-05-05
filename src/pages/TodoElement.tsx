import React from "react"
import { TodoEntity } from "./Utility"


const TodoElement = React.memo((
    {entity, delentityfunc, changeentityfunc}
    : 
    {
        entity: TodoEntity, 
        delentityfunc: (id: number) => void,
        changeentityfunc: (entity: TodoEntity) => void
    }
) => {
    
    return (
        <>
            <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded">
                <div className="items-center">
                    <input 
                        type="checkbox" 
                        checked={entity.isDone} 
                        onChange={
                            () => {
                                entity.isDone = ! entity.isDone
                                changeentityfunc(entity)
                            }
                        }
                    />
                    <span style={{textDecoration: entity.isDone ? "line-through" : ""}}>
                        {" " + entity.title}
                    </span>
                </div>
                <div className="items-center">
                    <button
                        className="px-4 py-2 float-right"
                        onClick={() => delentityfunc(entity.id)}
                    >
                    X
                    </button>
                </div>
            </div>
        </>
    )
})

export default TodoElement