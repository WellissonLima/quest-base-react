import './button.css'

const myLabel = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = (props) => {
    return <button className="btn" onClick={() => myLabel(props.label)} >{props.label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button;