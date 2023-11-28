import React from 'react';

import abubakarsiddiq from "../../../../assets/ExploreOurTopPromoter/Abu Bakar Siddiq.png";
import kabirIbnMurad from "../../../../assets/ExploreOurTopPromoter/Kabir Ibn Murad2.png";
import asifShekRajib from "../../../../assets/ExploreOurTopPromoter/Asif Shek Rajib3.jpg";
import kalibMahmud from "../../../../assets/ExploreOurTopPromoter/Kalib Mahmud4.jpg";
import shahadatHossain from "../../../../assets/ExploreOurTopPromoter/Shahadat Hossain5.jpg";
import abuBakarSiddiq6 from "../../../../assets/ExploreOurTopPromoter/Abu Bakar Siddiq6.jpg";
import abuBakarSiddiq7 from "../../../../assets/ExploreOurTopPromoter/Abu Bakar Siddiq7.jpg";
import abuBakarSiddiq8 from "../../../../assets/ExploreOurTopPromoter/Abu Bakar Siddiq8.jpg";
import abuBakarSiddiq9 from "../../../../assets/ExploreOurTopPromoter/Sadia Bin Wasi.jpg";

import usericon from "../../../../assets/usersicon/user.svg"
import starretting from "../../../../assets/iconreting/rating.svg";
import withcolorretting from "../../../../assets/iconreting/withcolerrating.svg";
import staverifiedlogo from "../../../../assets/starverifiedlogo/starverifiedlogo.svg"
import promotericon from "../../../../assets/promotericon/promoter (1).png"
import { Link } from 'react-router-dom';
import ExploreOurTopHomBusinescard from './exploreOurTopHomBusinesCard/ExploreOurTopHomBusinescard';


const ExploreOurTopHomBusiness = () => {

   const exploreOurTopHomBusinesData = [
    {
      id: 1,
      name: "Abu Bakar Siddiq",
      bessimg: abubakarsiddiq,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 2,
      name: "Kabir Ibn Murad",
      bessimg: kabirIbnMurad,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 3,
      name: "Asif Shek Rajib",
      bessimg: asifShekRajib,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 4,
      name: "Kalib Mahmud",
      bessimg: kalibMahmud,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 5,
      name: "Shahadat Hossain",
      bessimg: shahadatHossain,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 6,
      name: "Abu Bakar Siddiq",
      bessimg: abuBakarSiddiq6,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 7,
      name: "Abu Bakar Siddiq",
      bessimg: abuBakarSiddiq7,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
    {
      id: 8,
      name: "Abu Bakar Siddiq",
      bessimg: abuBakarSiddiq8,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },
  
    {
      id: 9,
      name: "Sadia Bin Wasi",
      bessimg: abuBakarSiddiq9,
      promotericon: promotericon,
      staverifiedlogo: staverifiedlogo,
      starretting: starretting,
      usericon: usericon,
      withcolorretting: withcolorretting,

    },



  ];


  return (
    
    <div className='mt-5  ms-4 "'>

      <div className='d-flex justify-content-between'>
        <h4 style={{
          color: "#000", fontSize: "22px", fontFamily: "inter",
          fontWeight: 500, lineHeight: "normal"
        }}>Explore Our Top Home Business</h4>
        <Link to="/" className='' style={{ color: "#000", fontFamily: "inter", fontSize: "18px", fontWeight: 500, fontStyle: "normal", lineHeight: "normal" }}>View All</Link>

      </div>

      <div className='row '>
        <div className=' d-flex grid_colams_promoter_card ms-2  gap-4'>
          {
            exploreOurTopHomBusinesData?.map(topHomBusinesdata => <ExploreOurTopHomBusinescard key={topHomBusinesdata.id} topHomBusinesdata={topHomBusinesdata}></ExploreOurTopHomBusinescard>)

          }

        </div>
      </div>
    </div>


  );
}

export default ExploreOurTopHomBusiness;