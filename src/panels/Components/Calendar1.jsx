import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar , Text} from '@vkontakte/vkui';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import { collection, query, where,getDocs,setDoc ,doc,orderBy,limit ,getDoc  } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

import { useData } from './../../Store';
import {useReclama } from './../../Store3';
import { getAuth, signInAnonymously } from "firebase/auth";
import bridge from '@vkontakte/vk-bridge';
import { Icon20FavoriteCircleFillYellow,Icon20NotificationOutline ,Icon20CrownCircleFillVkDating} from '@vkontakte/icons';

// const firebaseConfig = {
//     apiKey: "AIzaSyDz6SWoY7G9krHv7M2KmYa7kg41VUdO2PM",
//     authDomain: "hair-3634b.firebaseapp.com",
//     projectId: "hair-3634b",
//     storageBucket: "hair-3634b.appspot.com",
//     messagingSenderId: "182040369791",
//     appId: "1:182040369791:web:2952e2c01aa33d56417d4a"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// const auth = getAuth();
// signInAnonymously(auth)
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });





const isInCurrentYear = (date) => date.get('year') != dayjs().get('year');

const lunarCalc = require("lunarphase-calculator");
const date = new Date();
const current = date.getDate()
const mde = lunarCalc.getLunarDay();
const mde1 = Math.trunc(mde) + 1


const Calendar1 = () => {
    const [izbranPokaz,setIzbranPokaz] = useState(true)
    const [data,setData] = useState([])
    const [conditionValue,setContditionValue] = useState(false)

    useEffect(()=>{
        const elts = {
            text1: document.getElementById("text1"),
            text2: document.getElementById("text2")
        };
        
        const texts = [
            "Лунное",
            "Затмение",
            "Через",
            zatmen,
            "дня",

        ];
        
        const morphTime = 1;
        const cooldownTime = 0.25;
        
        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;
        
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        
        function doMorph() {
            morph -= cooldown;
            cooldown = 0;
        
            let fraction = morph / morphTime;
        
            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }
        
            setMorph(fraction);
        }
        
        function setMorph(fraction) {
            elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        
            fraction = 1 - fraction;
            elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
            elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        
            elts.text1.textContent = texts[textIndex % texts.length];
            elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        }
        
        function doCooldown() {
            morph = 0;
        
            elts.text2.style.filter = "";
            elts.text2.style.opacity = "100%";
        
            elts.text1.style.filter = "";
            elts.text1.style.opacity = "0%";
        }
        
        function animate() {
            requestAnimationFrame(animate);
        
            let newTime = new Date();
            let shouldIncrementIndex = cooldown > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;
        
            cooldown -= dt;
        
            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex++;
                }
        
                doMorph();
            } else {
                doCooldown();
            }
        }
        
        animate();
    },[])

    useEffect(()=>{
        if (window.localStorage.getItem('izbran1', '1')){
			setIzbranPokaz(false)
		}
    },[])

    bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
	.then((data) => {
		if (data.result) {
		} else {
		console.log('Рекламные материалы не найдены.');
		}
	})
	.catch((error) => { console.log(error); /* Ошибка */  });

    const izbran = ()=>{
        bridge.send('VKWebAppAddToFavorites')
        .then((data) => { 
            if (data.result) {
              window.localStorage.setItem('izbran1', '1')
            // Мини-приложение или игра добавлены в избранное
            }
            })
            .catch((error) => {
                // Ошибка
                console.log(error);
            });

            }

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


    const vib = (e)=>{
        let den = e.target.textContent
        if (den == '1'){
            den = '01'
        }
        if (den == '2'){
            den = '02'
        }
        if (den == '3'){
            den = '03'
        }
        if (den == '4'){
            den = '04'
        }
        if (den == '5'){
            den = '05'
        }
        if (den == '6'){
            den = '06'
        }
        if (den == '7'){
            den = '07'
        }
        if (den == '8'){
            den = '08'
        }
        if (den == '9'){
            den = '09'
        }
        
        const mesyc = document.querySelector('.MuiPickersCalendarHeader-label').textContent
      
        let mesycDate = ''
        if (mesyc == 'Январь 2023'){
            mesycDate = '01'
        }
        if (mesyc == 'Февраль 2023'){
            mesycDate = '02'
        }
        if (mesyc == 'Март 2023'){
            mesycDate = '03'
        }
        if (mesyc == 'Апрель 2023'){
            mesycDate = '04'
        }
        if (mesyc == 'Май 2023'){
            mesycDate = '05'
        }
        if (mesyc == 'Июнь 2023'){
            mesycDate = '06'
        }
        if (mesyc == 'Июль 2023'){
            mesycDate = '07'
        }
        if (mesyc == 'Август 2023'){
            mesycDate = '08'
        }
        if (mesyc == 'Сентябрь 2023'){
            mesycDate = '09'
        }
        if (mesyc == 'Октябрь 2023'){
            mesycDate = '10'
        }
        if (mesyc == 'Ноябрь 2023'){
            mesycDate = '11'
        }
        if (mesyc == 'Декабрь 2023'){
            mesycDate = '01'
        }
        
        if (den != '' && mesycDate != '' && den.length <= 2 && den != 'П' && den != 'В' && den != 'С' && den != 'Ч' && den != 'В'){
            
            dataTextAdd('')
            async function lil(){
                // const docRef = doc(db, "hairs", `${den + '.' + mesycDate}`);
                
                dataNumberAdd(den)
                dataNumberMouthAdd(mesycDate)
                // const docSnap = await getDoc(docRef);

                // if (docSnap.exists()) {
                //  console.log("Document data:", docSnap.data());
                //  setData(docSnap.data())
                //  dataTextAdd(docSnap.data())
                 console.log(dataText)
                // } else {
                // // docSnap.data() will be undefined in this case
                //   console.log("No such document!");
                // }
            }
            lil()
            window.location.assign('#/ItemDate')
        }
    }

    const dataText = useData((state) => state.dataText)
    const dataTextAdd = useData((state) => state.setDataText)
    const dataNumber = useData((state) => state.dataNumber)
    const dataNumberAdd = useData((state) => state.setDataNumber)
    const dataNumberMouth = useData((state) => state.dataNumberMouth)
    const dataNumberMouthAdd = useData((state) => state.setDataNumberMouth)

    const switchReclama = useReclama((state)=>state.setPokazReclami)
	const itemReclama = useReclama((state)=>state.pokazReclami)

    window.addEventListener('online',  updateOnlineStatus);
	window.addEventListener('offline', updateOnlineStatus);
	let condition
	function updateOnlineStatus(event) {
	    condition = navigator.onLine ? "online" : "offline";
        if (condition === 'offline'){
            setContditionValue(true)
        }
        if (condition === 'online'){
            setContditionValue(false)
	    }
    }

    const JSJoda = require('js-joda'); 
    const LocalDate = JSJoda.LocalDate; 

    function getNumberOfDays(start, end) { 
        const start_date = new LocalDate.parse(start); 
        const end_date = new LocalDate.parse(end); 
        
        return JSJoda.ChronoUnit.DAYS.between(start_date, end_date); 
    } 
    var dateZ = new Date();

    const daycurrent = dateZ.getDate()
    const mouthcurrent = dateZ.getMonth() + 1
    const job = '2023' + '-' + '0' + daycurrent + '-' + '0' + mouthcurrent
   
    
    const zatmen = getNumberOfDays(job, "2023-10-28")

  return (
    <>
    {conditionValue && 
        <div className='redParent'>
           <p className ='red'>Потеряна связь с интернетом</p>
        </div>
    }
    {conditionValue ===false &&
    <Container>
        <div className="col-md-12 text-center">
          <h3 className="animate-charcter">Календарь стрижек</h3>
        </div>

        <div className='papa moph'>

            <div className='parenTextString'>
                <div className='textString'>Выберите дату:</div>
            </div>

            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="Ru" >
                    <DateCalendar shouldDisableYear={isInCurrentYear} views={['day']} onClick={vib}/>
            </LocalizationProvider>
        </div>

        
        <div id="containerZ">
            <span id="text1"></span>
            <span id="text2"></span>
        </div>
        <svg id="filters">
            <defs>
                <filter id="threshold">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 255 -140" />
                </filter>
            </defs>
        </svg>
        <div className='izbran'>
            {izbranPokaz&&
                <Button onClick={()=>{
                        izbran()    
                    }} >
                    <div className='izbranParent'>
                        <Icon20FavoriteCircleFillYellow/>
                        <p className='pstyle'>Добавьте приложение в избранное!</p> 
                    </div>
                </Button>
            }
        </div>
    </Container>}
    </>
  )
}

export default Calendar1