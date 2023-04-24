export async function fetchTeamData(teamId: number) {
    const formattedTeamId = teamId.toString().padStart(2, '0');
  
    try {
      const response = await fetch(
        `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${formattedTeamId}/roster`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('error');
      return null;
    }
  }
  