
// let sourceSetup = {



// }


let rolesSetup = {
    'lvl1': [
        {
            'role': 'upgrader',
            'count': 1,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'miner',
            'count': 1,
            'stats': [WORK,CARRY,MOVE]
        }
    ],
    'lvl2': [
        {
            'role': 'transporter',
            'count': 3,
            'stats': [CARRY,CARRY,MOVE,MOVE]
        },
        {
            'role': 'upgrader',
            'count': 3,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'builder',
            'count': 4,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'miner',
            'count': 2,
            'stats': [WORK,WORK,CARRY,MOVE]
        }
    ]
}

module.exports = rolesSetup;