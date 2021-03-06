/**
 * Created by softboy on 6/22/17.
 */
import React from "react";
import "./Sponsors.scss";
import sponsorSvg from "./images/sponsor.svg";
import unicornteam from "./images/unicornteam.png";
import qcoreteam from "./images/qcoreteam.svg";
import qihoodaxue from "./images/360daxue.png";
import wirelessresearch from "./images/wirelessresearch.svg";

export default class Sponsor extends React.Component
{
   render()
   {
      return <div className="sponsors-panel uk-container uk-margin-large-top uk-flex uk-flex-column">
         <div className="uk-flex uk-flex-center">
            <div className="sponsor-title uk-flex uk-flex-center">
               <img src={sponsorSvg}/>赞助者
            </div>
         </div>
         <div className="uk-margin-medium-top uk-flex uk-flex-center" data-uk-grid>
            <a className="sponsor-logo uk-width-auto"><img src={unicornteam}/></a>
            <a className="sponsor-logo uk-width-auto"><img src={qihoodaxue} style={{width:200,height:60,paddingTop:10}}/></a>
            <a className="sponsor-logo uk-width-auto"><img src={qcoreteam} style={{width:200,height:60,paddingTop:10}}/></a>
            <a className="sponsor-logo uk-width-auto"><img src={wirelessresearch} style={{height:80}}/></a>
         </div>
         <div className="uk-flex uk-flex-center uk-margin-medium-top">
            <div className="sponsor-title uk-flex uk-flex-center">
               <button className="uk-button uk-button-default become-sponsor-btn" onClick={this.gotoTargetUrl}>如何成为赞助者</button>
            </div>
         </div>
      </div>;
   }
   gotoTargetUrl()
   {
      window.location.assign("/about/becomesponsor.html")
   }
};