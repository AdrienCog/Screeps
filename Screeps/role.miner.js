var roleMiner = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let home = Game.spawns['Home'];

        if(creep.carry.energy < creep.carryCapacity) {
            let source = creep.room.find(FIND_SOURCES)[creep.memory.index];

            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
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