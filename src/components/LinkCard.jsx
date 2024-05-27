import React from 'react';

function LinkCard(props) {
    return (
        <>
            <a href={props.link} className='w-full h-[60px] max-w-[647px] rounded-lg border-white border-[0.5px] flex flex-row items-center pl-5 pr-5 space-x-5 transition ease-in-out delay-150 hover:bg-indigo-500 duration-300 hover:transition-transform'
                style={{...props.style}}
            >
                {props.svg}
                <h1 className='text-white text-[1.3rem] font-light pt-1' style={{fontFamily: 'Josefin Sans'}}>{props.name}</h1>
            </a>
        </>
    );
}

export default LinkCard;