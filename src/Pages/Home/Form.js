import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Form = () => {
    return (
        <div style={{
            background: `url(${appointment})`,
            height: '500px'
        }}>
            <div className='text-center py-3'>
                <h5 className='text-primary font-bold'>Contact Us</h5>
                <h2 className='text-white text-3xl'>Stay connected with us</h2>
            </div>
            <form className='text-center'>
                <input className='p-3 w-1/3 rounded-lg' type="email" name="email" id="" placeholder='Email Address' />
                <br /> <br />
                <input className='p-3 w-1/3 rounded-lg' type="text" placeholder='Subject' />
                <br /> <br />
                <textarea className='p-3 w-1/3 rounded-lg mb-5' placeholder='Your message' name="message" id="" rows="5"></textarea>
                <br />
                <PrimaryButton>Submit</PrimaryButton>
            </form>

        </div>
    );
};

export default Form;