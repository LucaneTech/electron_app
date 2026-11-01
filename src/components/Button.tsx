import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export  const Button = ({ label, onClick }: ButtonProps) => {
    return (
        <>
        <button onClick={onClick} className="bg-blue-500 duration-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {label}
        </button>
        </>
    )
}
