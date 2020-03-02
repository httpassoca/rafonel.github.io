import React, {useState} from 'react'

function Link(obj){
    const [Hover, setHover] = useState(false);
    let phone = obj.phone 
    return(
        <a href={obj.href} rel="noopener noreferrer" target="_blank">
            <i onMouseOver={() => {setHover(true)}} onMouseOut={()=>setHover(false)} style={phone ? {color: obj.color} : (Hover ? {color:obj.color} : null)} className={obj.icon}></i>
        </a>

    );
}
export default Link;