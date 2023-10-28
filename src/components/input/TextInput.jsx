import {useEffect, useRef, forwardRef} from 'react';

export default forwardRef(function TextInput(
    {type = 'text', className = '', accept, isFocused = false, ...props},
    // eslint-disable-next-line no-unused-vars
    ref,
) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={
                'mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            accept={accept}
            ref={input}
        />
    );
});
