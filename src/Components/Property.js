import React from "react";
import HomeCarousel from "./HomeCarousel";
import Card from "react-bootstrap/Card";
import './Property.css'

const Property = ({details}) => {

  // const dataa = [
  //   "https://photos.zillowstatic.com/fp/f7903f74765b1030651f29e5945371af-p_e.webp",
  //   "https://photos.zillowstatic.com/fp/f7903f74765b1030651f29e5945371af-p_e.webp",
  //   "https://photos.zillowstatic.com/fp/f7903f74765b1030651f29e5945371af-p_e.webp",
  //   "https://photos.zillowstatic.com/fp/f7903f74765b1030651f29e5945371af-p_e.webp",
  // ];

  // const price=<b>$160,000</b>
  // const address="9036 Sara Ln, Shreveport, LA 71118";
  // const details=<><b>3</b> bd | <b>2</b> ba1 | <b>1,796</b> sqft"</>
  // const owner="LATTER & BLUM - PERKINS";

  

       //console.log(details);
     
        const image=details.imgSrc;
        
        const price="$"+details.price;
        const address=details.streetAddress;
        const owner=details.city+","+details.country;
        const bathrooms=details.bathrooms;
        const bedrooms=details.bedrooms;
        const livingArea =details.livingArea
        const lotAreaUnit =details.lotAreaUnit
        
        const specifications=<><b>{bedrooms}</b> bds | <b>{bathrooms}</b> ba | <b>{livingArea}</b> {lotAreaUnit} | House For Sale</>

   


  return (
    <div className="justify-content-center">

    
    
      <Card  className="m-0 align-items-center" style={{ width: "20rem" ,border:"1px solid gray"}}>

        <div >
        <HomeCarousel data={[image,image,image,image]}/>
        </div>
        
        <Card.Body>
          <Card.Title className="c"><b>{price}</b></Card.Title>
          <Card.Text className="card-text">
           {specifications}
          </Card.Text>
          <Card.Text className="card-text">
           {address}
          </Card.Text>
          <Card.Text className="card-text owner">
           {owner}
          </Card.Text>
        </Card.Body>
      </Card>

      </div>
   
  );
};

export default Property;
