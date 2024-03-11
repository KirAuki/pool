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


    return ( 
        <button 
        onClick={onClick}
        disabled = {disabled} 
        className={`
        custom-button 
        ${alternative ? 'alternative' : ''} 
        ${small ? 'small' : ''} 
        ${custom ? custom : ''} `}
         >
            {Icon && <Icon size={24}/>}
            {label}
        </button>
    );
}
 
export default CustomButton;