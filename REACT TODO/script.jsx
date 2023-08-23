class Student extends React.Component{
    render() {
        return (
            <div>
                <h1>Name: {this.props.name }</h1>
                <h3>Age: { this.props.age}</h3>
      </div>  
    );
}
}
ReactDOM.render(
    <div>
        <Student name='Woody' age={30 } />
        <Student name='Jane' age={22 }/>
        <Student name='Nick' age={28 }/>
        </div>
    , document.getElementById('root'));