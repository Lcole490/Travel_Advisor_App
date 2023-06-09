import React , {useState} from 'react';
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from  '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List = () => {

  const classes = useStyles();
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('restaurants');

  const places = [
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'},
    {name: 'Cool Place'},
    {name: 'Best Beer'},
    {name: 'Best Steak'}]

  return (
    <div className = {classes.container}>
      <Typography variant = "h4"> Restaurants, Hotels, & Attractions Around</Typography>
      <FormControl className = {classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value = {type} onChange= {(e)=> setType(e.target.value)}>{/*This part allows user to filter out cards rendered based on type of site (Restaurant, Hotel, or Attraction) */}
          <MenuItem value = "restaurants">Restaurants</MenuItem>
          <MenuItem value = "hotels">Hotels</MenuItem>
          <MenuItem value = "attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className = {classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value = {rating} onChange= {(e)=> setRating(e.target.value)}>   {/*This part allows user to filter out cards rendered based on ratings */}
          <MenuItem value = {0}>All</MenuItem>   
          <MenuItem value = {3}>Above 3.0</MenuItem>
          <MenuItem value ={4}>Above 4.0</MenuItem>
          <MenuItem value ={4}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing = {3} className = {classes.list}>
        {places?.map((place, i)=>(
            <Grid item key ={i} xs={12}>
              <PlaceDetails place={place} />    {/*This component is each card rendered from the PlaceDetails component file */}
            </Grid>
        ))}
      </Grid>
      </div>
  )
}

export default List;