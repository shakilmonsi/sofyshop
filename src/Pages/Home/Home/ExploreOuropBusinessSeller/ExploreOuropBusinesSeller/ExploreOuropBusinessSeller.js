import React from 'react';
import "./ExploreOuropBusinessSeller.css"

const ExploreOuropBusinessSeller=({exploreOuropBusinessSeller})=> {
        const {  bessimg,vector,starretting,staverifiedlogo,usericon,name,withcolorretting,}=exploreOuropBusinessSeller;
       console.log(exploreOuropBusinessSeller)
       
        return (
                <div className="card  shadow-sm" style={{ border: "none", width: "164px", height: "188px", flexShrink: 0 }}>
          

                <img src={bessimg} style={{ marginTop: "10px", height: " 17.727px", borderRadius: 
                "63.818px", width: "63.818px", height: "63.818px", flexShrink: 0 }} 
                className="card-img-top mx-auto" alt="..." />
               
               
                <div
                 
                 className='position-absolute'  alt='' style={{
                  top: 10,
                  right: 50,
                  width:"10.727px",height:"10.727px", 
                  borderRadius: "50%", padding:10, backgroundColor: "#FFF" ,
      
                  flexShrink: 0,
                }}
      
                > 
              <img className='position-absolute'  src={staverifiedlogo} alt='' style={{
                  top: 6,
                  right: 6,
                  width:"10.727px",height:"10.727px", 
                  borderRadius: "50%" ,
                  
                 
      
                  flexShrink: 0,
                }}></img>   </div>
      
      
      
      
                <div className="ms-4 mt-1">
      
      
                  <div className='d-flex gap-1'>
                    <img className='setu' src={vector} style={{ marginTop: 11, width: "12px", height: "12px", flexShrink: 0 }} alt=''></img>
                    <h5 className='mt-2' style={{ fontSize: "14px", color: "#2A2A2A", fontFamily: "Inter", lineHeight: "normal", fontStyle: "normal" }}>{name}</h5>
                  </div>
      
      
                  <div className='d-flex gap-2'>
                    <div>
                      <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
                      <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
                      <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
                      <img src={starretting} alt='' style={{ width: "10px", height: "10x", color: "#F5B100" }}></img>
                      <img src={withcolorretting} alt='' style={{ width: "10px", height: "10x", backgroundColor: "" }}></img>
                      <span className='mx-auto' style={{
                        fontSize: "13px", fontWeight: 500,
                        fontStyle: "normal", lineHeight: "normal", color: "#6A6969", flexShrink: 0
                      }}>  4.5</span>
                    </div>
      
                  </div>
                  <div className='d-flex gap-2 '>
                    <div className='d-flex gap-1 mt-1'>
                      <img className='mt-1' src={usericon} alt='' style={{
                        width: "9px",
                        height: "11px", color: "#424242", flexShrink: 0
                      }}></img>
                      <p className=' ' style={{ widows: "auto", fontWeight: 500, fontSize: "13px",
                       color: "#868585" }}>13.3k</p>
      
                    </div >
                    <div className='' style={{ marginBottom: "10px", }} >
                      <button className=' rounded mb-3' style={{
                        width: "61px", height: "24px",
                        backgroundColor: "#424242"
                      }}>
                        <span className='' style={{ textAlign: "center", color: '#FFFFFF', fontSize: "10px", }}>Follow</span>
                      </button>         </div>
      
                  </div>
      
                </div>
              </div>
                
        );
}

export default ExploreOuropBusinessSeller;