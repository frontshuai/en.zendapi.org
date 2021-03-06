"use strict";
import "Scss/base.scss";
import "Scss/pages/api/base.scss";
import "./index.scss";
import globalSvg from "./images/global.svg";
import moduleSvg from "./images/module.svg";
import namespaceSvg from "./images/namespace.svg";

const Uikit = require("uikit");
const UikitIcons = require("uikit/dist/js/uikit-icons");
import React from "react";
import ReactDOM from "react-dom";
import Header from "Components/header/Header";
import Footer from "Components/footer/Footer";
import SidePanel from "Components/api/sidepanel/SidePanel";
import DoxygenInfo from "Components/api/doxygen/DoxygenInfo";

class ApiIndexPage extends React.Component
{
   render()
   {
      return <div style={{width:"100%"}}>
         <div className="uk-container uk-margin-small-top uk-margin-small-bottom apidoc-page-container apidoc-index-page">
            <div className="manual-container uk-flex uk-flex-left">
               <div className="side-panel-container uk-visible@m">
                  <SidePanel items = {API_CATALOG_CATEGORIES}/>
               </div>
               <div className="uk-width-expand apidoc-info-container apidoc-index-info-container">
                  <ModulesEntry items = {API_INDEX_MODULES_DATA}/>
                  <NamespacesEntry items = {API_INDEX_NAMESPACES_DATA}/>
                  <hr className="uk-divider-icon"/>
                  <DoxygenInfo version = {API_DOXYGEN_VERSION}/>
               </div>
            </div>
         </div>
      </div>;
   }
}

class ModulesEntry extends React.Component
{
   render()
   {
      let items = this.props.items;
      return <div className="module-entry">
         <div className="title">
            <img src={moduleSvg}/><h3 className="uk-width-expand">模块列表</h3>
         </div>
         <ul>
            {items.map((item, index)=><li key = {"apidocindexmodulelist"+index}><a href={item.url}>{item.name}</a></li>)}
         </ul>
      </div>;
   }
}

class NamespacesEntry extends React.Component
{
   render()
   {
      let items = this.props.items;
      return <div className="namespace-entry uk-margin-medium-top">
         <div className="title">
            <img src={namespaceSvg}/><h3>名称空间列表</h3>
         </div>
         <ul>
            {items.map((item, index) => <li key = {"apidocindexnamespacelist"+index}><a href = {item.url}>{item.name}</a></li>)}
         </ul>
      </div>;
   }
}

$(function ()
{
   Uikit.use(UikitIcons);
   ReactDOM.render(<Header items = {SITE_CATEGORIES}/>, document.getElementById("header-wrapper"));
   ReactDOM.render(<ApiIndexPage/>, document.getElementById("container"));
   ReactDOM.render(<Footer/>, document.getElementById("footer-wrapper"));
});
