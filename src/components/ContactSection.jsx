import React, { useRef, useState } from 'react'
import { forwardRef } from 'react'


const ContactSection = forwardRef((props,ref)=> {
const UseName=useRef();
const UseEmail=useRef();
const UseMass=useRef();
const [done,setDone]=useState();


const {setShowMassage}=props;

 const handleSubmit =(event)=>{
    event.preventDefault();
    const Name =UseName.current.value;
    setShowMassage(Name);
    
 
    setDone({
      title:"Done",
      color:'green',
      
    })
    
     setTimeout(() => setShowMassage(''), 10000);
     setTimeout(() => setDone(''), 1000);
     UseName.current.value="";
     UseEmail.current.value="";
     UseMass.current.value="";

 }



  return (
    <div className='Contact-section' ref={ref}>
      <div className="ContactBox">
        <h2>Contact here</h2>
        <form action="" className='form' onSubmit={handleSubmit}>
            <div className='Line'>
            <label htmlFor="" id='in-title' style={{top:'30px', left:'20px'}}>Name</label>
            <input type="Name" placeholder='Enter your name' ref={UseName}  />
            </div>
                <div className='Line'>
            <label htmlFor="" id='in-title' style={{top:'100px', left:'20px'}}>Email</label>
            <input type="Email" placeholder='Enter your email' ref={UseEmail}  />
            </div>
            <div className='Line'>
            <label htmlFor="" id='in-title' style={{top:'170px', left:'20px'}}>Message</label>
            <textarea type="text" placeholder='Enter your message' ref={UseMass}  />
            
            </div>
            <button type='submit' style={{backgroundColor:done?.color}}>{(done?.title === "Done")? (done.title): ("Send")}</button>
        </form>
      </div>
    </div>
  )
});

export default ContactSection;