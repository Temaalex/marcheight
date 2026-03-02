import Person from '../pictures/Persone.png';
import data from '../bd.json';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom"
import useSound from 'use-sound'; 
import win from '../sound/winLvl.mp3'
import info from '../pictures/Info.png'

import gladiolus from '../pictures/gladiolus.png';
import podsnegnik from '../pictures/podsnegnik.png';
import romashka from '../pictures/romashka.png';
import roza from '../pictures/roza.png';
import orhidea from '../pictures/orhidea.png';
import pion from '../pictures/pion.png';
import tulpan from '../pictures/tulpan.png';
import mac from '../pictures/mac.png';
import hrizantema from '../pictures/hrizantema.png';
import podsolnuh from '../pictures/podsolnuh.png';
import gvozdika from '../pictures/gvozdika.png';
import oduvanhik from '../pictures/oduvanhik.png';
import margaritka from '../pictures/margaritka.png';
import kuvshinka from '../pictures/kuvshinka.png';
import lutik from '../pictures/lutik.png';
import lilia from '../pictures/lilia.png';
import gerbera from '../pictures/gerbera.png';
import gortenzia from '../pictures/gortenzia.png';
import vasilok from '../pictures/vasilok.png';
import petunia from '../pictures/petunia.png';

import sarafun from '../pictures/sarafun.png'
import sary from '../pictures/sary.png'

const QuizText = () => {



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
  document.querySelector('.inputAppWords').style.backgroundColor = '#ffffff'
  document.querySelector('.inputAppWords').value = ''
}
let navigate = useNavigate();
const [play] = useSound(win);
if(localStorage.getItem('check')!== null){
    navigate('/0')
  }
if(localStorage.getItem('checkBoss')!== null){
   navigate('/ErrorBoss')
}

function toBoss(){
    let emptyArray = new Array()
    let checkedArray = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"]
    for (let i = 0; i < localStorage.length; i++) {  
      const key = localStorage.key(i);  
      const value = localStorage.getItem(key);  
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

const checked = () => {
  let answer = data.contents[key].answer;
  let answerOne = data.contents[key].answer[0]
  let answerTwo = data.contents[key].answer[1]
  let check = document.querySelector('.inputAppWords')?.value.replace(/\s/g, "");
  if(check.toLowerCase() === answer ||
     check.toLowerCase() === answerOne ||
     check.toLowerCase() === answerTwo
    ) {
    localStorage.setItem(key, true)
    document.querySelector('.inputAppWords').style.backgroundColor = '#2adc2a'
    document.querySelector('.ConnentOfPerson').innerHTML = "Правильно, следуй дальше"
    document.querySelector('.buttonInfo').style.display = 'block'
    play()
    toBoss()
   }else{
     localStorage.setItem('check', location.pathname.slice(1))
     navigate('/0')
   }
}
function getimg(){
  if(key===1){
    return <img className="imgCashew" src={gladiolus} alt="gladiolus"/>
  }
  if(key===2){
    return <img className="imgCashew" src={podsnegnik} alt="podsnegnik"/>
  }
  if(key===4){
    return <img className="imgCashew" src={romashka} alt="romashka"/>
  }
  if(key===5){
    return <img className="imgCashew" src={roza} alt="roza"/>
  }
  if(key===7){
    return <img className="imgCashew" src={orhidea} alt="orhidea"/>
  }
  if(key===8){
    return <img className="imgCashew" src={pion} alt="pion"/>
  }
   if(key===10){
    return <img className="imgCashew" src={tulpan} alt="tulpan"/>
  }
   if(key===11){
    return <img className="imgCashew" src={mac} alt="mac"/>
  }
  if(key===12){
    return <img className="imgCashew" src={sarafun} alt="sarafun"/>
  }
   if(key===13){
    return <img className="imgCashew" src={hrizantema} alt="hrizantema"/>
  }
   if(key===14){
    return <img className="imgCashew" src={podsolnuh} alt="podsolnuh"/>
  }
   if(key===16){
    return <img className="imgCashew" src={gvozdika} alt="gvozdika"/>
  }
   if(key===17){
    return <img className="imgCashew" src={oduvanhik} alt="oduvanhik"/>
  }
   if(key===19){
    return <img className="imgCashew" src={margaritka} alt="margaritka"/>
  }
   if(key===20){
    return <img className="imgCashew" src={kuvshinka} alt="kuvshinka"/>
  }
   if(key===22){
    return <img className="imgCashew" src={lutik} alt="lutik"/>
  }
   if(key===23){
    return <img className="imgCashew" src={lilia} alt="lilia"/>
  }
   if(key===25){
    return <img className="imgCashew" src={gerbera} alt="gerbera"/>
  }
   if(key===26){
    return <img className="imgCashew" src={gortenzia} alt="gortenzia"/>
  }
   if(key===27){
    return <img className="imgCashew" src={sary} alt="sary"/>
  }
   if(key===28){
    return <img className="imgCashew" src={vasilok} alt="vasilok"/>
  }
   if(key===29){
    return <img className="imgCashew" src={petunia} alt="petunia"/>
  }
}
  const getInfo = () => {
    const elementOne = document.querySelector('.infoText').style.display
    if(elementOne === 'none' || elementOne ===''){
        document.querySelector('.infoText').style.display = 'block'
      } else {
        document.querySelector('.infoText').style.display = 'none'
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
          <div className='infoText'>
              <p className='ConnentOfinfoText'>{data.contents[key].why}</p>  
          </div>
        <img className="info" src={info} alt="info"/> 
  </button>
  {getimg()}
    <div className='wrap'> 
      <input 
        id="masswge"
        placeholder='введите ответ' 
        className='inputAppWords'
        ></input>
      <button onClick={checked} className='buttonOK'>ОК</button>
    </div>
    </div>
  </main>
  </div>
  )
}
export default QuizText