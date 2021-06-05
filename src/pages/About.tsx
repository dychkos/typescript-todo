import React from "react";
import {useHistory} from "react-router-dom";

const About : React.FC = () =>{
    const history = useHistory();
    return(
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam magni voluptatibus ut suscipit reiciendis molestias ullam nisi a repellendus.</p>
            <button onClick={()=>history.push('/')} className="btn">Обратно к списку дел</button>
        </>
    )
}

export default About;
