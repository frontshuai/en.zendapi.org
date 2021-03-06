"use strict";
/*
 * TopJs Framework (http://www.topjs.org/)
 *
 * @link      http://github.com/qcoreteam/topjs for the canonical source repository
 * @copyright Copyright (c) 2016-2017 QCoreTeam (http://www.qcoreteam.org)
 * @license   http://www.topjs.org/license/new-bsd New BSD License
 */
import "Scss/base.scss";
import "Scss/pages/about.scss";
const Uikit = require("uikit");
const UikitIcons = require("uikit/dist/js/uikit-icons");

import React from "react";
import ReactDOM from "react-dom";
import SitePath from "Components/sitepath/SitePath";
import AboutPanel from "Components/about/AboutPanel";
import Header from "Components/header/Header";
import Footer from "Components/footer/Footer";


class AboutPage extends React.Component
{
   render()
   {
      return <div style={{width:"100%"}}>
         <div className="uk-container uk-margin-small-top uk-margin-small-bottom about-page-container">
            <SitePath pathList = {this.getPathList()}/>
            <AboutPanel renderType = {ABOUT_PAGE_TYPE}/>
         </div>
      </div>;
   }
   getPathList()
   {
      return [{
         name: "网站首页",
         url : '/'
      }, {
         name: "关于我们",
         url: '/blog'
      }]
   }
}

$(function ()
{
   Uikit.use(UikitIcons);
   ReactDOM.render(<Header items = {SITE_CATEGORIES}/>, document.getElementById("header-wrapper"));
   ReactDOM.render(<AboutPage/>, document.getElementById("container"));
   ReactDOM.render(<Footer/>, document.getElementById("footer-wrapper"));
   $(".about-container .about-nav a").click(function(){
      window.location.assign($(this).attr("href"));
   });
});