var roleMiner = require('role.miner');
var roleTransporter = require('role.transporter');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var SpawnManager = require('spawn');


module.exports.loop = function () {

    SpawnManager.check();

    let miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    let transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');

    for(var name in Game.creeps) {

        var creep = Game.creeps[name];

        if(miners.length == 0 || transporters.length == 0) {
            roleTransporter.run(creep);
            return
        }

        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
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