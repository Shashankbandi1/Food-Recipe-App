import React from 'react';
import "./Styles.css";

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


const Products = ({data}) => {
  return (
    <div className='container'>{data.map(data =>
        <div >
            <div >
            <Card sx={{ width: 345 }}>
                 <CardMedia sx={{ height: 140 }} image={data.recipe.image}/>
                
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" noWrap>
                            {data.recipe.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Total amount of Calories : {Math.floor(data.recipe.calories)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Buy</Button>
                        <Button size="small">Share</Button>
                    </CardActions>
                
                </Card>
            </div>
        </div>)}
    </div>
  )
}

export default Products;



