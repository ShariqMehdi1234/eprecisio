import React from "react";
import { Link } from "react-router-dom";


function BreadCrumbUI() {

  const BreadCrumbArray = ['Home','Instagram','Dashboard'];
  const BreadCrumbArrayLength = (BreadCrumbArray.length-1);

  return (
    <React.Fragment>
      <nav className='p-4 bg-white border-radius' aria-label='breadcrumb'>
        <ol className='breadcrumb m-0'>
            <i className="fa-solid fa-house i-active"></i>
          {
            BreadCrumbArray.map((data,index) =>
              <li key={index} className={index === BreadCrumbArrayLength? 'breadcrumb-item active': 'breadcrumb-item'}>
                <Link to='/' className={index === BreadCrumbArrayLength? 'breadcrumb-link-active': 'breadcrumb-link'}>{data}</Link>
              </li>
            )
          }
        </ol>
      </nav>
    </React.Fragment>
  );
}

export default BreadCrumbUI;
