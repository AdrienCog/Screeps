var SpawnManager = {

    check: function() {

        let buildersNbRequired = 6
        let upgradersNbRequired = 6
        let harvestersNbRequired = 6


        var home = Game.spawns['Home'];

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length + ', Builders: ' + builders.length + ', Upgraders: ' + upgraders.length);

        if(builders.length < 6) {
            var newName = home.createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            console.log('Spawning new builder: ' + newName);
        }

        if(upgraders.length < 6) {
            var newName = home.createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            console.log('Spawning new upgrader: ' + newName);
        }

        if(harvesters.length < 6) {
            var newName = home.createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }

        if(home.spawning) {
            var spawningCreep = Game.creeps[home.spawning.name];
            home.room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                home.pos.x + 1,
                home.pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
};

module.exports = SpawnManager;