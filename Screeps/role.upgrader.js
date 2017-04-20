var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        let controller = creep.room.controller;
        let spawn = Game.spawns["Spawn1"];

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
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

module.exports = roleUpgrader;