import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
};

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e){
        setValue(e.target.value);
    }

    function submit(e){
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <input type="text" value={value}
            onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;