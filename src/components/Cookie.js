import React, {useRef} from 'react';

const Cookie = () => {
    const imageRef = useRef();
    
    const spinCookie = () => {
        imageRef.current.classList.add("spin-animation");
    };

    return (
        <div>
            <img
                ref={imageRef}
                src="cookie.png"
                alt="cookie"
                onClick={spinCookie}
            />
        </div>
    );
};

export default Cookie;