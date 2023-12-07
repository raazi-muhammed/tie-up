import { Button } from "@/components/ui/button";
import Link from "next/link";
import Container from "@/components/ui/container";
import Navbar from "@/components/layout/navbar";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Container>
                <Button asChild variant="outline">
                    <Link href="/login">Login</Link>
                </Button>
                <Button asChild variant="outline">
                    <Link href="/signup">Sing up</Link>
                </Button>
            </Container>
        </main>
    );
}
