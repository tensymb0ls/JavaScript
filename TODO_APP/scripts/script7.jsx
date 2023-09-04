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
    handleClickEdit=()=> {
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
    
// ----------------------------------------------------------------
    render() {
        if (this.state.isEdit) {
            return this.renderEdit();
        } else {
            return this.renderNorm();
        }
    }
}
ReactDOM.render(
    <div>
        <Task text='I am task 1' />
        <Task text='I am task 2'/>
    </div>,
    document.getElementById('root'));