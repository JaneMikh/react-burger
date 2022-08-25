import React from "react";
import profStyles from './profile.module.css';
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import FeedInfo from "../../components/FeedInfo/FeedInfo";

export default function Profile () {
    return (
        <>
            <section className={profStyles.page}>
                <div className={profStyles.main}>
                    <ProfileMenu />
                    {/*<ProfileInfo />*/}
                    <section className={`${profStyles.container} mt-10`}>
                        <div className={profStyles.content}>
                            <FeedInfo/>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}