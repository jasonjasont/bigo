import React from "react";
import './starsComponent.css'

interface StrarsProperties {
    level:Number
}

export function StarsComponent(props:StrarsProperties) {

    function selected(index: number) {
        return index <= props.level ? ' Star-selected'  :''
    }

    return <div className="Stars">
        <div className={'Star-round' + selected(1)}></div>
        <div className={'Star-round' + selected(2)}></div>
        <div className={'Star-round' + selected(3)}></div>
        <div className={'Star-round' + selected(4)}></div>
        <div className={'Star-round' + selected(5)}></div>
    </div>;

}

