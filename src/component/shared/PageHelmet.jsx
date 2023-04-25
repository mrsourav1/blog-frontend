import React from 'react';
import { Helmet } from "react-helmet";

const PageHelmet = ({ pageTitle,description,keywords,canonical }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                (<title>{pageTitle}</title>)
                {/* <meta name="H&M Innovance LLP" content="IT Solution Company" /> */}
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={canonical}/>
                {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
            </Helmet>
        </>
    );
};

export default PageHelmet;

// "https://www.hminnovance.com/"