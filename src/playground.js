"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./server/db");
await db_1.db.user.create({
    data: {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "211855@kit.ac.in",
    }
});
console.log("User created");
