'use client'

import {IconType} from "react-icons"

interface CustomButtonProps{
    label: string,
    disabled?: boolean,
    alternative?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps>= ({
    label,
    disabled,
    alternative,
    small,
    custom,
    icon: Icon,
    onClick,
}) => {

    const buttonClass = `
        custom-button 
        ${disabled ? 'disabled' : ''} 
        ${alternative ? 'alternative' : ''} 
        ${small ? 'small' : ''} 
        ${custom ? custom : ''} `;

    return ( 
        <button 
        onClick={onClick}
        disabled = {disabled} 
        className={buttonClass}
         >
            {Icon && <Icon size={24}/>}
            {label}
        </button>
    );
}
 
export default CustomButton;