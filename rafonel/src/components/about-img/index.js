import React, {useState} from "react";
import Link from './Link'
function AboutImg(){
    // let Hover = useState()

    function IconHover(x){
        console.log(x)
        x.style.color = x.getAttribute('color');
    }
    return(
        <div className="img-about">
            <div className="case">
                <img src="https://raw.githubusercontent.com/Rafonel/rafonel.github.io/master/img/passoca.jpg" alt="" className="pic" />
                <div className="icons-perfil hide-on-900">
                    <Link href="https://www.behance.net/rafonel" icon="fab fa-behance" color="#0057ff"/>
                    <Link href="https://github.com/Rafonel" icon="fab fa-github" color="#55277e"/>
                    <Link href="https://www.linkedin.com/in/rafonel2511/" icon="fab fa-linkedin" color="#0077b5"/>
                    <Link href="https://instagram.com/ra_fon_el/" icon="fab fa-instagram" color="#DD2A7B"/>
                </div>
            </div>
            <div className="icons-perfil show-on-900">
                <Link href="https://www.behance.net/rafonel" icon="fab fa-behance" color="#0057ff"/>
                <Link href="https://github.com/Rafonel" icon="fab fa-github" color="#55277e"/>
                <Link href="https://www.linkedin.com/in/rafonel2511/" icon="fab fa-linkedin" color="#0077b5"/>
                <Link href="https://instagram.com/ra_fon_el/" icon="fab fa-instagram" color="#DD2A7B"/>
            </div>
        </div>
    );
}

export default AboutImg;