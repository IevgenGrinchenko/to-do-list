import axios from "axios";
import DangerButton from "@/Components/DangerButton";

export default function ToDoItem({id, name, sendToParent}) {
    function deleteItem(id) {
        sendToParent(id)
    }
    return (
        <div className={'mb-2'}>
            <DangerButton className={'mr-3 btn-sm'} children={'X'} onClick={e => {
                deleteItem(id)
            }}/>{name}
        </div>
    )
}
