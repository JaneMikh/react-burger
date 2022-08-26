import React from "react";
import feedStyles from "./FeedImage.module.css";

export default function FeedImage({ data, arrLength, imageNumber }) {
    let count = arrLength - imageNumber;

    return (
        <>
            {imageNumber && (
                <>
                    <div className={count <= 5 ? feedStyles.image : feedStyles.image_inactive}>
                        <img 
                            src={ data.image } 
                            alt={ data.name } 
                            className={feedStyles.image__element} />
                        {count === 5 && (
                        <div className={feedStyles.cover}>
                            <div className={feedStyles.cover__box}>
                                <p className={`${feedStyles.cover__text} text text_type_main-default`}>
                                    {`+${arrLength - 6}`}
                                </p>
                            </div>
                        </div>
                        )}
                    </div>
                </>
            )}
            {!imageNumber && (
                <div className={feedStyles.image}>
                    <img 
                        src={ data.image } 
                        alt={ data.name } 
                        className={`${feedStyles.image__element}`} 
                    />
                </div>
            )}
        </>
        
    )

}