var rolesSetup = require('roles');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var SpawnManager = {

    check: function() {
        var home = Game.spawns['Home'];

        let roles = rolesSetup.lvl2;

        roles.forEach(function(creepRole) {
            let role = creepRole.role;
            let stats = creepRole.stats;
            for(var i=0; i<creepRole.count; i++) {
                let name = capitalizeFirstLetter(role + (i + 1))
                if(!Game.creeps[name]) {
                    home.createCreep(stats, name, {'role': role, 'index': i});
                }else{
                }
            }
        });
        
        // for(var name in Memory.creeps) {
        //     if (name in allNames) {
        //     }else{
        //         delete Memory.creeps[name];
        //     }
        // }

        // console.log(allNames);

        // for(var name in Memory.creeps) {
        //     if(!Game.creeps[name]) {
        //         delete Memory.creeps[name];
        //         console.log('Clearing non-existing creep memory:', name);
        //     }
        // }

        // let roleNb = {
        //     'builder': 5,
        //     'upgrader': 4,
        //     'harvester': 2,
        //     'transporter': 2 
        // }


        // let buildersNbRequired = 10
        // let upgradersNbRequired = 6
        // let nbHarvestersRequired = 2
        // let nbTransportersRequired = 2


        // var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        // var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        // var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        // var transporters = _.filter(Game.creeps, (creep) => creep.memory.role == 'transporter');

        // if(builders.length < buildersNbRequired) {
        //     var newName = home.createCreep([WORK,WORK,CARRY,CARRY,MOVE], undefined, {role: 'builder'});
        //     console.log('Spawning new builder: ' + newName);
        // }

        // if(upgraders.length < upgradersNbRequired) {
        //     var newName = home.createCreep([WORK,WORK,CARRY,CARRY,MOVE], undefined, {role: 'upgrader'});
        //     console.log('Spawning new upgrader: ' + newName);
        // }

        // if(transporters.length < roleNb['transporter']) {
        //     var newName = home.createCreep([CARRY,CARRY,MOVE,MOVE], undefined, {role: 'transporter'});
        //     console.log('Spawning new transporter: ' + newName);
        // }

        // if(harvesters.length < harvestersNbRequired) {
        //     var newName = home.createCreep([CARRY,CARRY,WORK,WORK], undefined, {role: 'harvester'});
        //     console.log('Spawning new harvester: ' + newName);
        // }

        // if(home.spawning) {
        //     var spawningCreep = Game.creeps[home.spawning.name];
        //     home.room.visual.text(
        //         '🛠️' + spawningCreep.memory.role,
        //         home.pos.x + 1,
        //         home.pos.y,
        //         {align: 'left', opacity: 0.8});
        // }
    }
};

module.exports = SpawnManager;