import React from 'react'
import { getData } from './data'
import { 
  Container, Card, CardActions, CardContent, CardMedia, Button, Typography,Rating
} from '@mui/material';

export default async function page({ params }){
  const id = params.id
  const data = await getData(id)
  console.log(data)
  return (
    <Container maxWidth="md" sx={{ mt: 2 }}>
      { data.length > 0 &&
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].sname}
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 400 }}
            image={data[0].coverimage}
            title={data[0].name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {data[0].detail}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                                Rating:
                            </Typography>
                            <Rating name="read-only" value={data[0].rating} readOnly />
          </CardContent>
        </Card>
      }
    </Container>
  )
}