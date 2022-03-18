import React, {SetStateAction} from 'react';

const defaultValue: {
    theme: string,
    setTheme: React.Dispatch<SetStateAction<string>>
} = {theme: 'light', setTheme: () => {}};

const ThemeContext = React.createContext(defaultValue);

export default ThemeContext;
