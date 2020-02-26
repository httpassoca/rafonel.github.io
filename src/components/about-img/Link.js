import React, {useState} from 'react'

function Link(obj){
    const [Hover, setHover] = useState(false);
    return(
        <a href={obj.href} rel="noopener noreferrer" target="_blank">
            <i onMouseOver={() => {setHover(true)}} onMouseOut={()=>setHover(false)} style={Hover ? {color:obj.color} : null } className={obj.icon}></i>
        </a>

    );
}
export default Link;