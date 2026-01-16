import React from 'react'
import ProfilePic from './ProfilePic'
import ProfileDetails from './ProfileDetails'

export default function Profile({ShowMassage}) {
  return (
    <div className="profile">

        <div className="profile-card">
            <ProfilePic />
            <ProfileDetails  ShowMassage={ShowMassage}/>

          

        </div>

    </div>
  )
}
