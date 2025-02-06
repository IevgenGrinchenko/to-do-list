import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import {useEffect, useState} from "react";
import axios from "axios";
import ToDoList from "@/Components/ToDoList";

export default function Dashboard() {
    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/todos').then(res => setTodos(res.data) )
    }, []);


    function addTodoItem() {
        axios.post('/todo', {newItem: newItem})
            .then(res => {
                setTodos(res.data);
                setNewItem('');
            });
    }


    function handleChange(e) {
        setNewItem(e);
    }
    function deleteItem(id) {
       return  axios.delete('/todo/'+id).then(res => {
            console.log(res.data);
            setTodos(res.data);
       });
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    My ToDos
                </h2>
            }
        >
            <Head title="My Todos" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                <TextInput
                                    placeholder={'New ToDo item...'}
                                    value={newItem}
                                    onChange={(e) => {handleChange(e.target.value)}} />
                                <PrimaryButton
                                    children={'+ Add'}
                                    className={'ml-2'} onClick={addTodoItem}/>
                            </div>
                            <div className={'mt-2'}>My Todos:</div>
                            <ToDoList todos={todos} sendToParent={deleteItem}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

