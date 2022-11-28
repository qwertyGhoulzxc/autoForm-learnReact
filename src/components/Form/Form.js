import React from 'react';
import {Input,Button} from './FormStyled'

const Form: React.FC = ({addData,data}) => {
    let obj={}

    const handleClick = (e)=>{
        e.preventDefault()

        addData([...data,obj])
        console.log(data)
        document.getElementById('mark').value = '';
        document.getElementById('date').value = '';
        document.getElementById('price').value = '';

 obj = {}




    }


    return (
        <form>
<Input id='mark' onChange={(e)=>{obj.mark = e.target.value}}/>
<Input id='date'   onChange={(e)=>{obj.date = e.target.value}} />
<Input id='price'  onChange={(e)=>{obj.price = e.target.value} }/>
<Button onClick={handleClick}>click</Button>

        </form>
    );
};

export default Form;