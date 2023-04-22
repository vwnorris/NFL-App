import { Card, CardContent, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App';
import { Athlete, Position } from '../util/types';

export default function PlayerCard({athlete}: {athlete: Athlete}) {
    const data = useContext(DataContext);


  return (
    <Card variant="outlined" sx={{ Width: 100}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {athlete.displayName}, <em>{athlete.jersey}</em>
        </Typography>
        <Typography variant="body2">
        {athlete.position.abbreviation}
        </Typography>
        <Typography variant="body2">
        {athlete.college ? athlete.college.name : "Unknown"}
        {/* {athlete.college.name } */}
        </Typography>
      </CardContent>
    </Card>
  )
}
