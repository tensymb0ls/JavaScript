// ---------------- script6 start ------------------
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
        }
        this.newTxt = React.createRef();
        console.log(this.newTxt);
    }

    // ----- функции состояния компонента + его отрисовка ------
    handleClickEdit = () => {
        this.props.editTask(this.props.index);
        this.setState({isEdit: true});
    }
    handleClickSave = () => {
        const value = this.newTxt.current.value;
        console.log(value);
        this.setState({ isEdit: false });
    }
    handleClickRemove = () => {
        alert(`Pressed remove button of "${this.props.text}"`);
    }
    renderNorm = () => {
        return (
            <div className="flex">
            <div className="box">
                <div>{this.props.text}</div>
                <button onClick={this.handleClickEdit} className="btn light">Edit task</button>
                <button onClick={this.handleClickRemove} className="btn red">Remove</button>
                </div>
                </div>
        )
    }
    renderEdit = () => {
        return (
            <div className="flex">
                <div className="box">
                <div>{this.props.text}</div>
                    <textarea ref={this.newTxt} name="" id="" cols="30" rows="10"></textarea>
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
// ---------------script6 end--------------------
// Tasklist ->

class Tasklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['task1','task2','task3'],
        }
    }
    
    taskEdit = (index, text) => {
        const tasks = [...this.state.tasks]; // развернутый новый массив из текущего состояния tasks
        console.log(index);
    }
    render() {
        return (
            <div>
                {this.state.tasks.map((item, index) => <Task text={item} editTask={this.taskEdit} index={index} />)}
                {/*встроенный метод map - цикл, который пройдет по всем элементам 
                массива и применит к ним функцию, которую мы передадим ему
                в качестве аргумента. В нашем случае, это компонент Task 
                с атрибутом text, который принимает в себя элемент массива tasks*/}
          </div>  
        );
    }
}



ReactDOM.render(
    <div>
        <Tasklist />
   </div>,
    document.getElementById('root')
);