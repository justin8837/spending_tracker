import React from "react";
import FeatherIcon from "feather-icons-react";


const FilterCard = ({ name, icon, size, active }) => {
    return (
        <div className={`filterCard ${active ?? ""} `} >
            <div className="d-flex">
                <p className="small">{name}</p>
                {icon ?
                    <FeatherIcon icon={icon} className="ml-auto" size={size} /> : ""}
            </div >
        </div >
    )
}

export default FilterCard;