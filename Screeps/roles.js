
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
            'role': 'builder',
            'count': 1,
            'stats': [WORK,CARRY,MOVE]
        },
        {
            'role': 'transporter',
            'count': 0,
            'stats': [CARRY,CARRY,MOVE]
        },
        {
            'role': 'upgrader',
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