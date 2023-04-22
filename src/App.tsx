import logo from './logo.svg';
import React, { useState, useEffect, createContext, useContext} from 'react';
import './App.css';
import {Athlete, Data, Specialty, Position, College, Team} from './util/types'
import Grid from '@mui/material/Grid';
import { Card, ListItemSecondaryAction, Paper, Typography } from '@mui/material';
import PlayerCard from './components/PlayerCard';
import Header from './components/Header'
import { Container } from '@mui/system';

export const DataContext = createContext<Data| null>(null)

function App() {
  const [data, setData] = useState<Data | null> (null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/03/roster');
        const data = await response.json() as Data;
        setData(data);
        console.log(data)
      } catch (error) {
        console.log("error");
      }
    }
    //Players by ID: https://site.web.api.espn.com/apis/common/v3/sports/football/nfl/athletes/PLAYER_ID
    //Rosters by Team ID: https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/TEAM_ID/roster 
    fetchData();
  }, []);
  //[] = onMount

  return (
    <DataContext.Provider value={data}>
    <div className="App">
      <Header/>
      <Grid sx={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {[0, 1, 2].map((value, i) => (
              <Grid key={value} item>
                <Card
                  sx={{
                    width: 500,
                    backgroundColor: "#1A2027"
                  }}
                >
                  <Typography variant="h3" color="white">{data ? data.athletes[i].position.charAt(0).toUpperCase() + data.athletes[i].position.slice(1): null}</Typography>
                  <div>{data?.athletes[i].items.map((d: Athlete)=>{return <PlayerCard athlete={d}/> })}</div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
      </div>
    </DataContext.Provider>
  );
}

export default App;
