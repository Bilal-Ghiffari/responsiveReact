import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Breadcrumb({list}) {
    return (
    <section class="bg-gray-100 py-8 px-4">
        <div class="container mx-auto">
            <ul class="breadcrumb">
                {
                    list?.map?.((item, index) => {
                        const arias = index === list?.lenght ? {"aria-label": "current-page"} : {}
                        return (
                        <li key={item.url}>
                            <Link to={item.url} {...arias}>{item.name}</Link>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
    )
}

Breadcrumb.prototype = {
    list: propTypes.array.isRequired
}
