import React from 'react';
import Header from '../../component/Header/Header';
import Section1 from '../../component/landing-section1/Section1';
import Section2 from '../../component/landing-section2/Section2';

function Landing(){
    return (
       <React.Fragment>
           <Header/>
           <Section1/>
           <Section2/>
       </React.Fragment>
    )
}

export default Landing;