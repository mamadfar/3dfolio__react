import React, {ChangeEvent, FC, HTMLInputTypeAttribute} from 'react';

interface IInputProps {
    name: string;
    label: string;
    value: string;
    placeholder: string;
    type?: HTMLInputTypeAttribute;
    isTextArea?: boolean;
    onChange: (e: ChangeEvent<any>) => void;
}

const Input: FC<IInputProps> = ({name, label, value, placeholder, type, isTextArea = false, onChange}) => {
    return (
        <label htmlFor={name} className="flex flex-col">
            <span className="text-white font-medium mb-4">{label}</span>
            {isTextArea ? (
                <textarea
                    rows={7} name={name} value={value} onChange={onChange}
                    placeholder={placeholder}
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"></textarea>
            ) : (
                <input
                    type={type} name={name} value={value} onChange={onChange}
                    placeholder={placeholder}
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"/>
            )}
        </label>
    );
};

export default Input;
