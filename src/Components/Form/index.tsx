import React, { CSSProperties, RefObject } from 'react';

interface FormProps<T = any> {
    children: React.ReactNode;
    onFinish: (formData: T) => void;
    className?: string;
    refObject?: RefObject<HTMLFormElement>;
    style?: CSSProperties;
}

const Form = ({ children, onFinish, className, refObject, style }: FormProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget).entries();

        onFinish(Object.fromEntries(formData));
    };

    return (<form ref={refObject} className={className} style={style} onSubmit={handleSubmit}>{children}</form>);
};

export default Form;
