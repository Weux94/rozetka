
import "./Button.css";


const age = 30;
function Math (a, b) {
    return a + b;
}

const Button = (props) => {
    return (

    <>
    {age > 20 && console.log('Yes')}
    <button className="button" admin={props.name}>My Button</button>
    <p>His name is {props.name} and he is {props.age}</p>
   
    </>
    )
}

export  {Button};