var rolesSetup = require('roles');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var SpawnManager = {

    check: function() {
        let spawn = Game.spawns['Spawn1'];
        let roles = rolesSetup.lvl2;

        roles.forEach(function(creepRole) {
            let role = creepRole.role;
            let stats = creepRole.stats;
            let max = creepRole.count;
            for(var i=max-1; i>=0; i--) {
                let name = capitalizeFirstLetter(role + (i + 1))
                if(!Game.creeps[name]) {
                    spawn.createCreep(stats, name, {'role': role, 'index': i});
                }else{
                }
            }
        });
    }
};

module.exports = SpawnManager;