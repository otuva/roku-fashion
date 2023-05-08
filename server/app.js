const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// require database connection
const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");
const auth = require("./auth");
const path = require("path");

// execute database connection
dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api", (request, response, next) => {
    response.json({message: "Hey! This is your server response!"});
    next();
});

// register endpoint
app.post("/api/auth/register", async (request, response) => {
    if (!request.body.policy) {
        return response.status(403).send({
            message: "You must agree with the terms and conditions",
        });
    }

    if (!request.body.email || !request.body.password || !request.body.confirmPassword || !request.body.invitationCode) {
        return response.status(400).send({
            message: "Some values are missing",
        });
    }

    // validate email with regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(request.body.email)) {
        return response.status(400).send({
            message: "Email address is not valid",
        });
    }

    if (request.body.password !== request.body.confirmPassword) {
        return response.status(400).send({
            message: "Passwords do not match",
        });
    }

    if (request.body.invitationCode !== "123456") {
        return response.status(403).send({
            message: "Invalid Invitation Code",
        });
    }

    // check if email already exists
    const user = await User.findOne({email: request.body.email})

    if (user) {
        return response.status(400).send({
            message: "Email already exists",
        });
    }

    // hash the password
    bcrypt
        .hash(request.body.password, 10)
        .then((hashedPassword) => {
            // create a new user instance and collect the data
            const user = new User({
                email: request.body.email,
                password: hashedPassword,
            });

            // save the new user
            user
                .save()
                // return success if the new user is added to the database successfully
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // catch erroe if the new user wasn't added successfully to the database
                .catch((error) => {
                    response.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        // catch error if the password hash isn't successful
        .catch((e) => {
            response.status(500).send({
                message: "Password was not hashed successfully",
                e,
            });
        });
});

// login endpoint
app.post("/api/auth/login", (request, response) => {
    // TODO:
    // provide less information in the error message
    // make timing attack proof
    // max login attempts

    console.log(request.body);

    // check if email and password are provided
    if (!request.body.email || !request.body.password) {
        return response.status(400).send({
            message: "Some values are missing",
        });
    }

    // validate email with regex
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(request.body.email)) {
        return response.status(400).send({
            message: "Email address is not valid",
        });
    }

    // check if email exists
    User.findOne({email: request.body.email})

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match"
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "PzcG8N5P0m4IBFasMs6dMg==",
                        {expiresIn: "24h"}
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password do not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "Email not found",
                e,
            });
        });
});

app.post("/api/auth/reset", (request, response) => {
    // TODO:

    // just say disabled
    response.status(500).send({
        message: "Endpoint is currently disabled"
    });
});

app.get("/api/auth/authenticated", auth, (request, response) => {
    response.send({message: "You are authenticated", status: true});
});

app.post("/api/echo", (request, response) => {
    console.log(request.body);
    response.send(request.body);
});

// free endpoint
app.get("/api/free-endpoint", (request, response) => {
    response.json({message: "You are free to access me anytime"});
});

// authentication endpoint
app.get("/api/auth-endpoint", auth, (request, response) => {
    response.send({message: "You are authorized to access me"});
});

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
// });

module.exports = app;
