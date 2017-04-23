var roleMiner = require('role.miner');
var roleTransporter = require('role.transporter');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var SpawnManager = require('spawn');



module.exports.loop = function () {

    SpawnManager.check();

    let spawn = Game.spawns['Spawn1'];

    let miners = _.filter(Game.creeps, (creep) => creep.memory.role == 'miner');
    let minersRequired = 2
    let transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');
    let transportersRequired = 2

    let hasEnoughMiners = !(transporters.length < transportersRequired && !spawn.spawing)

    for(var name in Game.creeps) {

        var creep = Game.creeps[name];

        if(creep.memory.role == 'miner') {
            roleMiner.run(creep);
            continue;
        }

        if(creep.memory.role == 'transporter') {
            roleTransporter.run(creep);                
        }

        // if(transporters.length < transportersRequired && !spawn.spawing) {
        //     roleTransporter.run(creep);
        //     continue;
        // }

        if(creep.memory.role == 'upgrader') {
            if(hasEnoughMiners || creep.name == "Upgrader1") {
                roleUpgrader.run(creep);
            }else{
                roleMiner.run(creep);                
            }

        }
        if(creep.memory.role == 'builder') {
            if(hasEnoughMiners) {
                roleUpgrader.run(creep);
                // roleBuilder.run(creep);                
            }else{
                roleTransporter.run(creep);
            }

        }
        if(creep.memory.role == 'repairer') {
            if(hasEnoughMiners) {
                roleRepairer.run(creep);
            }else{
                roleTransporter.run(creep);       
            }
        }
    }
}