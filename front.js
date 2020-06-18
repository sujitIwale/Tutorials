import React from 'react';

const Front = ({course,status}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLakB5D2PY4-eKXFLOcI2kRc6H60Utj-ef_pddl_khfSbXLm3i&usqp=CAU' alt='course' />
            <div>
           <a href='#' ><h3>{course}</h3> </a>
            <p>{status}</p>
            </div>
        </div>
            
        
    );
}

export default Front;