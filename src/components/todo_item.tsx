

type TodoProps = {
    title: string;
}

const TodoItem: React.FC<TodoProps> = ({title}) => {
    return (
        <div className="todo-item">
            <div className="title">
                {title}
            </div>
        </div>
    )
}

TodoItem.defaultProps = {
    title: ""
}

export default TodoItem;