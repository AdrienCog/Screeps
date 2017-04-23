var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let spawn = Game.spawns['Spawn1'];

        let sourceIndex = Math.min(creep.memory.index, 1);

        let source = creep.room.find(FIND_SOURCES)[sourceIndex];
        
        let container = source.pos.findInRange(FIND_STRUCTURES, 10, { 
            filter: function(structure){ 
                return structure.structureType == STRUCTURE_CONTAINER 
            } 
        })[0];

        if(!creep.memory.isTransporting && creep.carry.energy >= creep.carryCapacity) {
            creep.memory.isTransporting = true;
        }
        if(creep.memory.isTransporting && creep.carry.energy == 0) {
            creep.memory.isTransporting = false;
        }

        if(!container) { return }

        if(creep.memory.isTransporting) {

            let storage = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                }
            })[0];

            let tower = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER && structure.energy < structure.energyCapacity);
                }
            })[0];

            if (creep.transfer(storage, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(storage, {visualizePathStyle: {stroke: '#ff0000'}});

                let roadToRepair = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                    filter: function(object){
                        return object.structureType === STRUCTURE_ROAD && (object.hits < object.hitsMax);
                    } 
                });
                creep.repair(roadToRepair);

            }
        }else{

            let amount = Math.min(creep.carryCapacity, container.capacity);

            if(creep.withdraw(container, RESOURCE_ENERGY, amount) == ERR_NOT_IN_RANGE) {
                creep.moveTo(container, {visualizePathStyle: {stroke: '#ff0000'}});
            }
        }
    }
};

module.exports = roleTransporter;