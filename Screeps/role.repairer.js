var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let spawn = Game.spawns['Spawn1'];

        if(creep.memory.isRepairing && creep.carry.energy == 0) {
            creep.memory.isRepairing = false;
        }
        if(!creep.memory.isRepairing && creep.carry.energy == creep.carryCapacity) {
            creep.memory.isRepairing = true;
        }

        if(creep.memory.isRepairing) {

            let structureToRepair = creep.room.find(FIND_STRUCTURES, {
                filter: function(object){
                    return object.structureType === STRUCTURE_CONTAINER && (object.hits < object.hitsMax / 2);
                } 
            })[0];

            if(!structureToRepair) {
                structureToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: function(object){
                        return object.structureType === STRUCTURE_ROAD && (object.hits > object.hitsMax / 3);
                    } 
                });
            }

            if(structureToRepair) {
                if(creep.repair(structureToRepair) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(structureToRepair, {visualizePathStyle: {stroke: '#000000'}});
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

module.exports = roleRepairer;