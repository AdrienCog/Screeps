var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        var home = Game.spawns['Home'];

        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.transfer(home, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(home);
            }
        }
    }
};

module.exports = roleMiner;