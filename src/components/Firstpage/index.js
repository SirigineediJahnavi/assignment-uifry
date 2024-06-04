// src/components/Header.js
import React from 'react';
import './index.css'
import Premium from '../Premium'

const premiumList=[
    {
        id:1,
        head:"budgeting intervals",
        imageUrl:"star-05.png",
        text:"Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",

    },
    {id:2,
        head:"budgeting intervals",
        imageUrl:"cube-02.png",
        text:"Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    },
    {id:3,
        head:"budgeting intervals",
        imageUrl:"cube-04.png",
        text:"Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor."
    }

]
const Firstpage = () => {
  return (
    <div className="firstpage">
      <div>
        <img src="firstmobile.jpg" alt="firstimage" className="firstpageimage"/>
      </div>
      <div className="second-first">
        <p className="feature">
            FEATURES
        </p>
        <h1 className="premiumtext">
            Uifry Premium
        </h1>
        {premiumList.map(each=>(<Premium id={each.id} content={each}/>))}
      </div>
    </div>
  );
};

export default Firstpage;
