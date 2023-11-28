import React from 'react';
// import css link 
import "./footer.css"
// import img and logo link 
import closslogo from"../../../assets/footerAll_icon/close.svg"
//Download Our App import

import apple from"../../../assets/footerAll_icon/apple.svg"
import playstore from"../../../assets/footerAll_icon/playstore.svg"
// import Follow US logo
import facebook from"../../../assets/footerAll_icon/facebook.png"
import instagram from"../../../assets/footerAll_icon/instagram.png"
import whatsapp from"../../../assets/footerAll_icon/whatsapp.png"
import email from"../../../assets/footerAll_icon/email.png"



import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mt-3' style={{marginLeft:0}}>

      <footer className="footer  " style={{
        backgroundColor: "#EA4D00"

      }}>
       
          <div className=" row  pading_option_setup " >
            <div className="d-flex grid_footer_item">
              {/* Company Information   link setupb  */}
            <div className='style_to_link_text'>
               
                <ul>
                <h6 className='footer_title_text_style'>Company Information</h6>
                  <Link  to="/"   className='style_to_link_text mt-3 '>About Cart24</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text  mt-2'>Brands list</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text  mt-2'>Site Map</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text  mt-2'>Blog</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text  mt-2'>Sign in</Link>
                </ul>
              </div>

{/* 1111  */}
{/* brands footer link setupb  */}

<div className='style_to_link_text'>
                <ul>
                  <h6 className='footer_title_text_style mt-2'>Brands</h6>
                 
                  <br/>

                  <Link  to="/"   className='style_to_link_text mt-2'>Apple</Link>
                  <br></br>
                  <br></br>
               
                
                  <Link  to="/"   className='style_to_link_text  mt-2'>Samsung</Link>
                  <br/>
                  <br/>
             
                  <Link  to="/"   className='style_to_link_text mt-2'>Nike</Link>
                  
               <br/>
               <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Addidas</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Google</Link>
                 

<br/>
<br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Sony</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-1 d-flex'>HP</Link>
                     
                </ul>
              </div>


 {/* catagory  footer link setupb  */}
 <div className='style_to_link_text'>
                <ul>
                  <h6 className='footer_title_text_style mt-2'>Categories</h6>
                  <br/>

                  <Link  to="/"   className='style_to_link_text mt-2'>Electronics</Link>
                  <br></br>
                  <br></br>
                
                  <Link  to="/"   className='style_to_link_text  mt-2'>Smart Home</Link>
                  <br/>
                  <br/>
             
                  <Link  to="/"   className='style_to_link_text mt-2'>Toys</Link>
                  
               <br/>
               <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Fitness</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Clothings</Link>
                 
                  <br/>
                  <br/>

                  <Link  to="/"   className='style_to_link_text mt-2'>Smartwatches</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-1 d-flex'>Smartphones</Link>
                     
                </ul>
              </div>
  {/* 2222  */}
              {/* market & selll link   footer setup  */}

              <div className='style_to_link_text'>
              <ul>
                  <h6 className='footer_title_text_style mt-2'>Market & Sell</h6>
                  <br/>

                  <Link  to="/"   className='style_to_link_text mt-3'>Start selling</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text  mt-3'>Learnhowtosell</Link>
                  <br></br>
                  <br></br>
             
                  <Link  to="/"   className='style_to_link_text mt-3'>Top Deals</Link>
                  
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text mt-3'>HomeBusiness</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text mt-3'>Business Seller</Link>
                 
                  <br></br>
                  <br></br>

                  <Link  to="/"   className='style_to_link_text mt-2'>B2BWholesale</Link>
                  <br></br>
                  <br></br>
                  <Link  to="/"   className='style_to_link_text mt-2 d-flex'>Promoter</Link>
                  <br></br>
                  
                  <Link  to="/"   className='style_to_link_text mt-2 d-flex' >Affiliate </Link>
                </ul>
              </div>



              {/* Customer Service  link  */}
              <div className='style_to_link_text'>
                <ul>
                  <h6 className='footer_title_text_style mt-2'>Customer Service</h6>
               
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>How to Order</Link>
                  <br/>
                  <br/>
                
                  <Link  to="/"   className='style_to_link_text  mt-2'>TrackYourOrder</Link>
                  <br/>
                  <br/>
             
                  <Link  to="/"   className='style_to_link_text mt-2'>FAQ</Link>
                  
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Contact us</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Return/RefundPolicy</Link>
                 

                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-2'>Terms & Conditions</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-1 d-flex'>Privacy Policy</Link>
                  <br/>
                  <br/>
                  <Link  to="/"   className='style_to_link_text mt-1 d-flex' >Help & Support</Link>
                </ul>
              </div>
              <div className='style_to_link_text'>
            
                <ul>
                  <h6 className='footer_title_text_style mt-1' >FollowUS</h6>
                
                  <div className='d-flex gap-3  faceBook_logo_setup' style={{color:"#F1F1F1"}}><img src={facebook} alt=''></img>  <Link  to="/"   className='style_to_link_text'>facebook</Link>   </div>
                  
                  <br></br>
                  <div className='d-flex gap-3  Instagram_logo_setup' style={{color:"#F1F1F1"}}><img src={instagram} alt=''></img>  <Link  to="/"   className='style_to_link_text'>Instagram</Link>   </div>
 
                  <br></br>
                  <div className='d-flex gap-3  faceBook_logo_setup' style={{color:"#F1F1F1"}}><img src={whatsapp} alt=''></img>  <Link  to="/"   className='style_to_link_text'>WhatsApp</Link>   </div>
 
                  <br></br>
                  <div className='d-flex gap-3  email_logo_setup' style={{color:"#F1F1F1"}}><img src={email} alt=''></img>  <Link  to="/"   className='style_to_link_text'>Email</Link>   </div>
 
                  
                
               
                </ul>
              </div>
              {/* 3333  */}

{/* Download Our App   and playstore section  */}


              <div className='style_to_link_text'>
               
                <ul >
                  <h6 className='footer_title_text_style'>Download Our App</h6>
                  <p  to="/"   className='style_to_link_text'>Get the Cart24 mobile   app for FREE from here</p>
           
               
               
                  <img className='apple_playstore_logo' src={apple} alt='' style={{}}></img>
                <br></br>
                  <img  className='apple_playstore_logo' src={playstore} alt='' style={{}}></img>

      
                </ul>
              </div>
             
              <div>
              <img src={closslogo} alt=''></img>
              </div>

          </div>
         





          </div>

      
      </footer>
      <div className="row">
        <div className="col-lg-12">
          <div className="footer__copyright">
            <div className="footer__copyright__text">
              <p>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © All rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              </p>
            </div>
            <div className="footer__copyright__payment">
              <img src="img/payment-item.png" alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Footer;