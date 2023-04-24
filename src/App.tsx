import  { useState, useEffect, createContext} from 'react';
import './App.css';
import {Athlete, Data} from './util/types'
import Grid from '@mui/material/Grid';
import { Card, Typography } from '@mui/material';
import PlayerCard from './components/PlayerCard';
import Header from './components/Header'
import TeamButtons from './components/TeamButtons';
import { fetchTeamData } from './util/apiReader';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './style.css'

export const DataContext = createContext<Data| null>(null)

function App() {
  const [data, setData] = useState<Data | null> (null);
  const [teamLogos, setTeamLogos] = useState<Map<number, string>>(new Map());
  const [teamId, setTeamId] = useState<number>(3);

  const teamIds = [
    22, 1, 33, 2, 29, 3, 4, 5, 6, 7, 8, 9, 34, 11, 30, 12, 13, 24, 14, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 10, 28
  ];

  useEffect(() => {
    async function fetchTeamLogos() {
      const allTeamLogos = new Map<number, string>();
      for (let i = 0; i < teamIds.length; i++) {
        const response = await fetch(
          `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamIds[i]}/roster`
        );
        const data = await response.json() as Data;
        allTeamLogos.set(teamIds[i], data.team.logo);
      }
      setTeamLogos(allTeamLogos);
    }

    fetchTeamLogos();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const teamData = await fetchTeamData(teamId);
      setData(teamData);
      console.log(teamData);
    }

    fetchData();
  }, [teamId]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#9a67ea', // Purple
      },
      secondary: {
        main: '#5c6bc0', // Grey
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: '#424242',
            borderRadius: '10px',
            padding: '16px',
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          h5: {
            fontWeight: 'bold',
          },
          body2: {
            color: '#9a67ea', // Purple
          },
        },
      },
    },
  });
  


  const handleTeamSelected = (id: number) => {
    setTeamId(id);
  };
 
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <DataContext.Provider value={data}>
    <div className="App">
      <Header/>
      
      <Grid sx={{ flexGrow: 1 }}>
      <TeamButtons onTeamSelected={handleTeamSelected} teamLogos={teamLogos} />
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
  </ThemeProvider>
  );
}

export default App;
