// Get the team list element
const teamList = document.getElementById('team-list');

// Get the player list element
const playerList = document.getElementById('player-list');

// Get the tournament list element
const tournamentList = document.getElementById('tournament-list');

// Define an array to store teams
const teams = [
  { name: 'Team Liquid', logo: 'team-liquid.jpg' },
  { name: 'Team SoloMid', logo: 'team-solo-mid.jpg' },
  { name: 'Cloud9', logo: 'team-cloud9.jpg' }
];

// Define an array to store players
const players = [
  { name: 'John Doe', team: 'Team Liquid', role: 'Top Laner' },
  { name: 'Jane Doe', team: 'Team SoloMid', role: 'Jungler' },
  { name: 'Bob Smith', team: 'Cloud9', role: 'Mid Laner' }
];

// Define an array to store tournaments
const tournaments = [
  { name: 'League of Legends World Championship', date: '2023-10-01' },
  { name: 'Dota 2 International', date: '2023-08-01' },
  { name: 'Overwatch World Cup', date: '2023-11-01' }
];

// Function to generate team HTML
function generateTeamHTML(team) {
  return `
    <li class="team" style="font-size: 24px; color: #333; font-weight: bold; flex: 1; margin: 20px;">
      <h3 style="font-size: 36px; color: #00796b;">${team.name}</h3>
      <img src="${team.logo}" alt="${team.name} logo" style="width: 100px; height: 100px; border-radius: 50%;">
    </li>
  `;
}

// Function to generate player HTML
function generatePlayerHTML(player) {
  return `
    <li class="player" style="font-size: 18px; color: #666; font-weight: normal; flex: 1; margin: 20px;">
      <h3 style="font-size: 24px; color: #00796b;">${player.name}</h3>
      <p style="font-size: 18px; color: #333;">Team: ${player.team}</p>
      <p style="font-size: 18px; color: #333;">Role: ${player.role}</p>
    </li>
  `;
}

// Function to generate tournament HTML
function generateTournamentHTML(tournament) {
  return `
    <li class="tournament" style="font-size: 24px; color: #333; font-weight: bold; flex: 1; margin: 20px;">
      <h3 style="font-size: 36px; color: #00796b;">${tournament.name}</h3>
      <p style="font-size: 24px; color: #333;">Date: ${tournament.date}</p>
    </li>
  `;
}

// Generate team HTML and add to team list
teams.forEach(team => {
  teamList.innerHTML += generateTeamHTML(team);
});

// Generate player HTML and add to player list
players.forEach(player => {
  playerList.innerHTML += generatePlayerHTML(player);
});

// Generate tournament HTML and add to tournament list
tournaments.forEach(tournament => {
  tournamentList.innerHTML += generateTournamentHTML(tournament);
});

// Make the team list, player list, and tournament list display flex
teamList.style.display = 'flex';
teamList.style.flexWrap = 'wrap';
playerList.style.display = 'flex';
playerList.style.flexWrap = 'wrap';
tournamentList.style.display = 'flex';
tournamentList.style.flexWrap = 'wrap';