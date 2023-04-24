import { Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App';
import { Athlete, Position } from '../util/types';

export default function PlayerCard({athlete}: {athlete: Athlete}) {
    const data = useContext(DataContext);


    return (
      <>
        <Card variant="outlined" sx={{ Width: 100 }}>
          <CardContent>
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h5" component="div">
                  {athlete.displayName}, <em>{athlete.jersey}</em>
                </Typography>
                <Typography variant="body2">
                  {athlete.position.abbreviation}
                </Typography>
                <Typography variant="body2">
                  {athlete.college ? athlete.college.name : "Unknown"}
                </Typography>
              </Grid>
              <Grid item xs={6} container justifyContent="flex-end">
                <Typography variant="body2">
                  {athlete.headshot ? (
                    <img
                    className="glow-effect"
                    src={athlete.headshot.href}
                    style={{ width: '90%', height: 'auto' }}
                    alt={athlete.displayName}
                    />
                  ) : (
                    "N/A"
                  )}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        {console.log(athlete.headshot)}
      </>
    );
    
}
