import React from "react";
import './App.css';
import UniversalButton from "./components/UniversalButton";

function App() {

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    //     alert('Hello Im Maksim')
    // }
    //
    // const mySecondSubskriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     alert('Hello Im Larisa')
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    // const foo1 = () => {
    //     // ничего не передавать, но в консоли должно появиться 100200
    //     console.log(100200)
    // }
    // const foo2 = (num: number|string) => {
    //     // передать цифру 100200
    //     console.log(num)
    // }


    const Button1Foo1 = () => {
        console.log('Macsim')
    }
    const Button1Foo2 = (name: string) => {
        console.log(name)
    }
    const Button1FooDelete = (date: number | string, name: string) => {
        console.log(date, name)
    }
    return (
        <div className={'App'}>
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Max')}>Papa</button>*/}
            {/*<button onClick={(event:MouseEvent<HTMLButtonElement>)=>onClickHandler('Larisa')}>Mama</button>*/}
            {/*<button onClick={()=>onClickHandler('Andrey')}>Son 1</button>*/}
            {/*<button onClick={()=>onClickHandler('Bogdan')}>Son 2</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={() => foo2(100200)}>2</button>*/}

            {/*<button>MyYouTubeChannel-1</button>*/}
            {/*<button>MyYouTubeChannel-2</button>*/}

            <UniversalButton name={'MyYouTubeChannel-1'} callBack={Button1Foo1}/>
            <UniversalButton name={'MyYouTubeChannel-2'} callBack={() => Button1Foo2('Larisa')}/>
            <UniversalButton name={'Delete'} callBack={() => Button1FooDelete(1000, 'Max')}/>
        </div>
    )


}

export default App;
