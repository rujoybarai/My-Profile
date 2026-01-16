import React, { useState } from 'react'
import ProfileLink from './ProfileLink'



export default function ProfileDetails({ShowMassage}) {

  


  return (
    <div className="profile-detail">
        <h1>Rujoy Barai</h1>
        <p>Frontend Developer</p>


        <ProfileLink />
        {ShowMassage && <span style={{margin:'10px 0px',
                     backgroundColor:"green",
                     padding:'0px 5px'

        }}>Thank you for contacting me ! {ShowMassage} </span>     }
        
    </div>
  )
}
