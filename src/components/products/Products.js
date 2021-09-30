import React from 'react'
import './products.scss'
import Gemstone from '../../assets/gemstone.png'

function Products() {
    return (
        <>
        <div className="container">
        <div className="card-container">
            <img src='https://imgcdn1.gempundit.com/media/wysiwyg/gemstones/ys-190611.png' alt=""/>
            <figcaption>Yellow Sapphire</figcaption>
        </div>
        <div className="card-container">
            <img src='https://imgcdn1.gempundit.com/media/wysiwyg/gemstones/bs-190529-2.png' alt=""/>
            <figcaption>Blue Sapphire</figcaption>
        </div>
        <div className="card-container">
            <img src='https://imgcdn1.gempundit.com/media/wysiwyg/gemstones/fo-190529-2.png' alt=""/>
            <figcaption>Opal</figcaption>
        </div>
        <div className="card-container">
            <img src='https://imgcdn1.gempundit.com/media/wysiwyg/gemstones/ru-190529-3.png' alt=""/>
            <figcaption>Ruby</figcaption>
        </div>
        </div>
        </>
    )
}

export default Products