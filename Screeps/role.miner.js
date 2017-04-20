var roleMiner = {

    run: function(creep) {
        let spawn = Game.spawns['Spawn1'];

        let source = creep.room.find(FIND_SOURCES)[creep.memory.index];
        
        let container = source.pos.findInRange(FIND_STRUCTURES, 10, { 
            filter: function(structure){ 
                return structure.structureType == STRUCTURE_CONTAINER 
            } 
        })[0];

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
                if(container) {
                    if(creep.transfer(container, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(container);
                    }
                }
            }else{
                // HARVEST SOURCE
                let source = creep.room.find(FIND_SOURCES)[creep.memory.index];
                if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
        }
    }
};

module.exports = roleMiner;