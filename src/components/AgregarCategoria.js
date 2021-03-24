import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AgregarCategoria = ({ setCategoria }) => {

    const [inputValor, setInputValor] = useState("");

    const handleInputChange = (e) => {
        setInputValor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValor.trim().length > 2) {

            setCategoria(state => [inputValor, ...state]);
            setInputValor("");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValor} onChange={handleInputChange}></input>
        </form>

    )
}
AgregarCategoria.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
