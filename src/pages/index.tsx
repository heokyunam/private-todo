import TodoState, { TodoStateColor } from "@/components/todo_state";
import "./page_index.scss";

export default function Index() {
    return (
        <div className="pageindex">
            <TodoState color={TodoStateColor.todo} titles={["디자인 카피하기"]}/>
            <TodoState color={TodoStateColor.inprogress} titles={["디자인 카피하기"]}/>
            <TodoState color={TodoStateColor.review} titles={["디자인 카피하기"]}/>
            <TodoState color={TodoStateColor.done} titles={["디자인 카피하기"]}/>
        </div>
    )
}