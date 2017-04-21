var roleTransporter = {

    /** @param {Creep} creep **/
    run: function(creep) {
        let spawn = Game.spawns['Spawn1'];

        let source = creep.room.find(FIND_SOURCES)[creep.memory.index];
        
        let container = source.pos.findInRange(FIND_STRUCTURES, 10, { 
            filter: function(structure){ 
                return structure.structureType == STRUCTURE_CONTAINER 
            } 
        })[0];
        if(!container) { return }

        let isFull = creep.carry.energy >= creep.carryCapacity;

        if(isFull) {
            if(creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(spawn);
            }
        }else{

            let amount = Math.min(creep.carryCapacity, container.capacity);

            if(creep.withdraw(container, RESOURCE_ENERGY, amount) == ERR_NOT_IN_RANGE) {
                creep.moveTo(container);
            }
        }
    }
};

module.exports = roleTransporter;