// function Student(props) {
//     return (<div>
//         <h1>{props.name }</h1>
//         <h2>{props.lastName}</h2>
//     </div>);
// }

function Student({name,lastName}) {
    return (<div>
        <h1>{name }</h1>
        <h2>{lastName}</h2>
    </div>);
}

// Props -> аргументы

ReactDOM.render(
    <div>
        <Student name = 'Peter' lastName='Parker'/>
        <Student name = 'Jack' lastName='Sparrow'/>
        <Student name = 'John' lastName='Ceena'/>
    </div>,
    document.getElementById('root')
);