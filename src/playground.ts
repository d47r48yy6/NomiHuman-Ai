import { db } from "./server/db";

await db.user.create({
    data:{
        firstName: "Ayush",
        lastName: "yadav",
        emailAddress: "211855@kit.ac.in",
    }
})
console.log("User created");