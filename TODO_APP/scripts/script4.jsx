class Student extends React.Component{
render(){
    return (<div>
        <h1>Name: {this.props.name}</h1>
        <h3>Age: {this.props.Age}</h3>
    </div>)
}
}
ReactDOM.render(<div><Student name="Tigran" Age = {30} />
<Student name="John" Age={42} />
<Student name="Marry" Age={18} />
</div>, document.getElementById("root"))