class Block extends React.Component {
    render() {
        return (
            <div>
                <h1>This id name field</h1>
                <div>{this.props.name}</div>
                <h2>This id index field</h2>
                <div>{this.props.index}</div>
            </div>);
        
    }
}
ReactDOM.render(
    <div>
        <Block name={2 + 2} index={ 'text'} />
        <Block name={6} index={ 'text 2'}/>
        <Block name='{2 + 2}' index={ 'text 3'}/>
    </div>,
    document.getElementById('root')
);