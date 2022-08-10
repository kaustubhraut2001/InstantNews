// import { getByTitle } from "@testing-library/dom";
import React from "react";

 const NavBaritem = (props) => {

     let  {title,description,imageUrl,newsUrl,author,update} = props;

    return (
      <>
      <div>
  <div className="card" >
  <img src={!imageUrl ? "https://bsmedia.business-standard.com/_media/bs/img/article/2021-01/27/full/1611730367-2978.jpg" : imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By author :- <strong> {author?author:"Unkonwn"}</strong>  Last update at :- <strong>{update }</strong></small></p>
    <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-dark btn-sm"> Read more</a>
  </div>
</div>

      </div>
      </>
    );

}
 export default NavBaritem;
