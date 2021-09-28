import * as React from 'react';
import { Page, Rectangle, Text } from 'react-figma';
export const App = () => {
    return (React.createElement(Page, { isCurrent: true, name: "Page X" },
        React.createElement(Text, { characters: "Hello, react-figma!!" }),
        React.createElement(Rectangle, { style: { width: 200, height: 100, backgroundColor: '#0ddd25' } }),
        React.createElement(Rectangle, { style: { width: 200, height: 100, backgroundColor: '#a6dd00' } })));
};
