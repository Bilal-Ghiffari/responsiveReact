import useModalDom from 'helpers/Hooks/useModalDom';
import useScrollAnchor from 'helpers/Hooks/useScrollAnchor';
import useScrollToTop from 'helpers/Hooks/useScrollToTop';

export default function Documents({children}){
    useModalDom();
    useScrollAnchor();
    useScrollToTop();

    return children;
}