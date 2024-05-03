import { TodoEntity } from "./Utility"


export default function TodoElement(
    entity : TodoEntity, 
    delentityfunc : (id : number) => void,
    changeentityfunc : (entity : TodoEntity) => void
) {
    
    return (
        <div 
            key={entity.id} 
            style={{textDecoration: entity.isDone ? "line-through" : ""}}
            className="todoElement"
        >
            <p>
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
            {" " + entity.title}
            <button
                className="buttonX"
                onClick={() => delentityfunc(entity.id)}
            >
                X
            </button>
            </p>
        </div>
    )
}