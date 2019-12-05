import React from 'react';
import s from './Profile.module.css'
import MyPosts from '../Posts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src=' '/>
            </div>
            <div>
                description
            </div>

            <MyPosts/>

        </div>
    )
}

export default Profile;