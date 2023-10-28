import { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function NumberInput(
    {
        step = 1,
        placeholder = '',
        min = 0,
        max = Number.MAX_SAFE_INTEGER,
        type = 'number',
        className = '',
        isFocused = false,
        value,
        ...props
    },
    ref,
) {
    const currentRef = useRef();
    const input = ref ?? currentRef;
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    useEffect(() => {
        if (parseFloat(value) > max) {
            setInputValue(max);
        } else {
            setInputValue(value);
        }
    }, [value]);

    return (
        <input
            {...props}
            type={type}
            className={
                'mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-100 dark:text-dark-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            min={min}
            max={max}
            ref={input}
            step={step}
            placeholder={placeholder}
            value={inputValue}
        />
    );
});