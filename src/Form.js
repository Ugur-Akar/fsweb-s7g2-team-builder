import { useState } from "react";


function Form(props) {
    
    const initMember = {
        "name":"",
        "email":"",
        "role":"",
        "age": 0
    }

    const [newMember, setNewMember] = useState(initMember);

    const inputChangeHandler = (e) => {
        e.preventDefault();
        const tmpMem = {...newMember};
        const key = e.target.name;
        tmpMem[key] = e.target.value;
        setNewMember(tmpMem);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.func(newMember);
        setNewMember(initMember);
    } 

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <label>
                    Name:
                    <input name = "name" onChange = {inputChangeHandler} type = "text" value = {newMember.name}/>
                </label>
                <label>
                    Email:
                    <input name = "email" onChange = {inputChangeHandler} type = "text" value = {newMember.email}/>
                </label>
                <label>
                    Role:
                    <input name = "role" onChange = {inputChangeHandler} type = "text" value = {newMember.role}/>
                </label>
                <label>
                    Age:
                    <input name = "age" onChange = {inputChangeHandler} type = "number" value = {newMember.age}/>
                </label>

                <br />
                    <button>Submit</button>

            </form>

            <hr />

        </div>
        
    );
}

export default Form;