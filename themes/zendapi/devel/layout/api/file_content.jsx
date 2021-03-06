"use strict";
import "Scss/base.scss";
import "Scss/pages/api/base.scss";
import "./file_content.scss";

const Uikit = require("uikit");
const UikitIcons = require("uikit/dist/js/uikit-icons");
import React from "react";
import ReactDOM from "react-dom";
import Header from "Components/header/Header";
import Footer from "Components/footer/Footer";
import SidePanel from "Components/api/sidepanel/SidePanel";
import NamespaceSection from "Components/api/namespacesection/NamespaceSection";
import ClassSection from "Components/api/classsection/ClassSection";
import MacroSection from "Components/api/macrosection/MacroSection";
import TypedefSection from "Components/api/typedefsection/TypedefSection";
import EnumSection from "Components/api/enumsection/EnumSection";
import FuncSection from "Components/api/funcsection/FuncSection";
import MacrosInfoSection from "Components/api/macrosinfosection/MacrosInfoSection";
import VariableSection from "Components/api/variablesection/VariableSection";
import TypedefsInfoSection from "Components/api/typedefsinfosection/TypedefsInfoSection";
import EnumsInfoSection from "Components/api/enumsinfosection/EnumsInfoSection";
import FuncsInfoSection from "Components/api/funcsinfosection/FuncsInfoSection";
import VariableInfoSection from "Components/api/VariableInfoSection/VariableInfoSection";
import DoxygenInfo from "Components/api/doxygen/DoxygenInfo";

class ApiFileConetentPage extends React.Component
{
   render()
   {
      let content = this.props.content;
      return <div style={{width:"100%"}}>
         <div className="uk-container uk-margin-small-top uk-margin-small-bottom apidoc-page-container apidoc-file-content-page">
            <div className="manual-container uk-flex uk-flex-left">
               <div className="side-panel-container uk-visible@m">
                  <SidePanel items = {API_CATALOG_CATEGORIES}/>
               </div>
               <div className="uk-width-expand apidoc-info-container apidoc-file-content-info-container">
                  <h3 className="title uk-text-break">{content.name}</h3>
                  {content.includes && content.includes.length > 0 && this.renderIncludesList(content.includes)}
                  {content.briefDescription.trim() != "" && <div className="uk-text-small uk-text-break uk-margin-small-bottom uk-margin-small-top">
                     {content.briefDescription.trim()}
                  </div>}
                  {content.detailDescription.trim() != "" && <div className="uk-text-small uk-text-break uk-margin-small-bottom uk-margin-small-top">
                     {content.detailDescription.trim()}
                  </div>}
                  <NamespaceSection namespaces = {content.namespaces}/>
                  <ClassSection classes = {content.classes}/>
                  <MacroSection defines = {content.defines}/>
                  <TypedefSection typedefs = {content.typedefs}/>
                  <EnumSection enums = {content.enums}/>
                  <FuncSection funcs = {content.funcs}/>
                  <VariableSection variables = {content.variables}/>
                  <MacrosInfoSection defines = {content.defines} containerId = {content.refid}/>
                  <TypedefsInfoSection typedefs = {content.typedefs} containerId = {content.refid}/>
                  <EnumsInfoSection enums = {content.enums} containerId = {content.refid}/>
                  <FuncsInfoSection funcs = {content.funcs} containerId = {content.refid}/>
                  <VariableInfoSection variables = {content.variables} containerId = {content.refid}/>
                  <DoxygenInfo version = {API_DOXYGEN_VERSION}/>
               </div>
            </div>
         </div>
      </div>;
   }

   renderIncludesList(includes)
   {
      return <ul className="include-files">
         {includes.map((include, index) =>
            <li key = {"apifilecontentincludes"+index} className="uk-text-break">
               #include {include.local ? '"' : "<"}
               {include.url ? <a href={include.url}>{include.name}</a>:<span>{include.name}</span>}
               {include.local ? '"': ">"}
            </li>
         )}
      </ul>
   }
}


$(function ()
{
   Uikit.use(UikitIcons);
   ReactDOM.render(<Header items = {SITE_CATEGORIES}/>, document.getElementById("header-wrapper"));
   ReactDOM.render(<ApiFileConetentPage content = {API_FILE_CONTENT_DATA}/>, document.getElementById("container"));
   ReactDOM.render(<Footer/>, document.getElementById("footer-wrapper"));
   $(document).ready(function ()
   {
      if (location.hash.trim().length > 0) {
         let target = $(location.hash);
         if (target.length > 0) {
            $('html,body')
            .stop()
            .animate({scrollTop: Math.round($(location.hash).offset().top)}, 0);
         }
      }
      $(".page-scroll-trigger").each(function(){
         let targetUrl = $(this).attr('href');
         let parts = targetUrl.split('#');
         if (parts) {
            targetUrl = parts[0];
         }
         if (targetUrl == location.pathname) {
            Uikit.scroll(this);
            $(this).on('scrolled', function () {
               location.hash = parts[1];
            });
         }
      });
      $(".detail-description table").each(function ()
      {
         $(this).addClass("uk-table uk-table-divider uk-table-small uk-table-striped");
      });
      // $(".hljs").each(function(){
      //    PerfectScroller.initialize(this, {
      //       wheelSpeed: 2,
      //       wheelPropagation: true,
      //       minScrollbarLength: 20
      //    });
      // });
   });
   $(document).attr("title", window.ENTITY_NAME+" 文件详细文档");
});
