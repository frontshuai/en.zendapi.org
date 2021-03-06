"use strict";
import "Scss/base.scss";
import "Scss/pages/index.scss"
const Uikit = require("uikit");
const UikitIcons = require("uikit/dist/js/uikit-icons");
import React from "react";
import ReactDOM from "react-dom";
import Header from "Components/header/Header";
import HotArea from "Components/hotarea/HotArea";
import Features from "Components/features/Features"
import Footer from "Components/footer/Footer";
import InfoList from "Components/infolist/InfoList";
import Sponsor from "Components/sponsors/Sponsor";
import Teamwork from "Components/teamwork/Teamwork";
import Partner from "Components/partner/Partner";
import Linker from "Components/links/Linkers";

class IndexPage extends React.Component
{
   render()
   {
      return <div style={{width:"100%"}}>
         <HotArea/>
         <Features/>
         <InfoList newsItems = {INDEX_PAGE_DATA.newsList} manualItems = {this.getManualItems()}/>
         <Sponsor/>
         <Teamwork/>
         <Partner/>
         <Linker/>
      </div>;
   }

   getManualItems()
   {
      return [{
         title: "新手学堂之自定义 Class",
         url: "/manual/0.0.1/getstarted/definehellozapiclass.html"
      },{
         title: "新手学堂之定义原生函数",
         url: "/manual/0.0.1/getstarted/definehellozapifunction.html"
      },{
         title: "新手学堂之自定义项目预定义常量",
         url: "/manual/0.0.1/getstarted/definehellozapiconst.html"
      },{
         title: "新手学堂之 hello zapi 项目准备工作",
         url: "/manual/0.0.1/getstarted/prenewproject.html"
      },{
         title: "开始准备工作, 编译 zendAPI",
         url: "/manual/0.0.1/compileanddeploy/compilezendapi.html"
      }];
   }
}

$(function ()
{
   Uikit.use(UikitIcons);
   ReactDOM.render(<Header items = {SITE_CATEGORIES}/>, document.getElementById("header-wrapper"));
   ReactDOM.render(<IndexPage/>, document.getElementById("container"));
   ReactDOM.render(<Footer/>, document.getElementById("footer-wrapper"));
});
