import React, { useState} from 'react'
import axios from 'axios';
import Toast from 'react-bootstrap/Toast';

import ToastComponent from './Toast';
import './Loader.css'
const SearchBar = ({setData,alert,setAlert}) => {


    const [search,setSearch]=useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    
    
    const handleSearch=()=>{

      if(search===""){
       
        setAlert(true);
        return;
      }
      setIsLoading(true);
      const options = {
        method: 'GET',
        url: 'https://zillow56.p.rapidapi.com/search',
        params: {
          location: search
        },
        headers: {
          'X-RapidAPI-Key': '922d98a2afmsh25f0afd2ff396bcp11a94ejsnd702f5858373',
          'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
      };
      
        
        axios.request(options).then((res)=>{console.log(res.data.results);setData(res?.data?.results)}).catch((err)=>setData([])).finally(() => {
          setIsLoading(false);
        });;
        
    }



    function Loader() {
      return (
        <div className="loader-container">
          <div className="loader"></div>
          <div>Loading...</div>
        </div>
      );
    }
  return (
    


    <div className="d-flex m-4 flex-column flex-md-row align-items-center justify-content-center">
    <ToastComponent showToast={alert} setShowToast={setAlert} />
    <input
      onChange={(e) => { setSearch(e.target.value); }}
      className="form-control  me-2"
      type="search"
      placeholder="City, Neighborhood, ZIP, Address"
      aria-label="Search"
      required={true}
    />
    
    <button onClick={() => { handleSearch(); }} className="btn btn-outline-primary m-0">
      Search
    </button>
    
    {isLoading && <Loader />}
  </div>
            
   
  )
}

export default SearchBar
