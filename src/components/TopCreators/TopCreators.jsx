"use client"
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import './style.css'

const TopCreators = (props) => {
    const [emblaRef] = useEmblaCarousel()
    return (
        <div className='embla' ref={emblaRef}>
            <div className="embla__container">
                {props.data.map((item) => (
                    <div onClick={() => props.fun(item.slug, props.data)} className="embla__slider bg-func-50">
                        <img className='embla__slider__img'
                             src={item.img}
                             alt=""/>
                        <div className="embla__slider__bottom">
                            <img
                                src={item.imgname}
                                alt=""/>
                            <h1>{item.name}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCreators