import React from 'react'
import './ToTopButton.css'
import{FiChevronUp} from "react-icons/fi";

const ToTopButton = ({toggle}) => {
    window.addEventListener("scroll", () => {
        if(window.pageYOffset>100){
            document.getElementById("myBtn").classList.add("active");
        } else {
            document.getElementById("myBtn").classList.remove("active");
        }

    })

    function ToTopFunction(){
        console.log('sup');
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <FiChevronUp id="myBtn" class="totop" onClick={() => ToTopFunction()}/>
    )
}

export default ToTopButton