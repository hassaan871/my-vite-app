import {createContext, useState} from 'react';

export const ColorContext = createContext();

const ColorProvider = ({children}) => {
    const [selectedComponent, setSelectedComponent] = useState('parent');
    const [color, setColor] =  useState('white');

    return(
        <ColorContext.Provider value={{ selectedComponent, setSelectedComponent, color, setColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export default ColorProvider;