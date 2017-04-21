var roleMiner = require('role.miner');
var roleTransporter = require('role.transporter');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var SpawnManager = require('spawn');


module.exports.loop = function () {

    SpawnManager.check();

    let spawn = Game.spawns['Spawn1'];

    let miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    let minersRequired = 2
    let transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
    let transportersRequired = 3

    for(var name in Game.creeps) {

        var creep = Game.creeps[name];

        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
            continue;
        }

        if(transporters.length < transportersRequired && !spawn.spawing) {
            roleTransporter.run(creep);
            continue;
        }

        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);
        }

        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}