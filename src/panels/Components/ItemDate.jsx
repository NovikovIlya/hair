import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar,Spinner } from '@vkontakte/vkui';
import 'dayjs/locale/ru';
import MoonphaseEdit from './moonphaseEdit';
import { useData } from './../../Store';
import data from './Data'
import {useReclama } from './../../Store3';
import bridge from '@vkontakte/vk-bridge';
import { useEffect } from 'react';
import { Icon20ArrowLeftOutline } from '@vkontakte/icons';


const ItemDate = () => {
  const [spinValue,setSpinValue] = useState(false)
  const [dateNedeliValue,setDateNedeliValue] = useState('')


  bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
	.then((data) => {
		if (data.result) {
		} else {
		console.log('Рекламные материалы не найдены.');
		}
	})
	.catch((error) => { console.log(error); /* Ошибка */  });

	function fooButtonClick(){
	// Показать рекламу
	bridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
		.then((data) => {
		if (data.result) // Успех
			console.log('Реклама показана');
		else // Ошибка 
			console.log('Ошибка при показе');
		})
		.catch((error) => { console.log(error); /* Ошибка */ });
	}

  const switchReclama = useReclama((state)=>state.setPokazReclami)
	const itemReclama = useReclama((state)=>state.pokazReclami)


  const dataText = useData((state) => state.dataText)
  const dataNumber = useData((state) => state.dataNumber)
  const dataNumberAdd = useData((state) => state.setDataNumber)
  const dataNumberMouth = useData((state) => state.dataNumberMouth)
  const dataNumberMouthAdd = useData((state) => state.setDataNumberMouth)
  const heh = `${dataNumber + '.' + dataNumberMouth}`
  const iskomoe = data.find(item=>item.date ==  heh )

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

  const lunarCalc = require("lunarphase-calculator");
 
  const current = new Date(2023, dataNumberMouth, dataNumber)
  const mde = lunarCalc.getLunarDay(current);
  const mdePhase = lunarCalc.getLunarPhase(mde);
  
  const mde1 = Math.trunc(mde) + 1

  useEffect(()=>{
    const open = ()=>{
      if (itemReclama === false){
        setSpinValue(true)

        setTimeout(fooButtonClick,1000)

        const haha = ()=>{
					setSpinValue(false)
				}
				setTimeout(haha,2000)

        switchReclama()
      }
      else if (itemReclama === true){

        switchReclama()

      }
    }
    open()


    let date = new Date(2023, Number(dataNumberMouth1) - 1, Number(dataNumber1));
    let res = date.getDay();
    if (res == 0){
      var resDay = 'Воскресенье'
    }
    if (res == 1){
      var resDay = 'Понедельник'
    }
    if (res == 2){
      var resDay = 'Вторник'
    }
    if (res == 3){
      var resDay = 'Среда'
    }
    if (res == 4){
      var resDay = 'Четверг'
    }
    if (res == 5){
      var resDay = 'Пятница'
    }
    if (res == 6){
      var resDay = 'Суббота'
    }
    setDateNedeliValue(resDay)
  },[])


  

  

  return (
    <>
    {spinValue&&
    <div>
	  	<div className='parentZagr'>
		  	<p className='zagr'>Идет загрузка...</p>
		  </div>
      <div className='spin'>
        <Spinner size="medium" variant="light" animation="border" />
      </div>
	  </div>}

    {spinValue === false&&
    <>
      <div className='whLink'>
          <Link className='liink' to='/'>
              <Button className='btnLink' variant="contained" >
                <div className='nazad'>
                  <Icon20ArrowLeftOutline className='icon'/>Назад
                </div>
              </Button>
          </Link>
      </div>
    <div className='сontainer2'>
      <div className='head opa1'>{dateNedeliValue}, {dataNumber}.{dataNumberMouth}.2023</div>

      <MoonphaseEdit mde1={mde1}/>

      <div className='opa'>{iskomoe.text}</div>
    </div>
    </>}
    </>
  )
}

export default ItemDate