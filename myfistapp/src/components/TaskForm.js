import React,{Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title : '',
        description : ''
    }
    alEnviar = (e) => {
        this.props.addTask(this.state.title,this.state.description)
        e.preventDefault();
    }

    alCambiar = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
    render(){
        //this.props.addTask("title one","description one");
        return( 
            <form onSubmit= {this.alEnviar}>
                <input 
                    name="title"
                    type="text" 
                    placeholder="Write a task" 
                    onChange={this.alCambiar} 
                    value={this.state.title}
                />
                <br/><br/>
                <textarea 
                    name="description"
                    placeholder="Description" 
                    onChange={this.alCambiar} 
                    value={this.state.description}
                />
                <input type="submit"/>
            </form>
        );
    }

} 