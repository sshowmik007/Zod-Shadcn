import { ThemeProvider } from "./components/ui/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";
import Users from "./users/components/Users";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<>
				<Card className="mx-auto max-w-lg mt-10">
					<CardHeader>
						<CardTitle className="text-2xl">Zod React Hook Form</CardTitle>
						<CardDescription>
							{/* Enter your email below to login to your account */}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Users />
					</CardContent>
				</Card>
			</>
		</ThemeProvider>
	);
}

export default App;
