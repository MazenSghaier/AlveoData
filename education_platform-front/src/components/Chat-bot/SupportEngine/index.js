import React , {useState, useRef, useEffect} from "react";

import Avatar from "./Avatar"
import SupportWindow from "./SupportWindow";

const SupportEngine = () => {
    const ref =useRef(null)
    const [visible , setVisible] = useState(false)
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setVisible(false)
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);

    return (
        <div ref={ref}>

            <SupportWindow visible={visible} />
            <Avatar 
            onClick={()=>setVisible(true)}
            style={{ 
                position:"fixed" ,
                bottom:"24px" , 
                right:"24px"
                }}
            />
        
        </div>
    )
}

export default SupportEngine;

