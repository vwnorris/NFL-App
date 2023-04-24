import React from 'react';
import { Button, Grid } from '@mui/material';
import { Card, CardActionArea } from '@mui/material';


type TeamButtonProps = {
  teamId: number;
  teamName: string;
  teamLogo: string;
  onButtonClick: (id: number) => void;
};

const TeamButton: React.FC<TeamButtonProps> = ({ teamId, teamName, teamLogo, onButtonClick }) => {
  return (
    <Card
      onClick={() => onButtonClick(teamId)}
      sx={{
        maxWidth: 100,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
          transform: 'scale(1.1)',
          cursor: 'pointer',
          transition: 'all 0.3s',
        },
      }}
    >
      <CardActionArea>
        <img src={teamLogo} alt={`${teamName} logo`} width="50" height="50" />
      </CardActionArea>
    </Card>
  );
};


type TeamButtonsProps = {
  onTeamSelected: (id: number) => void;
  teamLogos: Map<number, string>;
};

const TeamButtons: React.FC<TeamButtonsProps> = ({ onTeamSelected, teamLogos }) => {
  const teams = [
    { teamName: 'Arizona Cardinals', teamId: 22 },
    { teamName: 'Atlanta Falcons', teamId: 1 },
    { teamName: 'Baltimore Ravens', teamId: 33 },
    { teamName: 'Buffalo Bills', teamId: 2 },
    { teamName: 'Carolina Panthers', teamId: 29 },
    { teamName: 'Chicago Bears', teamId: 3 },
    { teamName: 'Cincinnati Bengals', teamId: 4 },
    { teamName: 'Cleveland Browns', teamId: 5 },
    { teamName: 'Dallas Cowboys', teamId: 6 },
    { teamName: 'Denver Broncos', teamId: 7 },
    { teamName: 'Detroit Lions', teamId: 8 },
    { teamName: 'Green Bay Packers', teamId: 9 },
    { teamName: 'Houston Texans', teamId: 34 },
    { teamName: 'Indianapolis Colts', teamId: 11 },
    { teamName: 'Jacksonville Jaguars', teamId: 30 },
    { teamName: 'Kansas City Chiefs', teamId: 12 },
    { teamName: 'Las Vegas Raiders', teamId: 13 },
    { teamName: 'Los Angeles Chargers', teamId: 24 },
    { teamName: 'Los Angeles Rams', teamId: 14 },
    { teamName: 'Miami Dolphins', teamId: 15 },
    { teamName: 'Minnesota Vikings', teamId: 16 },
    { teamName: 'New England Patriots', teamId: 17 },
    { teamName: 'New Orleans Saints', teamId: 18 },
    { teamName: 'New York Giants', teamId: 19 },
    { teamName: 'New York Jets', teamId: 20 },
    { teamName: 'Philadelhphia Eagles', teamId: 21 },
    { teamName: 'Pittsburgh Steelers', teamId: 23 },
    { teamName: 'San Francisco 49ers', teamId: 25 },
    { teamName: 'Seattle Seahawks', teamId: 26 },
    { teamName: 'Tampa Bay Buccaneers', teamId: 27 },
    { teamName: 'Tennessee Titans', teamId: 10 },
    { teamName: 'Washington Commanders', teamId: 28 }
  ];

  return (
    <Grid container spacing={2} justifyContent="center">
      {teams.map((team) => (
        <Grid item key={team.teamId}>
          <TeamButton teamId={team.teamId} teamName={team.teamName} teamLogo={teamLogos.get(team.teamId) ?? ''} onButtonClick={onTeamSelected} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamButtons;



