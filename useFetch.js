import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        // Volver al estado inicial al darle clic al botón de siguiente o anterior
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }
                }, 1000);
            });

        console.log(state);
    }, [url]);

    return state;
}

export default useFetch;