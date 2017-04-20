
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
            'count': 2,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'upgrader',
            'count': 1,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'builder',
            'count': 1,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'miner',
            'count': 2,
            'stats': [WORK,CARRY,MOVE]
        }
    ]
}

module.exports = rolesSetup;