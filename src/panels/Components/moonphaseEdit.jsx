import React, { useEffect } from 'react'
import './moonphase.css'
import { useData } from './../../Store';
import { useState } from 'react';

const moonphase = ({mde1}) => {
  const [zagrimg,setZagrimg] = useState(false)
  const dataText = useData((state) => state.dataText)
  const dataNumber = useData((state) => state.dataNumber)
  const dataNumberAdd = useData((state) => state.setDataNumber)
  const dataNumberMouth = useData((state) => state.dataNumberMouth)
  const dataNumberMouthAdd = useData((state) => state.setDataNumberMouth)
  if (dataNumber == '01'){
    var dataNumber1 = '1'
  }
  if (dataNumber == '02'){
    dataNumber1 = '2'
  }
  if (dataNumber == '03'){
    var dataNumber1 = '3'
  }
  if (dataNumber == '04'){
    var dataNumber1 = '4'
  }
  if (dataNumber == '05'){
    var dataNumber1 = '5'
  }
  if (dataNumber == '06'){
    var dataNumber1 = '6'
  }
  if (dataNumber == '07'){
    var dataNumber1 = '7'
  }
  if (dataNumber == '08'){
    var dataNumber1 = '8'
  }
  if (dataNumber == '09'){
    var dataNumber1 = '9'
  }
  if (dataNumber == '10'){
    var dataNumber1 = '10'
  }
  if (dataNumber == '11'){
    var dataNumber1 = '11'
  }
  if (dataNumber == '12'){
    var dataNumber1 = '12'
  }
  if (dataNumber == '13'){
    var dataNumber1 = '13'
  }
  if (dataNumber == '14'){
    var dataNumber1 = '14'
  }
  if (dataNumber == '15'){
    var dataNumber1 = '15'
  }
  if (dataNumber == '16'){
    var dataNumber1 = '16'
  }
  if (dataNumber == '17'){
    var dataNumber1 = '17'
  }
  if (dataNumber == '18'){
    var dataNumber1 = '18'
  }
  if (dataNumber == '19'){
    var dataNumber1 = '19'
  }
  if (dataNumber == '20'){
    var dataNumber1 = '20'
  }
  if (dataNumber == '21'){
    var dataNumber1 = '21'
  }
  if (dataNumber == '22'){
    var dataNumber1 = '22'
  }
  if (dataNumber == '23'){
    var dataNumber1 = '23'
  }
  if (dataNumber == '24'){
    var dataNumber1 = '24'
  }
  if (dataNumber == '25'){
    var dataNumber1 = '25'
  }
  if (dataNumber == '26'){
    var dataNumber1 = '26'
  }
  if (dataNumber == '27'){
    var dataNumber1 = '27'
  }
  if (dataNumber == '28'){
    var dataNumber1 = '28'
  }
  if (dataNumber == '29'){
    var dataNumber1 = '29'
  }
  if (dataNumber == '30'){
    var dataNumber1 = '30'
  }
  if (dataNumber == '31'){
    var dataNumber1 = '31'
  }
  if (dataNumberMouth == '01'){
    var dataNumberMouth1 = '1'
  }
  if (dataNumberMouth == '02'){
    dataNumberMouth1 = '2'
  }
  if (dataNumberMouth == '03'){
    var dataNumberMouth1 = '3'
  }
  if (dataNumberMouth == '04'){
    var dataNumberMouth1 = '4'
  }
  if (dataNumberMouth == '05'){
    var dataNumberMouth1 = '5'
  }
  if (dataNumberMouth == '06'){
    var dataNumberMouth1 = '6'
  }
  if (dataNumberMouth == '07'){
    var dataNumberMouth1 = '7'
  }
  if (dataNumberMouth == '08'){
    var dataNumberMouth1 = '8'
  }
  if (dataNumberMouth == '09'){
    var dataNumberMouth1 = '9'
  }
  if (dataNumberMouth == '10'){
    var dataNumberMouth1 = '10'
  }
  if (dataNumberMouth == '12'){
    var dataNumberMouth1 = '12'
  }
  if (dataNumberMouth == '13'){
    var dataNumberMouth1 = '13'
  }
  if (dataNumberMouth == '14'){
    var dataNumberMouth1 = '14'
  }
  if (dataNumberMouth == '15'){
    var dataNumberMouth1 = '15'
  }
  if (dataNumberMouth == '16'){
    var dataNumberMouth1 = '16'
  }
  if (dataNumberMouth == '17'){
    var dataNumberMouth1 = '17'
  }
  if (dataNumberMouth == '18'){
    var dataNumberMouth1 = '18'
  }
  if (dataNumberMouth == '19'){
    var dataNumberMouth1 = '19'
  }
  if (dataNumberMouth == '20'){
    var dataNumberMouth1 = '20'
  }
  if (dataNumberMouth == '21'){
    var dataNumberMouth1 = '21'
  }
  if (dataNumberMouth == '22'){
    var dataNumberMouth1 = '22'
  }
  if (dataNumberMouth == '23'){
    var dataNumberMouth1 = '23'
  }
  if (dataNumberMouth == '24'){
    var dataNumberMouth1 = '24'
  }
  if (dataNumberMouth == '25'){
    var dataNumberMouth1 = '25'
  }
  if (dataNumberMouth == '26'){
    var dataNumberMouth1 = '26'
  }
  if (dataNumberMouth == '27'){
    var dataNumberMouth1 = '27'
  }
  if (dataNumberMouth == '28'){
    var dataNumberMouth1 = '28'
  }
  if (dataNumberMouth == '29'){
    var dataNumberMouth1 = '29'
  }
  if (dataNumberMouth == '30'){
    var dataNumberMouth1 = '30'
  }
  if (dataNumberMouth == '31'){
    var dataNumberMouth1 = '31'
  }


    useEffect(()=>{
        let image;
        var pageImage = document.querySelector("img");
    var phase = document.querySelector("#phase");
    var d = new Date();
        var dd = Number(dataNumber1);
        var mm = Number(dataNumberMouth1);
        var yy = 2023;
    var Moon = {
      phase: function (yy,mm,dd) {
        
        var c = 0;
        var e =0
        var jd = 0
        var b = 0
    
        if (mm < 3) {
          yy--;
          mm += 12;
        }
    
        ++mm;
        c = 365.25 * yy;
        e = 30.6 * mm;
        jd = c + e + dd - 694039.09; 
        jd /= 29.5305882; 
        b = parseInt(jd); 
        jd -= b; 
        b = Math.round(jd * 8); 
    
        if (b >= 8) b = 0; 
        
        switch (b) {
          case 0:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/newmoon.png";
            phase.innerHTML = 'Новолуние';
            break;
          case 1:
            pageImage.src = 'https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxingcrescent.png';
            phase.innerHTML = 'Молодая луна';
            break;
          case 2:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/firstquarter.png";
            phase.innerHTML = 'Первая четверть';
            break;
            
          case 3:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waxinggibbous.png";
            phase.innerHTML = 'Прибывающая луна';
            break;
          case 4:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/fullmoon.png";
            phase.innerHTML = 'Полнолуние';
            break;
          case 5:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waninggibbous.png";
            phase.innerHTML = 'Убывающая луна';
            break;
          case 6:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/lastquarter.png";
            phase.innerHTML = 'Последняя четверть';
            
            break;
          case 7:
            pageImage.src = "https://raw.githubusercontent.com/tallulahh/moon-phase/main/waningcrescent.png";
            phase.innerHTML = 'Старая луна';
            break;
        }
        
      }
    };
    Moon.phase(yy,mm,dd)
    
    
    

    
    const search = document.querySelector(".searchBtn");
    search.addEventListener("click", function(){
      document.querySelector(".main").style.opacity = "1";
    })
    
    
    // Moon.phase(yy,mm,dd);
    },[])

    const imageOnLoad = (event) => {
      // console.log(`Picture successfully ${event.currentTarget.src} loaded.`);
      setZagrimg(true)

    }

  return (
    <>
    <div>
        <div className="phaseInfo phaseOpa opa1">
            <p className="imageHeader zero">Current Moon Phase: </p>
            <div className='papaPhase'>
              <div className='phaseLeft'>
                <div className='phaseText'>Фаза луны:</div>
                <div className='phaseOpa phaseText' id="phase"></div>
              </div>
              <div className='phaseRight'>
                <div className='phaseText'>Лунный день:</div>
                <div className='phaseText'>{mde1}</div>
              </div>
            </div>
            
        </div>
        <p className="searchBtn zero">Search a date</p>
        <div className="main">
            <input  defaultValue={dataNumber} className='zero' id="day" placeholder="DD "></input>
            <input  defaultValue={dataNumberMouth} className='zero' id="month" placeholder="MM "></input>
            <input defaultValue={2023} className='zero' id="year" placeholder="YYYY"></input>
        </div>
        <div className={`opa100 imageHolder ${zagrimg? '' : 'zero1000'}`}>
          <img  onLoad={imageOnLoad} loading='lazy' alt='' src=""></img>
        </div>
  
    </div>
    </>
  )
}

export default moonphase