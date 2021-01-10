import React from 'react';
import './descriptionPage.scss'

const DescriptionPage = () => {
    let art=Array(32).fill(2)
    console.log(art)
    return (

        <div className="archive">
            {art.map((_,i)=>(<article key={i} className="article">
                {i+1}
            </article>))}


        </div>

    );
};

export default DescriptionPage;