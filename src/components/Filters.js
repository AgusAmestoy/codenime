import React from "react";


function Filter(){
    return(
        <div className="dropdown">
            <button className="button button-rounded dropdown-toggle" type="button" aria-extended="true"
            id="dropmenu1" data-toggle="dropdown">Dropdown Example</button>
            <ul className="dropdown-menu filter-menu" role="menu" aria-labelledby="dropmenu1">
                <li role="presentation" className="filter-input">
                    <input type="checkbox" name="GenderCheckbox" id="Checkbox1" value="Gender1"/>
                    <label for="Checkbox1">Gender1</label>
                </li>
            </ul>
        </div>
    )
}

export default Filter;