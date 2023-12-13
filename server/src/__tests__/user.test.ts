import app from "../app";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import supertest from "supertest";
import User from "../modals/user.modal";

describe("User", () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());

        await User.create([
            {
                _id: "65715ff4777552d779686f57",
                email: "raazi6163@gmail.com",
                username: "raazimuhammed",
                password: "raazi123",
                createdAt: "2023-12-07T06:02:28.734Z",
                updatedAt: "2023-12-07T06:02:28.734Z",
                __v: 0,
            },
        ]);
    });
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });

    describe("Creating a user", () => {
        const url = "/api/v1/user/sign-up";
        it("should return 400 -> without data", async () => {
            const response = await supertest(app).post(url);
            expect(response.statusCode).toBe(400);
        });

        it("should return 200 -> with proper data", async () => {
            const response = await supertest(app).post(url).send({
                email: "raazi@gmail.com",
                username: "Raazi",
                password: "password",
            });
            expect(response.statusCode).toBe(200);
        });
        it("should return 400 -> if user already email or username taken", async () => {
            const response = await supertest(app).post(url).send({
                email: "raazi@gmail.com",
                username: "Raazi Muhammed",
                password: "password",
            });
            expect(response.statusCode).toBe(400);
        });
    });
    describe("User Login", () => {
        const url = "/api/v1/user/login";
        it("should return 400 -> without data", async () => {
            const response = await supertest(app).post(url).send({});
            expect(response.statusCode).toBe(400);
        });
        it("should return 404 -> if no user found", async () => {
            const response = await supertest(app)
                .post(url)
                .send({ username: "raazi", password: "hello" });
            expect(response.statusCode).toBe(404);
        });
        it("should return 401 -> if password doesn't match", async () => {
            const response = await supertest(app)
                .post(url)
                .send({ username: "raazi6163@gmail.com", password: "hello" });
            expect(response.statusCode).toBe(401);
        });
        it("should return 200 -> username and password is correct", async () => {
            const response = await supertest(app).post(url).send({
                username: "raazi6163@gmail.com",
                password: "raazi123",
            });
            expect(response.statusCode).toBe(200);
            expect(response.header["set-cookie"].length).toBe(1);
        });
    });
});
