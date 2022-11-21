import React from "react";

const FilterComponent = ({ filterText, onFilter, filterTextclick }) => (
  <>
    <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12 container-fuild-margin'>
            <label htmlFor='exampleFormControlInput1' className='form-label font-size'>Search</label>
            <div className='input-group'>
                <span className='input-group-text span-input' id='search'><i className='fa-solid fa-magnifying-glass'></i></span>
                <input type='text' className='form-control text-input border-radius' id='search' value={filterText} onChange={onFilter} name='search' placeholder='Search' />
                <button className='import-button border-radius' onClick={filterTextclick}>Search</button>
            </div>
        </div>
    </div>
  </>
);

export default FilterComponent;
