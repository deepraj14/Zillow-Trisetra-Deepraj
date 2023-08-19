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
          location:search
        },
        headers: {
          'X-RapidAPI-Key': 'd384080c17msh2c944c43eb814dap157bbejsnc1cba26df1bb',
          'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        }
      };
      
        
        axios.request(options).then((res)=>{setData(res.data.results)}).catch((err)=>setData([])).finally(() => {
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
    


      <div className="d-flex m-4  flex-column flex-md-row" >
        
              <ToastComponent  showToast={alert} setShowToast={setAlert}/>
              <input
                onChange={(e)=>{setSearch(e.target.value)}}
                className="form-control mb-2 me-2"
                type="search"
                placeholder="City, Neighborhood, ZIP, Address"
                aria-label="Search"
                required={true}
              />
              
              <button  onClick={()=>{handleSearch()}} className=" ps-5 pe-5 btn btn-outline-primary">
                Search
              </button>
              {isLoading && <Loader />}
            </div>
            
   
  )
}

export default SearchBar
