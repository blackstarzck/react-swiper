import React from 'react';
import './About.css'

function About(props){
    // 전달받은 props를 확인 해보자.
    console.log(props)
    return(
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About;