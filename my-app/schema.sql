\c postgres;

DROP DATABASE IF EXISTS nba;

CREATE DATABASE nba;

\c nba;

CREATE TABLE teams (
  "id" SERIAL PRIMARY KEY,
  "team" VARCHAR(250) NOT NULL,
  "url" VARCHAR(250) NOT NULL
);

CREATE TABLE profiles (
  "id" SERIAL PRIMARY KEY,
  BBRefName VARCHAR(250) NOT NULL,
  BBRefLink VARCHAR(250) NOT NULL,
  BBRefID VARCHAR(250) NOT NULL,
  BBRefBirthDate VARCHAR(250) NOT NULL,
  NBAName VARCHAR(250) NOT NULL,
  NBALink VARCHAR(250) NOT NULL,
  NBAID VARCHAR(250) NOT NULL,
  NBABirthDate VARCHAR(250) NOT NULL,
  ESPNName VARCHAR(250) NOT NULL,
  ESPNLink VARCHAR(250) NOT NULL,
  ESPNID VARCHAR(250) NOT NULL,
  ESPNBirthDate VARCHAR(250) NOT NULL,
  SpotracName VARCHAR(250) NOT NULL,
  SpotracLink VARCHAR(250) NOT NULL,
  SpotracID VARCHAR(250) NOT NULL
);

INSERT INTO teams (team, "url") VALUES
  ('Celtics', 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg'),
  ('Nets', 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg'),
  ('Knicks', 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg'),
  ('76ers', 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg'),
  ('Raptors', 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg'),
  ('Bulls', 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg'),
  ('Cavaliers', 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg'),
  ('Pistons', 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg'),
  ('Pacers', 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg'),
  ('Bucks', 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg'),
  ('Hawks', 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg'),
  ('Hornets', 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg'),
  ('Heat', 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg'),
  ('Magic', 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg'),
  ('Wizards', 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg'),
  ('Nuggets', 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg'),
  ('Timberwolves', 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg'),
  ('Thunder', 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg'),
  ('Trail Blazers', 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg'),
  ('Jazz', 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg'),
  ('Warriors', 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg'),
  ('Clippers', 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg'),
  ('Lakers', 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg'),
  ('Suns', 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg'),
  ('Kings', 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg'),
  ('Mavericks', 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg'),
  ('Rockets', 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg'),
  ('Grizzlies', 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg'),
  ('Pelicans', 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg'),
  ('Spurs', 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg');

\copy profiles(BBRefName, BBRefLink, BBRefID, BBRefBirthDate, NBAName, NBALink, NBAID, NBABirthDate, ESPNName, ESPNLink, ESPNID, ESPNBirthDate, SpotracName, SpotracLink, SpotracID) FROM './NBA_Player_IDs.csv' DELIMITER ',' CSV HEADER;