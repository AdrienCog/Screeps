var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let spawn = Game.spawns['Spawn1'];

        if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
        }
        if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
            creep.memory.building = true;
        }

        if(creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            let building = creep.pos.findClosestByPath(FIND_STRUCTURES, { filter: function(structure){ return structure.structureType == STRUCTURE_CONTAINER } });
            if(!building) {
                building = spawn;
            }
            building = spawn;
            if(building.transferEnergy(creep, creep.carryCapacity) == ERR_NOT_IN_RANGE) {
                creep.moveTo(building, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleBuilder;