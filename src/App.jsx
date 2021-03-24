import React from 'react';
import ColofulMessage from './components/ColorfulMessage';

const App = () => {
    const onClickButton = () => {
        console.log("HelloWorld");
    };
    return (
        <>
            <h1 style={{ color: 'red'}}>hello</h1>
            <ColofulMessage />
            <ColofulMessage />
            <ColofulMessage />
            <button onClick={onClickButton}>ボタン</button>
        </>
    );
};


export default App;
