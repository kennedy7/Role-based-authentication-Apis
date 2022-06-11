const ROLE = {
    ADMIN: "admin",
    BASIC: "basic"
}

module.exports = {
    ROLE:ROLE,
    users: [
        { id:1, name: "kennedy", role:  ROLE.ADMIN},
        { id:2, name: "john", role:  ROLE.BASIC},
        { id:3, name: "james", role:  ROLE.BASIC}
    ],
    projects: [
        { id:1, name: "kennedy's project", userId:1},
        { id:2, name: "john's project", userId:2},
        { id:3, name: "james's project", userId:3}
        
    ]
}