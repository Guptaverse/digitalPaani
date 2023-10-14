import React from 'react'
import FormComponent from '../Form/FormComponent'
import './Home.css'

const Home = () => {


  return (
    <div className='container'>
      
        <div className="wrap-nav">
          <img src='https://www.digitalpaani.com/wp-content/uploads/2023/10/DigitalPaani-Webiste.png' alt='brand' className='dplogo'/>
          
        </div>
        <FormComponent/>
    </div>
  )
}

export default Home