function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// function for: 3.1 Retrieve Player Information for points scored and shoe size
function numPointsScored(playerName){
    const stats = playerStats(playerName);
    if (stats) {
        return stats.points
    } else {
        return null;
    }
}

function shoeSize(playerName ) {
    const stats = playerStats(playerName);
    if (stats) {
        return stats.shoe
    } else {
        return null;
    }
} 

// function for: 3.2 Retrieve Team Information
function teamColors(teamName) {
    const data = gameObject();
    if (data.home.teamName === teamName){
        return data.home.colors;
    }
    if (data.away.teamName === teamName){
        return data.away.colors;
    }
}

function teamNames() {
    const data = gameObject();
    // declare array
    let namesArray = [];
    let homeName = data.home.teamName;
    namesArray.push(homeName);
    // declare array
    let awayName = data.away.teamName;
    namesArray.push(awayName);
    //return it
    return namesArray;
}

// function for 3.3 Retrieve Player Numbers and Stats
function playerNumbers(teamName) {
    const data = gameObject();
    // declare array and initialize variable
    let numbers = [];
    let selectedTeam;

    // find the teams that match to names
    if (data.home.teamName === teamName) {
        selectedTeam = data.home;
    } else {
        selectedTeam = data.away;
    }

    // loop through the player object
    for(let name in selectedTeam.players) {
        let playerObj = selectedTeam.players[name];
        numbers.push(playerObj.number);
    }

    // return it
    return numbers;
}

function playerStats(playerName){
    const data = gameObject();

    // check the home team players
    for(let name in data.home.players) {
        if (name === playerName) {
            return data.home.players[name];
        }
    }

    // same for the away team
    for(let name in data.away.players) {
        if (name === playerName) {
            return data.away.players[name];
        }
    }

    return null;
}

// function for 3.4 Advanced Challenge
function bigShoeRebounds() {
    const data = gameObject();
    // define and initialize
    let biggestShoeSize = 0;
    let reboundsResult = 0;

    //check for home
    for(let name in data.home.players) {
        let player = data.home.players[name];
        if (player.shoe > biggestShoeSize) {
            biggestShoeSize = player.shoe;
            reboundsResult = player.rebounds;
        }
    }

    // also for away team
    for(let name in data.away.players) {
        let player = data.away.players[name];
        if (player.shoe > biggestShoeSize) {
            biggestShoeSize = player.shoe;
            reboundsResult = player.rebounds;
        }
    }

    // return it
    return reboundsResult;
}
