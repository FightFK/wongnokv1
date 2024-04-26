import React from 'react';
import { getData } from './data';
import { 
    Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Rating,Box
} from '@mui/material'; 

export default async function page() {
    const data = await getData()
    console.log(data)
    
    return(
        <div>
        <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 2,mt:2 }}>Review Restaurant</Typography>

       
        <Grid container spacing={2}>
            {data.map(review => (
                <Grid item key={review.id} xs={12} md={4}>
                    <Card sx={{ backgroundColor: 'lightblue' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={review.coverimage}
                            title={review.sname}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {review.sname}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {review.detail}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Rating:
                            </Typography>
                            <Rating name="read-only" value={review.rating} readOnly />
                        </CardContent>
                        <CardActions>
                        <a href={`/reviews/${review.id}`}>
                            <Button size="small">Learn More</Button>
                        </a>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
    )
}
