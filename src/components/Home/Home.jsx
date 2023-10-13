import React from 'react'
import FormComponent from '../Form/FormComponent'
import './Home.css'

const Home = () => {
  

  // useEffect(()=>{
  //   const fetchData = JSON.parse(localStorage.getItem('Data'));
  //   if(fetchData.length!==0) setData(fetchData); 
  // })

  return (
    <div className='container'>
        <div className="wrap-nav">
          <img src='https://www.digitalpaani.com/wp-content/uploads/2023/10/DigitalPaani-Webiste.png' className='dplogo'/>
          
        </div>
        <FormComponent/>
    </div>
  )
}

export default Home