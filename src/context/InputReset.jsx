import React, { createContext, useState } from 'react'

export const InputReset = createContext()

function InputResetProvider({children})
{
    const [buttonChange, setButtonChange] = useState('');

     return (
        <InputReset.Provider  value={{buttonChange, setButtonChange}}>
            {children}
        </InputReset.Provider>
     )
}

export default InputResetProvider