import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
      <div className={s.content}>
        <div>
          <img src='C:\mydev\projects\snet\public\square.png'/>
        </div>
        <div>
          ava+description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className={s.posts}>
              <div className={s.item}>
                post 1
              </div>
              <div className={s.item}>
                post 2
              </div>
              <div className={s.item}>
                post 3
              </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;