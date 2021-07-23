// My React.Component
import React,{useEffect} from 'react'; 
import { useParams } from 'react-router-dom';
import fetch from 'helpers/Fetch';
import useAsnyc from 'helpers/Hooks/useAsnyc';
import Documents from 'parts/Document';

// My Component DetailsPage
import Header from 'parts/Header';
import Breadcrumb from 'componets/Breadcrumb';
import Detailspage from 'parts/Details/Productdetails';
import Suggestion from 'parts/Details/Suggestion';
import Asidemenu from 'parts/Asidemenu';
import Footer from 'parts/Footer';

// Loading/Skeleton
import LoadingProductsDetails from 'helpers/Loading/SkeletonProductsDetails';
import LoadingSuggestion from 'helpers/Loading/SkeletonSuggestion';
import PageErrorMessage from 'parts/Pageerrormessage';


export default function DetailsPage() {

    const {idp} = useParams();
    const {data, run, error, isLoading, isError} = useAsnyc();

    useEffect(() => { 
        run(fetch({url: `/api/products/${idp}`}))
    },[run, idp]);

    const DetailsProducts = () => {
        return  isLoading ? <LoadingProductsDetails /> : <Detailspage data={data} /> 
    };

    const Suggestions = () => {
        return  isLoading ? <LoadingSuggestion /> : <Suggestion data={data.relatedProducts} /> 
    };

    return (
        <Documents>
            <Header position="details" />
            <Breadcrumb list={[
                {url: "/", name: "Home"},
                {url: "/categories/91231", name: "office Room"},
                {url: "/categories/91231/products/7888", name: "Details"}
            ]} />

            {
                isError ? <PageErrorMessage title="Product Not Found" body={error.errors.message} /> :
                <>
                    <DetailsProducts />
                    <Suggestions />
                </>
            }
            <Asidemenu />
            <Footer />
        </Documents>
    )
}