import React, {useRef} from 'react';
import Cookie from '../assets/cookie.png';


function Cookie3() {
    const imageRef = useRef();
    
    const spinCookie = () => {
        imageRef.current.classList.add("spin-animation");
    };

    return (
        <div>
            <img
                ref={imageRef}
                src={Cookie}
                alt="cookie"
                onClick={spinCookie}
            />
        </div>
    );
};

export default Cookie3;