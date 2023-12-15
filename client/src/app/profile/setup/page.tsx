import React from "react";
import SetUpForm from "./components/SetUpForm";
import Container from "@/components/ui/container";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

const page = () => {
    return (
        <main className="bg-background min-h-screen grid place-content-center">
            <Container>
                <Card className="min-w-[25rem] p-6 pt-8">
                    <CardHeader>
                        <CardTitle>Set up your profile</CardTitle>
                        <CardDescription>
                            to set up your profile please fill out the details
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <SetUpForm />
                    </CardContent>
                </Card>
            </Container>
        </main>
    );
};

export default page;
