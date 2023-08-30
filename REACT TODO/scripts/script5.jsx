// обработка событий в классовом стиле
class Task extends React.Component {
  // Инкапсуляция -> Data and methods
handleClickEdit = () => {
    alert(`Pressed edit button of ${this.props.children}`);
}
handleClickRemove = () => {
    alert(`Pressed remove button of ${this.props.children}`)
}
  render() {
    return (
      <div className="box">
        <div>{this.props.children}</div>
        <button className="btn light" onClick={this.handleClickEdit}>Edit task</button>
        <button className="btn red" onClick={this.handleClickRemove}>Remove</button>
      </div>
    );
  } 
}
ReactDOM.render(
  <div className="field">
    <Task >Купить арбуз</Task>
    <Task >Порезать арбуз</Task>
    <Task >Сьесть арбуз</Task>
  </div>,
  document.getElementById("root"))