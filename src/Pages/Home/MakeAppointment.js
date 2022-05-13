import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5 py-3'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste officia et fugiat magnam dolore voluptatum corrupti, saepe, aperiam eaque quisquam qui sit, neque perferendis? Ea, ipsa sit magni doloribus beatae dicta suscipit iusto architecto deserunt necessitatibus, sapiente minus debitis magnam!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;