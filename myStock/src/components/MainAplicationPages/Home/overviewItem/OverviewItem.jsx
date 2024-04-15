import "./OverviewItem.css"
import React from "react"

const OverviewItem = ({ img, title, count, value }) => {
    return (
        <div className="item-overview" >
            <div className="sup-area-card">
                <img className="img-item-card" src={img} alt="" />
                <div className="desc-item-card">
                    <h3 className="title-item-overview">{title}</h3>
                    <span className="info-item-overview">{count}</span>
                    <span className="info-item-overview">R$ {value},00</span>
                </div>
            </div>
        </div>
    );
}

export default OverviewItem;