import React from "react";

export default function useLocalStorage(key,initial=' ' ) {
    const [value, setvalue] = React.useState(() => localStorage.getItem(key) || initial)
    React.useEffect(() => {
        localStorage.setItem(key, value)

    }, [value])
    return [value, setvalue ]
}