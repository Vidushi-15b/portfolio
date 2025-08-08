import React, { useRef, useState } from 'react'
import TitleHeader from './TitleHeader'
import ContactExperience from '../components/ContactExperience';
import emailjs from '@emailjs/browser'

const ContactSection = () => {
    const formRef= useRef(null)
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
    const [loading,setloading]=useState(false);
    const handleChange = (e) =>{
        const {name , value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });

    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to an API or email service
        setloading(true)
        try{
        await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        )
        setFormData({ name: "", email: "", message: "" });
        }
        catch(error){
         console.error('EMAILJS Error',error);
        }finally{
            setloading(false);
        }

    };

  return (
    <section id="contact" className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="Get in Touch"
            sub="📫 Let's Connect"
            />
            <div className='mt-16  grid-12-cols'>
                <div className='xl:col-span-5 '>
                    <div className='flex-center card-border rounded-xl p-10'>
                    <form onSubmit={handleSubmit} ref={formRef} className='w-full flex flex-col gap-7'>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input 
                                type='text' 
                                id='name' 
                                name='name' 
                                placeholder='Name'
                                value={formData.name} 
                                onChange={handleChange} 
                                required
                                />
                                </div>
                                <div >
                                <label htmlFor='email'>Email-Id</label>
                                <input
                                 type='email' 
                                 id='email' 
                                 name='email' 
                                 placeholder='Email-Address'
                                 value={formData.email} 
                                 onChange={handleChange} 
                                 required
                                />
                                </div>
                                 <div>
                                <label htmlFor='message'>Message</label>
                                <textarea
                                 type='text' 
                                 id='message' 
                                 rows={5}
                                 name='message' 
                                 placeholder='Message'
                                 value={formData.message} 
                                 onChange={handleChange} 
                                 required
                                ></textarea>
                                </div>
                                <button type='submit' className='w-full cta-button' disabled={loading}>
                                    <div className='bg-circle'/>
                                    <p className='text'>{loading?'Sending':'Send Message'}</p>
                                    <div className='arrow-wrapper'>
                                    <img src="/images/arrow-down.svg" alt="arrow"/>
                                    </div>
                                   </button>
                                   
                    </form>
                    </div>
                </div>
                <div className='xl:col-span-7 min-h-96'>
                    <div className='w-full h-full bg-[#4b1333] hover:cursor-grab rounded-4xl overflow-hidden'>
                    <ContactExperience/>
                    </div>
           

          </div>
            </div>

        
            

        </div>
      
    </section>
  )
}

export default ContactSection
