const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe("capitalizeWords", () => {
    it("Capitalizes the first letter of each word in the input string ", () => {
        const word = "test";
        const newWord = capitalizeWords(word);
        expect(newWord).toBe("Test")
    });
});

describe("filterActiveUsers", () => {
    it("Filters active users from the array", () => {
        const users = [
            { id: 1, name: "allison", age: 35, isActive: true},
            { id: 2, name: "bob", age: 90, isActive: true},
            { id: 3, name: "jen", age: 4, isActive: false }
        ]; 
        const result = filterActiveUsers(users);
        expect(result.length).toBe(2);
        expect(result[0].name).toBe("allison");
    });
});

describe("logAction", () => {
    it("Logs an action performed by a user with a timestamp", () => {
        const action = "";
        const userName = "";
        const timeStamp = new Date().toISOString;
        expect(`userName ${userName} performed ${action} at ${timeStamp}`);
    });
});