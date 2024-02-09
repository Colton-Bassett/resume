/* Core */
import * as React from "react";
import { styled } from "@mui/material/styles";

/* Other */
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import IconExpand from "/public/IconExpand.svg";
import Image from "next/image";

// accordion
const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	borderTop: `1px solid #dadce0`,
	borderBottom: `1px solid #dadce0`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&:before": {
		display: "none",
	},
}));

// accordion header
const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={
			<Image
				src={IconExpand}
				height={40}
				width={40}
				alt="Expand Icon"
			></Image>
		}
		{...props}
	/>
))(({ theme }) => ({
	color: "#188038",
	padding: "22px 0px 22px 0px",
}));

// accordion text
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: "24px 60px 24px 0px",
	borderTop: "1px solid rgba(0, 0, 0, .125)",
	color: "#5f6368",
}));

export default function Accordions() {
	const [expanded, setExpanded] = React.useState<string | false>("");

	const handleChange =
		(panel: string) =>
		(event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<div>
			<Accordion
				expanded={expanded === "panel1"}
				onChange={handleChange("panel1")}
			>
				<AccordionSummary
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<Typography>
						What happens when I schedule an appointment?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						When you schedule an appointment, we'll reach out to you
						at the designated time to discuss your existing resume,
						past accomplishments, and your aspirations for your
						career ahead.
						<br></br>
						<br></br>
						We'll also provide current insights into the tech
						industry and interview landscape, addressing any
						inquiries you might have about your job pursuit.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}
			>
				<AccordionSummary
					aria-controls="panel2d-content"
					id="panel2d-header"
				>
					<Typography>Do you write resumes from scratch?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Absolutely! Crafting an impressive tech resume from the
						ground up is well within our expertise. Alternatively,
						If you already have a resume, we can review, revise, and
						offer valuable insight to make it shine.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}
			>
				<AccordionSummary
					aria-controls="panel3d-content"
					id="panel3d-header"
				>
					<Typography>
						What if I don’t understand the feedback?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						No worries! Feel free to reach out to us anytime for
						clarification. Ensuring your complete comprehension of
						your review and resume is our top priority.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}
			>
				<AccordionSummary
					aria-controls="panel4d-content"
					id="panel4d-header"
				>
					<Typography>
						What kinds of tech roles do you specialize in?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Our expertise spans a wide range of tech roles. We’ve
						applied to nearly every kind of engineering and IT
						position before. We’ve interviewed and worked in mobile
						and web development, application development, front end,
						back end, and full stack positions. We’ve also done
						research and software engineering at university labs,
						startups, and established corporations.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel5"}
				onChange={handleChange("panel5")}
			>
				<AccordionSummary
					aria-controls="panel5d-content"
					id="panel5d-header"
				>
					<Typography>
						How much time do you spend on the review?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Typically, we invest more than 3 hours in reviewing your
						resume, around 1 hour for your LinkedIn profile, and
						another hour for the cover letter.
						<br></br>
						<br></br>Throughout this process, we assess formatting,
						organization, wording, and technical nuances to enhance
						every facet of your application portfolio.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
