import "./ClassSection.scss";
import "./BaseClassSection.scss";
import React from "react";

export default class BaseClassSection extends React.Component
{
   render()
   {
      let baseClasses = this.props.baseClasses;
      return <div className={baseClasses && baseClasses.length != 0 ? "class-section-item-container baseclasses-class-section-item-container" : "uk-hidden"}>
         <h3>继承基类列表</h3>
         <table className="uk-table uk-table-responsive uk-table-small uk-table-divider">
            <tbody>
            {baseClasses && baseClasses.map(function(cls, index){
               return <tr key={"classsectionbaseclasses"+index}>
                  <td className="uk-width-1-3 uk-text-break"><a href={cls.url}>{cls.name}</a></td>
                  <td className="uk-width-2-3">
                     {cls.tags && cls.tags.length > 0 && cls.tags.map((tag, index) =>
                        <span className="uk-label uk-label-success" key = {"classsectionbaseclassestags"+index}>{tag}</span>)}
                  </td>
               </tr>;
            })}
            </tbody>
         </table>
      </div>;
   }
};