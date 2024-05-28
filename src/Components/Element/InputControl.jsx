const InputControl = (props) => {
    return (
        <>
        <input 
        type={props.type ? props.type:"text"}
        className={props.className ?props.className : "form-control"}
        placeholder={props.placeholder ? props.placeholder : "Filed is required"}
        onChange={onchange}
        />
        </>
    )
}

export default InputControl;