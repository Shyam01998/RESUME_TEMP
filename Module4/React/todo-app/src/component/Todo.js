import { Component } from "react";

class Todo extends Component{
    constructor(){
        super();
        this.state = {
            task:["Learn JS","Learn DOM","Learn React","Learn Node"]
        }
    }
    render(){
        return(
                <div>
                    <input type="text"/>
                    <button>Add Task</button>
                    <ul>
                        {this.state.task.map((ele)=>(
                            <li>
                                <p>{ele}</p>
                            </li>
                        ))}
                    </ul>

                </div>
             )
    }
}
export default Todo;

