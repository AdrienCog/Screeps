var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let spawn = Game.spawns['Spawn1'];

        if(creep.memory.isBuilding && creep.carry.energy == 0) {
            creep.memory.isBuilding = false;
        }
        if(!creep.memory.isBuilding && creep.carry.energy == creep.carryCapacity) {
            creep.memory.isBuilding = true;
        }

        if(creep.memory.isBuilding) {

            let building = creep.room.find(FIND_CONSTRUCTION_SITES, { filter: function(structure) { return structure.structureType == STRUCTURE_EXTENSION } })[0];

            if(!building) {
                building = creep.room.find(FIND_CONSTRUCTION_SITES)[0];
            }
            if(building) {
                if(creep.build(building) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(building, {visualizePathStyle: {stroke: '#00ff00'}});
                }
            }
        }
        else {
            let storage = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) && structure.energy > 0;
                }
            });
            if(storage && storage.transferEnergy(creep, creep.carryCapacity) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage, {visualizePathStyle: {stroke: '#00ff00'}});
            }
        }
    }
};

module.exports = roleBuilder;