import React from 'react';
export default class Featured extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: [
                {
                    id: 123123123,
                    text: "Go shopping",
                    complete: false
                },
                {
                    id: 123123123,
                    text: "Go shopping",
                    complete: false
                }
            ]
        };
    }
    render(){
        const { todos } = this.state;
        const TodoComponents = todos.map((todo)=>{
            return <Todo key={todo.id} {...todo} />;
        });
        return(
            <div>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
                );
    }
}
