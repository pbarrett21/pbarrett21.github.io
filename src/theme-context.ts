import React, {SetStateAction} from 'react';

const defaultValue: {
    theme: string,
    setTheme: React.Dispatch<SetStateAction<string>>
} = {theme: 'dark', setTheme: () => {}};

const ThemeContext = React.createContext(defaultValue);

export default ThemeContext;
