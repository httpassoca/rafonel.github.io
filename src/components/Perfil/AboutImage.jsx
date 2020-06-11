import React from "react";
import Link from './Link'
function AboutImg(){
    return(
        <div className="img-about">
            <div className="case">
                <img src="https://avatars1.githubusercontent.com/u/49541181?s=400&u=1d3e9615ed572998f591aa6ad664879e259a43bc&v=4" alt="" className="pic" />
                <div className="icons-perfil hide-on-900">
                    <Link href="https://www.behance.net/rafonel" icon="fab fa-behance" color="#0057ff"/>
                    <Link href="https://github.com/Rafonel" icon="fab fa-github" color="#55277e"/>
                    <Link href="https://www.linkedin.com/in/rafonel2511/" icon="fab fa-linkedin" color="#0077b5"/>
                    <Link href="https://instagram.com/ra_fon_el/" icon="fab fa-instagram" color="#DD2A7B"/>
                </div>
            </div>
            <div className="icons-perfil show-on-900">
                <Link href="https://www.behance.net/rafonel" icon="fab fa-behance" color="#4d89ff" phone="true"/>
                <Link href="https://github.com/Rafonel" icon="fab fa-github" color="#7c39b8" phone="true"/>
                <Link href="https://www.linkedin.com/in/rafonel2511/" icon="fab fa-linkedin" color="#02a9ff" phone="true"/>
                <Link href="https://instagram.com/ra_fon_el/" icon="fab fa-instagram" color="#e86ca4" phone="true"/>
            </div>
        </div>
    );
}

export default AboutImg;