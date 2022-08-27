import React from "react";
import feedStyles from "./FeedImage.module.css";
import PropTypes from "prop-types"

export default function FeedImage({ data, imageNumber, arrLength  }) {
   
    let count = arrLength - imageNumber;

    return (
        <>
            {!imageNumber && (
                <div className={feedStyles.image}>
                    <img 
                        src={ data.image } 
                        alt={ data.name } 
                        className={feedStyles.image__element} 
                    />
                </div>
            )}
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
        </>   
    );
}

FeedImage.propTypes = {
    data: PropTypes.object.isRequired,
    imageNumber: PropTypes.number,
    arrLength: PropTypes.number,
}