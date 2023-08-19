import React from 'react';
import { Link} from "react-router-dom";

function Navbar() {

  return (
    <div>
      <div className="nav">
        <div className="log"></div>
        <div className="items">
            <Link to={"/"} className='link'>Home</Link>
            <Link to={"/about"} className='link'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
