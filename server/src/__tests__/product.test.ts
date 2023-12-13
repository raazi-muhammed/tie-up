import supertest from "supertest";
import app from "../app";
import User from "../modals/user.modal";
import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

describe("Products", () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        await mongoose.connect(mongoServer.getUri());

        await User.create([
            {
                _id: "65715ff4777552d779686f57",
                email: "raazi@gmail.com",
                username: "raazi",
                password:
                    "$2b$10$/roIdOAq.HASp4mn.tVQXuYt7MDwxHkFcJnPoxGXPqJkOqg3b9Hba",
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

    describe("Testing Post", () => {
        describe("Adding post a", () => {
            const url = "/api/v1/post/new-post";
            const cookie = [
                "__tie-up-user=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTcxNWZmNDc3NzU1MmQ3Nzk2ODZmNTciLCJ1c2VybmFtZSI6InJhYXppIiwiaWF0IjoxNzAyNDAwMDI2LCJleHAiOjE3MDQ5OTIwMjZ9.Ri6vGU1uu3nO6ymsSraU10MwNSdV4_Y-u9TyFyTdFU4",
            ];
            it("should return 401 -> without user", async () => {
                const response = await supertest(app)
                    .post(url)
                    .send({ heading: "heading", description: "description" });
                expect(response.statusCode).toBe(401);
            });
            it("should return 400 -> without post details", async () => {
                const response = await supertest(app)
                    .post(url)
                    .set("Cookie", cookie)
                    .send({});
                expect(response.statusCode).toBe(400);

                const response1 = await supertest(app)
                    .post(url)
                    .set("Cookie", cookie)
                    .send({ heading: "heading" });
                expect(response1.statusCode).toBe(400);
            });
            it("should return 200 -> with user and post data", async () => {
                const response = await supertest(app)
                    .post(url)
                    .set("Cookie", cookie)
                    .send({ heading: "heading", description: "description" });
                expect(response.statusCode).toBe(200);
            });
        });
        describe("Getting all products", () => {
            it("should return 200 -> posts with length > 0", async () => {
                const response = await supertest(app).get(
                    "/api/v1/post/all-post"
                );
                expect(response.statusCode).toBe(200);

                const responseBody = JSON.parse(response.text);
                expect(responseBody.posts.length).toBeGreaterThan(0);

                expect(response.headers["content-type"]).toEqual(
                    expect.stringContaining("json")
                );
            });
        });
    });
});
