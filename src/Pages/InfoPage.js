import React from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'
import ImageOfMap from '../Components/ImageOfMap/ImageOfMap'
import Street from '../Components/Streets/Street'
import Button from '../Components/MyButton/Button'

export default function InfoPage() {
  return (
    <>
        <ImageOfBus/>
        <p className='heading-info'>Маршрут <span style={{color: '#80BCBD'}}>107</span></p>
        <ImageOfMap/>
        <div className='streets'>
          <Street>⦿ ул. Пушкина</Street>
          <Street>⦿ ул. Пушкина</Street>
          <p className="arrow">🡣</p>
          <p className="arrow">🡣</p>
          <Street>⦿ ул. Пушкина</Street>
          <Street>⦿ ул. Пушкина</Street>
          <p className="arrow">🡣</p>
          <p className="arrow">🡣</p>
          <Street>⦿ ул. Пушкина</Street>
          <Street>⦿ ул. Пушкина</Street>
          <p className="arrow">🡣</p>
          <p className="arrow">🡣</p>
          <Street>⦿ ул. Пушкина</Street>
          <Street>⦿ ул. Пушкина</Street>
        </div>
        <div className='texts'>
          <p className="text">Конечная остановка:</p>
          <p className="text-2">ул. Варшава 105</p>
        </div>
        <Button>Назад</Button>
    </>
  )
}
