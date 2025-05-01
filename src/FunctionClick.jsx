import React from 'react'

const FunctionClick = ({ heroName }) => {
    const updateHeroName = () => {
        // return heroName("Batman");
        heroName("Batman");
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <button onClick={updateHeroName}>Click</button>
        </div>
    )
}

export default FunctionClick
