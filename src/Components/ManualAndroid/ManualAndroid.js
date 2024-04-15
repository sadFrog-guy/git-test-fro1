import React from 'react'
import step1 from '../../Assets/step1.jpg';
import step2 from '../../Assets/step2.jpg';
import step3 from '../../Assets/step3.jpg';

export default function ManualAndroid({ active, setActive }) {
  return (
    <div className="modal" style={active ? {} : {display: 'none'}}>
        <div className='modal-bg' onClick={() => setActive(false)}/>

        <div className='modal-inner'>
        <p className='modal-step'>
            1. Нажмите на три точки в правом верхнем углу вашего браузера
        </p>
        <img src={step1} alt="first-step"/>
        <p className='modal-step'>
            2. В появившемся меню нажмите кнопку "Установить приложение"
        </p>
        <img src={step2} alt="second-step"/>
        <p className='modal-step'>
            3. В появившемся окне нажмите кнопку "Установить"
        </p>
        <img src={step3} alt="third-step"/>
        </div>
    </div>
  )
}
