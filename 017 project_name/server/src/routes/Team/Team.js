const express = require('express');
const TeamsMulterFile = require('../../middleware/Teams/teamsMulter');
const { addTeams, readSingleteams, deleteSingleTeams } = require('../../controller/controllers');



const TeamsRoutes = express.Router();

TeamsRoutes.post('/add_teams', TeamsMulterFile, addTeams);
TeamsRoutes.get('/read_teams',readSingleteams);
TeamsRoutes.delete('/delete_single_teams/:_id',deleteSingleTeams);


module.exports = TeamsRoutes;

