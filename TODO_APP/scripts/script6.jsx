// ---------------------  component state ---------------------------
/*
{
    name: Andrew,
    age: 32,
    state: true/false/'sad'/[1,2,...] <- описание состояния (state), 
    от изменения состояния зависит отрисовка компонента в DOM
}
*/
// ------------ класовый подход ---------------
class Check extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this);
        this.state = { // intial state
            checked: false,
        }
    }

    handleCheckChange = () => {
        // console.log(this.state);
        this.setState({ checked: !this.state.checked }) // new state (inverse)
     };

    render() {
        const message = this.state.checked ? 'checked' : 'unchecked';
        return (
            <div>
                <input onChange={this.handleCheckChange} type='checkbox' />
                <p>Checkbox {message}</p>
                </div>
        )

    }
}
ReactDOM.render(
    <Check name='Loh'/>,
    document.getElementById('root')
);