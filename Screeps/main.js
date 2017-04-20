var roleMiner = require('role.miner');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var SpawnManager = require('spawn');


module.exports.loop = function () {

    SpawnManager.check();

    let miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');


    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'miner' || miners.length == 0) {
            roleMiner.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}