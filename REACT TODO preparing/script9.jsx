class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit:false,
        }
        this.newTxt = React.createRef();
    }
    handleClickEdit = () => {
        this.setState({ isEdit: true });
    }
    handleClickSave = () => {
        const value = this.newTxt.current.value;
        console.log(value);
        this.props.updateTask(this.props.index, value);
        this.setState({ isEdit: false });
    }
    handelClickRemove = () => {
        this.props.removeTask(this.props.index);
    }
    renderNorm = () => {
        return (
            <div className="flex">
            <div className="box">
                <div className="taskBody">{this.props.children}</div>
                <button onClick={this.handleClickEdit} className="btn light">Edit task</button>
                <button onClick={this.handelClickRemove} className="btn red">Remove</button>
                </div>
                </div>
        )
    }
    renderEdit = () => {
        return (
            <div className="flex">
                <div className="box">
                    <textarea
                        ref={this.newTxt}
                        defaultValue={this.props.children}
                        name="" id="" cols="30" rows="10">
                       
                    </textarea>
                <button onClick={this.handleClickSave} className="btn success">Save</button>
        </div>
            </div>
    )
    }
     render() {
        if (this.state.isEdit) {
            return this.renderEdit();
        } else {
            return this.renderNorm();
        }
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[]
        }
    }
    addTask = () => {
        const newTasks = [...this.state.tasks];
        newTasks.push('New task');
        this.setState({ tasks: newTasks });
    }
    taskEdit = (index,text) => {
        const newTasks = [...this.state.tasks];
        newTasks[index] = text;
        this.setState({ tasks: newTasks });
    }
    taskRemove = (index) => {
        const newTasks = [...this.state.tasks];
        newTasks.splice(index, 1);
        this.setState({ tasks: newTasks });
    }

    render() {
        return (
            <div className="flex">
                <div className="box">
                <button onClick={this.addTask} className="btn new">Add new task</button>
                    {this.state.tasks.map((item, index) => {
                        return (
                            <Task
                                index={index}
                                removeTask={this.taskRemove}
                                updateTask={this.taskEdit}
                            >
                                {item}
                            </Task>)
                })}
                </div>
            </div>
        )
    }
}


ReactDOM.render(

    <TaskList />,
    document.getElementById('root'));
