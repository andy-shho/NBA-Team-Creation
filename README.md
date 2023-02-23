NBA Team Creation
=================================
A Passionate Personal Project

Overview:
---------
NBA Team Creation is a personal project that allows users to search for a current NBA player and view their player information and statistics for the current season. Users are able to add this player to their respective position on the team, and the total statistics of the created team will be displayed.

**[Demo](https://youtu.be/JW_WZA3yM_g)**

![GIF expired](https://recordit.co/g2fDHMGgjB](http://g.recordit.co/g2fDHMGgjB.gif)


Component Details:
-----------------
Player Information 
-----------------

The player information displays the details and statistics of the selected player. This component includes:
  * Search bar that allows users to search up players by first and last name
  * Image of player 
  * Current team and its logo
  * Current season statistics (points, rebounds, assists, steals, blocks)

Team Construction
-----------------
Team Construction allows for users to add a specific player into their fantasy team lineup and determine the total statistics of the team. This component includes:
  * Individual add buttons for each position (Point Guard, Shooting Guard, Small Forward, Power Forward, Center)
  * Player cards that display photo of player when added on the fantasy team
  * Reset team button that removes all players from the fantasy team

Built With:
-------------
* [React](https://reactjs.org/)
* [Node](https://nodejs.dev/en/)
* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)
* [MUI](https://mui.com/)
* [Axios](https://www.axios.com/)

Installation:
-------------
To get a local copy up and running follow these simple steps:

Pre-Installation Requirements:
```
Node v16.16.0
NPM 8.11.0
```
Instructions:
1. Clone the repo

`git clone https://github.com/andy-shho/NBA-Team-Creation.git`

2. Move to my-app folder

`cd my-app/`

2. Install NPM packages

`npm install`

3. Import NBA_Player_IDs.csv from (https://github.com/djblechn-su/nba-player-team-ids/blob/master/NBA_Player_IDs.csv)

4. In the terminal, model the data

`npm run schema`

5. In one terminal, compile Build

`npm run build`

5. In a second terminal, start the Server

`npm run server`

6. Navigate to localhost:3000 in your browser
