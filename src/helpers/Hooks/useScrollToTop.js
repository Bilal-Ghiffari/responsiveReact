import { useHistory } from 'react-router-dom';
import { useLayoutEffect } from 'react';


export default function useScrollToTop() {
    const history = useHistory();
    console.log(history)
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [history.location.key])
}
