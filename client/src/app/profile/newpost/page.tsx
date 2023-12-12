import * as React from "react";
import Container from "@/components/ui/container";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import NewPostForm from "./components/NewPostForm";

export default function CardWithForm() {
    return (
        <main className="bg-background min-h-screen grid place-content-center">
            <Container>
                <Card className="min-w-[400px]">
                    <CardHeader>
                        <CardTitle>Create a post</CardTitle>
                        <CardDescription>Write you content</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <NewPostForm />
                    </CardContent>
                </Card>
            </Container>
        </main>
    );
}
