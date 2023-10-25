
import './App.css';
import React,{useState} from 'react';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';

function Home() {

  const [search , setSearch] = useState("");
  const [data , setData]  = useState([]);
  const YOUR_APP_ID = "c89e735a";
  const YOUR_APP_KEY = "87f4510147a5748673cb7b37120129b0";
  const [showSearchBox, setShowSearchBox] = useState(true);


  function onChangeHandler(event){
    setSearch(event.target.value)
  }
  function onClickHandler(){ 
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=48&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(data => {
      setShowSearchBox(false)
      setData(data.hits);
    })
    
  }

  const goBack = () => {
    setShowSearchBox(true);
  }
  return (
    <div >
      <Header /><br />
      <center>
        {showSearchBox ? <>
        <div>
          <TextField onChange={onChangeHandler} type='text' value={search}  label="Search" variant="outlined" />
          <div><br />
            <Button onClick={onClickHandler}  variant="contained"> Search </Button><br />
          </div>
        </div><br /><br /><br />
        </> : 
        <Button onClick={goBack}>Go Back to Search</Button>}
        
        {data.length>=1 ? <Products data={data}/>: null}
        
        
      </center>
      
      <Footer />
    </div>
    
  );
}

export default Home;
