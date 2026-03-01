import Person from '../pictures/Persone.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import Winound from '../sound/winLvl.mp3'

import info from '../pictures/Info.png'
import ukata from '../pictures/ukata.png'
import kokoshnik from '../pictures/kokoshnik.png'
import klatch from '../pictures/klatch.png'
import puantu from '../pictures/puantu.png'
import kabluk from '../pictures/kabluk.png'
import hudi from '../pictures/hudi.png'

const QuizTwentyOne = () => {


const location = useLocation()  
const paths = location.pathname.split("/").filter(entry => entry !== "")
const lastPath = paths[paths.length - 1]
let [key, setKey] = useState(Number(lastPath));

if(key === Number(lastPath)){
  console.log(true)
}else{
  console.log(false)
  setKey(Number(lastPath))
  document.querySelector('.buttonInfo').style.display = 'none'
  const elements = document.querySelectorAll('.button')
  elements[0].style.background  = '#7d7e7be2'
  elements[1].style.background  = '#7d7e7be2'
  elements[2].style.background  = '#7d7e7be2'
  elements[3].style.background  = '#7d7e7be2'
}
  
  let navigate = useNavigate();
  if(localStorage.getItem('check')!== null){
    navigate('/0')
  }
  if(localStorage.getItem('checkBoss')!== null){
   navigate('/ErrorBoss')
}


const [play] = useSound(Winound);
function toBoss(){
    let emptyArray = new Array()
    let checkedArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
    for (let i = 0; i < localStorage.length; i++) {  
      const key = localStorage.key(i);   
      emptyArray.push(key)
    }  
      emptyArray.sort((a, b) => a - b)
    if(JSON.stringify(emptyArray) === JSON.stringify(checkedArray)){
      document.querySelector('.buttonToBoss').style.display = 'block'
    }      
}
const getToBoss = () =>{
  navigate('/toBoss')
}


const getTrue = () =>{
      play()
      document.querySelector('.ConnentOfPerson').innerHTML = "Правильно, следуй дальше"
      document.querySelector('.buttonInfo').style.display = 'block'
      localStorage.setItem(key, true)
      toBoss()
}

const checked_1 = () => {
  if(data.contents[key].answer.answer_1[1] === true){ 
    getTrue()  
    const elements = document.querySelectorAll('.button')
    elements[0].style.background = '#2adc2a'
   }else{
    localStorage.setItem('check', location.pathname.slice(1))
     navigate('/0')
   }
}
const checked_2 = () => {
  if(data.contents[key].answer.answer_2[1] === true) {
    getTrue()
    const elements = document.querySelectorAll('.button')
    elements[1].style.background = '#2adc2a'
   }else{
    localStorage.setItem('check', location.pathname.slice(1))
     navigate('/0')
   }
}
const checked_3 = () => {
   if(data.contents[key].answer.answer_3[1] === true) {
      getTrue()
      const elements = document.querySelectorAll('.button')
      elements[2].style.background = '#2adc2a'
    }else{
      localStorage.setItem('check', location.pathname.slice(1))
     navigate('/0')
    }
}
const checked_4 = () => {
  if(data.contents[key].answer.answer_4[1] === true) {
      getTrue()
      const elements = document.querySelectorAll('.button')
      elements[3].style.background = '#2adc2a'
    }else{
      localStorage.setItem('check', location.pathname.slice(1))
     navigate('/0')
    }
  }
  const getInfo = () => {
      const element = document.querySelector('.infoText').style.display
      if(element === 'none' || element ===''){
        document.querySelector('.infoText').style.display = 'block'
      } else {
        document.querySelector('.infoText').style.display = 'none'
      }    
  }


function getimg(){
  if(key===9){
    return <img className="imgCashew" src={ukata} alt="ukata"/>
  }
  if(key===15){
    return <img className="imgCashew" src={kokoshnik} alt="kokoshnik"/>
  }
  if(key===18){
    return <img className="imgCashew" src={klatch} alt="klatch"/>
  }
  if(key===21){
    return <img className="imgCashew" src={puantu} alt="puantu"/>
  }
  if(key===24){
    return <img className="imgCashew" src={kabluk} alt="kabluk"/>
  }
  if(key===30){
    return <img className="imgCashew" src={hudi} alt="hudi"/>
  }
} 
 const getProgress = () => {
     for (let i = 0; i < localStorage.length; i++) {  
      const key = localStorage.key(i);  
      const value = localStorage.getItem(key);  
      document.querySelectorAll(".textProgress")[key-1].style.backgroundColor  = '#2adc2a'
    }  
    const elementOne = document.querySelector('.textProgressDisplay').style.display
    if(elementOne === 'none' || elementOne ===''){
        document.querySelector('.textProgressDisplay').style.display = 'block'
      } else {
        document.querySelector('.textProgressDisplay').style.display = 'none'
      }
  }
  


  return (
  <div className="App">
  <main>
  <button onClick={getProgress} className='buttonProgress'>Прогресс</button>
  <div className='textProgressDisplay'>
    <p className='textProgress'>1</p>
    <p className='textProgress'>2</p>
    <p className='textProgress'>3</p>
    <p className='textProgress'>4</p>
    <p className='textProgress'>5</p>
    <p className='textProgress'>6</p>
    <p className='textProgress'>7</p>
    <p className='textProgress'>8</p>
    <p className='textProgress'>9</p>
    <p className='textProgress'>10</p>
    <p className='textProgress'>11</p>
    <p className='textProgress'>12</p>
    <p className='textProgress'>13</p>
    <p className='textProgress'>14</p>
    <p className='textProgress'>15</p>
    <p className='textProgress'>16</p>
    <p className='textProgress'>17</p>
    <p className='textProgress'>18</p>
    <p className='textProgress'>19</p>
    <p className='textProgress'>20</p>
    <p className='textProgress'>21</p>
    <p className='textProgress'>22</p>
    <p className='textProgress'>23</p>
    <p className='textProgress'>24</p>
    <p className='textProgress'>25</p>
    <p className='textProgress'>26</p>
    <p className='textProgress'>27</p>
    <p className='textProgress'>28</p>
    <p className='textProgress'>29</p>
    <p className='textProgress'>30</p>
  </div>
  <div className="header">
    <div className="TextOfPerson">
      <p className="ConnentOfPerson">{data.contents[key].textPerson}</p>
    </div>
    <img className="Person" src={Person} alt="Person"/>
    
  </div>
  <button onClick={getToBoss} className='buttonToBoss'>Шипастая роза</button>
      <div className='buttons__content'>        
        <button onClick={getInfo} className='buttonInfo'>
          <div className='wrapImgText'>
            <div className='infoText'>
                <p className='ConnentOfinfoText'>{data.contents[key].why}</p>  
            </div>
            {/* <img className="imgMacaron" src={macaron} alt="macaron"/> */}
            {/* <img className="imgUbileinoe" src={ubileinoe} alt="ubileinoe"/> */}
            {/* <img className="imgOsobuy" src={osobuy} alt="osobuy"/> */}
          </div>
        <img className="info" src={info} alt="info"/> 
        </button> 
        {getimg()}
        <button onClick={checked_1} className="button">{data.contents[key].answer.answer_1[0]}</button>
				<button onClick={checked_2} className="button">{data.contents[key].answer.answer_2[0]}</button>
				<button onClick={checked_3} className="button">{data.contents[key].answer.answer_3[0]}</button>
				<button onClick={checked_4} className="button">{data.contents[key].answer.answer_4[0]}</button>
      </div>
  </main>
  </div>
  )
}
export default QuizTwentyOne