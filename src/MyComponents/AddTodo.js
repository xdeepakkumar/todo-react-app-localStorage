/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
import React, {useState} from 'react'

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("All fields are required");
            return;
        }
        addTodo(title, desc);
        setTitle("");
        setDesc("");
    }
    return (
        <div className="container">
            <h3 className="text-center p-2">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) =>setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo</label>
                    <input type="text" value={desc} onChange={(e) =>setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}
