import React from 'react';
import { Link } from "react-router-dom";


const Hamburgers = (props) => {
  return (<section className="hamburguers-showcase">
    <button><Link to="/hamburgers/gula">Gula</Link></button>
    <button><Link to="/hamburgers/malicia">Malicia</Link></button>
  </section>)
};


export default Hamburgers;