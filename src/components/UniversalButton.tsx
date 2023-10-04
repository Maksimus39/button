import React from 'react';


type UniversalButtonType={
    name: string
    callBack:()=>void
}

const UniversalButton = (props:UniversalButtonType) => {
    
    const onclickHandler = () => {
       props.callBack()
    }
    
    return (
        <div>
            <button onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};

export default UniversalButton;