import React from 'react'
import Property from '../Components/Property'
import { Row,Col} from 'react-bootstrap'
import Navbar from '../Components/Navbar'
import SearchBar from '../Components/SearchBar';
import { useState } from 'react';
import { results } from '../Data/PropertyData';
import Footer from '../Components/Footer';
const Home = () => {

  function imageExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return (http.status !== 404 && http.status!==403);

}

  const[alert,setAlert]=useState(false);
  const[data,setData]=useState(results);
  
 
  return (
    <div>
      <Navbar />
      <SearchBar setData={setData} alert={alert} setAlert={setAlert} />
      <Row className="row m-0">
        {data.map((e, index) => {
          if (imageExists(e.imgSrc)) {
            return (
              <Col key={index} className="m-2 justify-content-center d-flex">
                <Property details={e} />
              </Col>
            );
          }
          return null;
        })}
      </Row>
      <Footer/>
    </div>
  );
}







export default Home
