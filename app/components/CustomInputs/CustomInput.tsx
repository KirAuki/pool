"use client"

import { FieldErrors,FieldError, FieldValues , UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    pattern?: RegExp;
    disabled: boolean;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors ;
    errorMessages: { [key: string]: string };
}

const CustomInput: React.FC<InputProps> = ({ 
    id,
    label,
    type,
    pattern,
    disabled,
    required,
    minLength,
    maxLength,
    register,
    errors,
    errorMessages
}) => {

    const validationRules = {
        required: 'Это поле обязательно',
        pattern: pattern && {
            value: pattern,
            message: errorMessages[id] || 'Неправильный формат'
        },
        minLength: minLength && {
            value: minLength,
            message: `Минимальная длина ${minLength} символов`
        },
        maxLength: maxLength && {
            value: maxLength,
            message: `Максимальная длина ${maxLength} символов`
        }
    };
    
    return <div className="custom-input custom-input--has-label">
        <label className="custom-input__label" htmlFor="id">{label}</label>
        <input 
        autoComplete="off"
        id={id}
        disabled={disabled}
        {...register(id, validationRules)}
        placeholder={label}
        type={type}
        pattern={pattern?.source}
        className={`
        custom-input__field 
        ${errors[id] ? 'errors' : ''}`}
        />
        {errors[id] && (
            <span className="custom-input__error">{errors[id]!.message?.toString()}</span>
        )}
    </div> 
}
 
export default CustomInput;