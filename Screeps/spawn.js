var SpawnManager = {

    check: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < 2) {
            var newName = Game.spawns['Home'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            console.log('Spawning new harvester: ' + newName);
        }

        if(Game.spawns['Home'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Home'].spawning.name];
            Game.spawns['Home'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Home'].pos.x + 1,
                Game.spawns['Home'].pos.y,
                {align: 'left', opacity: 0.8});
        }
    }
};

module.exports = SpawnManager;