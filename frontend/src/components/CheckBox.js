import { Checkbox } from 'antd';
import React from 'react';
import '../Estilos/CheckBox.css'

const CheckBox = (props) => {
    return(
        <Checkbox className='Checkbox'>{props.txt}</Checkbox>
    )
}

export default CheckBox;