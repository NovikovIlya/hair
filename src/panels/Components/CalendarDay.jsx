import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import { collection, query, where,getDocs,setDoc ,doc,orderBy,limit ,getDoc  } from "firebase/firestore";
import { getDatabase, ref, orderByChild } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import Moonphase from './moonphase';
import ItemDate from './ItemDate';
import { useStore } from 'zustand';


const firebaseConfig = {
    apiKey: "AIzaSyDz6SWoY7G9krHv7M2KmYa7kg41VUdO2PM",
    authDomain: "hair-3634b.firebaseapp.com",
    projectId: "hair-3634b",
    storageBucket: "hair-3634b.appspot.com",
    messagingSenderId: "182040369791",
    appId: "1:182040369791:web:2952e2c01aa33d56417d4a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const isInCurrentYear = (date) => date.get('year') != dayjs().get('year');

const lunarCalc = require("lunarphase-calculator");
const date = new Date();
const current = date.getDate()
const mde = lunarCalc.getLunarDay();
const mde1 = Math.trunc(mde) + 1

console.log(mde1)

const Calendar1 = () => {
    const [data,setData] = useState([])


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
        console.log(den)
        const mesyc = document.querySelector('.MuiPickersCalendarHeader-label').textContent
        console.log(mesyc)
        let mesycDate = ''
        if (mesyc == 'Январь 2023'){
            mesycDate = '01'
        }
        console.log(mesycDate)
        if (den != '' && mesycDate != '' && den.length <= 2){
            console.log('тык')
            window.location.assign('#/ItemDate')
            async function lil(){
                const docRef = doc(db, "hairs", `${den + '.' + mesycDate}`);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                 console.log("Document data:", docSnap.data());
                } else {
                // docSnap.data() will be undefined in this case
                  console.log("No such document!");
                }
            }
            lil()
        }
    }

  return (
    <Container>
        <div>{mde1}</div>
        <Moonphase/>
    
    </Container>
  )
}

export default Calendar1