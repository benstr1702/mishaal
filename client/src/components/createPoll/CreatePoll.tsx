import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const CreatePoll: React.FC = () => {
	return (
		<Card className="w-[450px]">
			<CardHeader>
				<CardTitle>New Poll</CardTitle>
				<CardDescription>Question</CardDescription>
			</CardHeader>

			<CardContent>
				<form>
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Input
								id="question"
								placeholder="Enter your Question"
							/>
						</div>
						<CardDescription>Options</CardDescription>
						<div className="flex flex-col space-y-3">
							<Input id="option-1" placeholder="Option 1" />
							<Input id="option-2" placeholder="Option 2" />
						</div>
						<div className="flex items-center space-x-2 ">
							<Checkbox id="select-more-options" />
							<Label
								htmlFor="select-more-options"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Allow selecting more than one option
							</Label>
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel</Button>
				<Button>Create Poll</Button>
			</CardFooter>
		</Card>
	);
};

export default CreatePoll;
