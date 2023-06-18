import TodoItem from './todo_item';
import './todo_state.scss';

export enum TodoStateColor {
    todo = 0,
    inprogress = 1,
    review = 2,
    done = 3,
}

const getColorClass = (color: TodoStateColor) => {
    switch(color) {
        case TodoStateColor.todo:
            return "pt-blue";
        case TodoStateColor.inprogress:
            return "pt-brown";
        case TodoStateColor.review:
            return "pt-purple";
        case TodoStateColor.done:
            return "pt-green";
    }
}

type TodoStateProps = {
    color: TodoStateColor,
    titles: string[],
}

const TodoState: React.FC<TodoStateProps> = ({color, titles}) => {
    const colorClass = getColorClass(color);
    
    return (
        <div className={`${colorClass} todo-state`}>
            <div className="title-group">
                <div className="text">To Do</div>
            </div>
            <div className="todo-item-list">
                {
                    titles.map(title => (
                        <TodoItem title={title} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoState;