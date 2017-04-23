var roleMiner = {

    run: function(creep) {
        let spawn = Game.spawns['Spawn1'];

        let sourceIndex = Math.min(creep.memory.index, 1);
        let source = creep.room.find(FIND_SOURCES)[sourceIndex];
 
        let containerBuild = creep.pos.findInRange(FIND_CONSTRUCTION_SITES, 10, { 
            filter: function(structure){
                return structure.structureType == STRUCTURE_CONTAINER
            }
        })[0];

        if(creep.memory.canBuild && creep.carry.energy == 0) {
            creep.memory.canBuild = false;
        }
        if(!creep.memory.canBuild && creep.carry.energy == creep.carryCapacity) {
            creep.memory.canBuild = true;
        }

        if(containerBuild && creep.memory.canBuild) {
            if(creep.build(containerBuild) == ERR_NOT_IN_RANGE) {
                creep.moveTo(containerBuild);
            }
        }else{

            let isFull = creep.carry.energy >= creep.carryCapacity;

            if(isFull) {

                let storage = source.pos.findInRange(FIND_STRUCTURES, 10, { 
                    filter: function(structure){ 
                        return structure.structureType == STRUCTURE_CONTAINER;
                         // && structure.store < structure.storeCapacity;
                    } 
                })[0];

                if(!storage) {
                    storage = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                            return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                                structure.energy < structure.energyCapacity;
                        }
                    })[0];
                }

                if(storage) {

                    if(storage.hits < 180000) {
                        creep.say('🛠');
                        if(creep.repair(storage) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(storage, {visualizePathStyle: {stroke: '#ff0000'}});
                        }
                    }else{
                        if(creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                            creep.moveTo(storage, {visualizePathStyle: {stroke: '#ff0000'}});
                        }                        
                    }
                }
            }else{
                // HARVEST SOURCE
                creep.say('💰');
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source, {visualizePathStyle: {stroke: '#ff0000'}});
                }
            }
        }
    }
};

module.exports = roleMiner;