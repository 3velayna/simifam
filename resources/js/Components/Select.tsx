import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    SelectHTMLAttributes,
} from "react";

type SelectValue = string | number;
type SelectOptions = Array<SelectValue> | Record<SelectValue, SelectValue>;

export default forwardRef(function Select(
    {
        className = "",
        isFocused = false,
        options = [],
        children = null,
        ...props
    }: SelectHTMLAttributes<HTMLSelectElement> & {
        isFocused?: boolean;
        options?: SelectOptions;
    },
    ref,
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    const normalizedOptions = Array.isArray(options)
        ? Object.fromEntries(options.map((value) => [value, value]))
        : options;

    return (
        <select
            {...props}
            className={
                "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm " +
                className
            }
            ref={localRef}
        >
            {children ??
                Object.entries(normalizedOptions).map(([key, value]) => (
                    <option value={key} key={key}>
                        {value}
                    </option>
                ))}
        </select>
    );
});
