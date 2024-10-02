import React from 'react';

const Button = React.memo(({ onClick, className, children }) => {
return (
    <button onClick={onClick} className={`calculator-button ${className || ''}`}>
    {children}
    </button>
);
});

export default Button;