import React from 'react'
import step4 from '../../Assets/step4.jpg';
import step5 from '../../Assets/step5.jpg';
import step6 from '../../Assets/step6.jpg';

export default function ManualIOS({ active, setActive }) {
  return (
    <div className="modal" style={active ? {} : {display: 'none'}}>
        <div className='modal-bg' onClick={() => setActive(false)}/>

        <div className='modal-inner' style={{ overflowY: 'scroll', height: '350px', justifyContent: 'flex-start' }}>
            <p className='modal-step'>
                1. Нажмите на кнопку "Поделиться" в нижней части экрана
            </p>
            <img src={step4} alt="first-step"/>
            <p className='modal-step'>
                2. В появившемся окне опуститесь вниз
            </p>
            <img src={step5} alt="second-step"/>
            <p className='modal-step'>
                3. Нажмите на кнопку "На экран «Домой»"
            </p>
            <img src={step6} alt="third-step"/>
        </div>
    </div>
  )
}
