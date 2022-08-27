import React from "react";
import profStyles from './FeedProfile.module.css';
import FeedElement from "../FeedInfo/FeedElement/FeedElement";
import PropTypes from "prop-types";

export default function FeedProfile ({ data }) {
    return (
        <section className={`${profStyles.container} mt-10`}>
            <div className={profStyles.content}>
                <ul className={profStyles.list}>
                    {data !== null &&
                        [...data].reverse().map((item) => {
                            return <FeedElement item={ item } key={ item._id } profile={true} />
                        })
                    }
                </ul>
            </div>
        </section>
    );
}

FeedProfile.propTypes = {
    data: PropTypes.array,
}
