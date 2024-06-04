import { useState ,useEffect} from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

async function sendContactData(contactDetail){
    const response =await fetch('/api/contact',{
        method :'POST',
        body : JSON.stringify(contactDetail),
        headers:{
            'Content-Type':'application/json',
        },
       });
       
       const data=await response.json();

       if(!response.ok){
        throw new Error(data.message || 'somthing went wrong');
       }
}
export default function ContactForm(){
       const [enteredEmail,setEnteredEmail] =useState('');
       const [enteredName,setEnteredName] =useState('');
       const [enteredMessage,setEnteredMessage] =useState('');
       const [requestStatus,setRequestStatus] =useState();
       const [requestError ,setRequestError]=useState();
      
       useEffect(()=>{
        if(requestStatus ==='error' || requestStatus === 'success'){
            const timer=setTimeout(()=>{
                setRequestStatus(null);
                setRequestError(null);
            },3000);
            return () => clearTimeout(timer)
        }
       },[requestStatus]);

       async function sendMessageHandler(event){
        event.preventDefault();
        // optional :client-side validation

        setRequestStatus('pending');

          try {
            await sendContactData({
                email :enteredEmail,
                name :enteredName,
                message:enteredMessage,
              }) ;
              setRequestStatus('success');
              setEnteredEmail(''),
              setEnteredMessage(''),
              setEnteredName('')
          } catch (error) {
            setRequestError(error.message)
            setRequestStatus('error');
          }
       } 
       let notification;
       if(requestStatus === 'pending'){
        notification ={
            status:'pending',
            title:'Sending message...',
            message:'loading',
        }
       }
       if(requestStatus === 'success'){
        notification ={
            status:'success',
            title:'message  sent...',
            message:'successfully sent to database',
        }
       }
       if(requestStatus === 'error'){
        notification ={
            status:'Error',
            title:'failed',
            message:requestError,
        }
       }
    return(
        <section className={classes.contact}>
            <h1>How can I help you !</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Enter Your Email</label>
                    <input type='email' id='email' required value={enteredEmail}
                    onChange={(event) =>setEnteredEmail(event.target.value)}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Enter Your Name</label>
                    <input type='text' id='name' required value={enteredName}
                    onChange={(event)=>setEnteredName(event.target.value)}/>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>your Message</label>
                <textarea id='message' rows='5' required
                value={enteredMessage} onChange={(event) => setEnteredMessage(event.target.value) } ></textarea>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {notification && <Notification title={notification.title} message={notification.message} status={notification.status} />}
        </section>
    );
}