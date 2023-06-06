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
import MoonphaseEdit from './moonphaseEdit';
import { useData } from '../../Store';
import { useEffect } from 'react';

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



const DateToday = () => {
 const [data,setData] = useState('')
  const lunarCalc = require("lunarphase-calculator");
  const date = new Date();
  const current = date.getDate()
  const mde = lunarCalc.getLunarDay();
  const mde1 = Math.trunc(mde) + 1

  const d = new Date();
   let den = d.getDate();
    let mesycDate = d.getMonth() + 1
   console.log(den)
  console.log(mesycDate)
  console.log('zzzz')
//   const dataTextAdd = useData((state) => state.dataTextAdd)

  // const dataText2 = useData2((state) => state.dataText2)
  


    async function lil(){
        const d = new Date();
        let den = d.getDate();
        let mesycDate = d.getMonth() + 1
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
        if (mesycDate == '1'){
          mesycDate = '01'
        }
        if (mesycDate == '2'){
          mesycDate = '02'
        }
        if (mesycDate == '3'){
          mesycDate = '03'
        }
        if (mesycDate == '4'){
          mesycDate = '04'
        }
        if (mesycDate == '5'){
          mesycDate = '05'
        }
        if (mesycDate == '6'){
          mesycDate = '06'
        }
        if (mesycDate == '7'){
          mesycDate = '07'
        }
        if (mesycDate == '8'){
            demesycDaten = '08'
        }
        if (mesycDate == '9'){
          mesycDate = '09'
        }
        console.log(den)
        console.log(mesycDate)
        const docRef = doc(db, "hairs", `${den + '.' + mesycDate}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
              setData(docSnap.data())
              dataTextAdd(docSnap.data())
            console.log(dataText)
        } else {
        // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    useEffect(()=>{
        lil()
    },[])
  

  const dataText = useData((state) => state.dataText)
  const dataTextAdd = useData((state) => state.setDataText)

  return (
    <Container>
      <div className='whLink'>
          <Link className='liink' to='/'>
              <Button className='btnLink' variant="contained" >
                  Назад
              </Button>
          </Link>
      </div>
      <div>ItemDate</div>
      <div>{mde1}</div>
      <MoonphaseEdit/>
      <div className='opa'>
      {dataText.text}

      </div>
    </Container>
  )
}

export default DateToday