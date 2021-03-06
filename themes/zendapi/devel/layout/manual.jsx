"use strict";
/*
 * TopJs Framework (http://www.topjs.org/)
 *
 * @link      http://github.com/qcoreteam/topjs for the canonical source repository
 * @copyright Copyright (c) 2016-2017 QCoreTeam (http://www.qcoreteam.org)
 * @license   http://www.topjs.org/license/new-bsd New BSD License
 */
import "Scss/base.scss";
import "Scss/pages/manual.scss";
const Uikit = require("uikit");
const UikitIcons = require("uikit/dist/js/uikit-icons");
import React from "react";
import ReactDOM from "react-dom";
import Header from "Components/header/Header";
import Footer from "Components/footer/Footer";
import ManualPanel from "Components/manual/ManualPanel";
let hljs = require('highlight.js');

class ManualPage extends React.Component
{
   render()
   {
      return <div style={{width:"100%"}}>
         <div className="uk-container uk-margin-small-top uk-margin-small-bottom manual-page-container">
            <ManualPanel renderType={MANUAL_PAGE_TYPE} catalog={MANUAL_CATALOG_DATA} doc = {MANUAL_DATA}/>
         </div>
      </div>;
   }
}

$(function ()
{
   Uikit.use(UikitIcons);
   ReactDOM.render(<Header items = {SITE_CATEGORIES}/>, document.getElementById("header-wrapper"));
   ReactDOM.render(<ManualPage/>, document.getElementById("container"));
   ReactDOM.render(<Footer/>, document.getElementById("footer-wrapper"));
   $(document).ready(function() {
      $('pre code').each(function(i, block) {
         hljs.highlightBlock(block);
      });
   });
});