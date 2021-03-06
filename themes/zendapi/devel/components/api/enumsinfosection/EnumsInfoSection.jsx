import "../scss/BaseInfoSection.scss";
import "./EnumsInfoSection.scss";
import React from "react";
import linkSvg from "../images/link.svg";

export default class EnumsInfoSection extends React.Component
{
   render()
   {
      let enums = this.props.enums;
      let cid = this.props.containerId;
      let tobeRendered = [];
      enums.map(function (item)
      {
         if (item.containerId == cid) {
            tobeRendered.push(item);
         }
      });
      return <div className={tobeRendered.length != 0 ? "uk-margin-medium-top section-info-item-container enum-section-info-item-container" : "uk-hidden"}>
         <div className="section-title uk-margin-medium-bottom">
            <h3>枚举类型详细文档</h3>
         </div>
         {tobeRendered.map((item, index) =>
            <div className="section-item uk-margin-medium-bottom" key = {"enuminfosectionitem"+index}>
               <a id={item.id}/>
               <div className="uk-flex uk-flex-wrap section-item-name-wrapper uk-margin-small-top">
                  <div className="uk-width-1-1 uk-width-1-2@s section-item-name uk-text-break">
                     <a href={"#"+item.id}><img src={linkSvg}/></a>
                     <span>{item.name}</span></div>
                  {item.tags && item.tags.length > 0 && this.renderTags(item.tags)}
               </div>
               <div className="uk-background-muted uk-text-break uk-margin-small-top enum-definition definition uk-flex uk-flex-left uk-flex-wrap">
                  enum&nbsp;{item.isStrong && "class"}&nbsp;{item.name}&nbsp;{item.underType && " : "+item.underType}
               </div>
               <div className="uk-text-break uk-margin-small-top">
                  #include &lt;<a href={item.containerRef.url}>{item.location.file}</a>&gt;
               </div>
               {item.briefDescription.length > 0 && <div className="uk-margin-small-top uk-text-break"
                                                         dangerouslySetInnerHTML={{__html:item.briefDescription}}></div>}
               {item.detailDescription.length > 0 && <div className="uk-margin-small-top uk-text-break"
                                                          dangerouslySetInnerHTML={{__html:item.detailDescription}}></div>}

               <table className="uk-table uk-table-responsive uk-table-small uk-table-divider">
                  <thead>
                  <tr>
                     <th>枚举项名称</th>
                     <th>枚举项描述</th>
                  </tr>
                  </thead>
                  <tbody>
                  {item.enumValues && item.enumValues.map(function(enumItem, index){
                     return <tr key={"enuminfosectionenumitem"+index}>
                        <td className="uk-width-1-3 uk-text-break"><a id={item.id}/>{enumItem.name}</td>
                        <td className="uk-width-2-3" dangerouslySetInnerHTML={{__html:enumItem.briefDescription}}></td>
                     </tr>;
                  })}
                  </tbody>
               </table>
               <div className="uk-margin-small-top uk-text-break">
                  在文件 <span className="uk-text-success">{item.location.file.substring(8)}</span> 的第 <span className="uk-text-success">{item.location.line}</span> 行定义
               </div>
            </div>
         )}
      </div>;
   }
   renderTags(tags)
   {
      return <div className="uk-width-1-1 uk-width-1-2@s tags uk-flex uk-flex-right uk-text-middle">
         {tags.map((tag, index) => <span className="uk-label uk-label-success" key = {"enumsinfosectiontags"+index}>{tag}</span>)}
      </div>;
   }
};