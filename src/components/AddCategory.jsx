import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }


    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Busca GIF"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
