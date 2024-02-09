/* Core */
import * as React from "react";
import Image from "next/image";
import { Modal, Box } from "@mui/material";

/* Other */
import styles from "./specsmodal.module.css";
import CloseIcon from "/public/iconClose.svg";

const modalContentStyle = {
	padding: "0px",
	bgcolor: "background.paper",
	boxShadow: 24,
	"& .MuiModal-root": { margin: "24px" },
};

const Done = () => {
	return (
		<img
			className={styles.done}
			src={"/iconDone.svg"}
			alt="Included Checkmark Icon: Comprehensive Features in Our Resume Package"
		/>
	);
};

const NotDone = () => {
	return (
		<img
			className={styles.done}
			src={"/iconNotDone.svg"}
			alt="Not Included Checkmark Icon: Features Not Included in This Resume Package"
		/>
	);
};

export const SpecsModal = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<div className={styles.modalContainer}>
			<button
				className={styles.ctaMedium}
				type="button"
				onClick={handleOpen}
			>
				See full specs
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				sx={{
					"&": {
						// your root styles but with higher CSS specificity
					},
					"&.MuiModal-root": {
						margin: "48px",
						overflow: "scroll",
					},
				}}
			>
				<Box sx={modalContentStyle}>
					<h2 className={styles.modalHeader}>
						Technical specifications
						<Image
							src={CloseIcon}
							className={styles.closeButton}
							alt="Close Icon: Exiting the Modal to Resume Your Journey"
							onClick={handleClose}
						></Image>
					</h2>
					<div className={styles.modalTableWrapper}>
						<table className={styles.modalTable}>
							<thead>
								<tr>
									<th className={styles.modalHeadline}></th>
									<th className={styles.modalHeadline}>
										<div>Basic</div>
										<div
											className={
												styles.modalHeadlineSubtext
											}
										>
											1 PAGE RESUME
										</div>
									</th>
									<th className={styles.modalHeadline}>
										<div>Standard</div>
										<div
											className={
												styles.modalHeadlineSubtext
											}
										>
											1 PAGE RESUME AND <br></br>LINKEDIN
										</div>
									</th>
									<th className={styles.modalHeadline}>
										<div>Premium</div>
										<div
											className={
												styles.modalHeadlineSubtext
											}
										>
											1 PAGE RESUME AND COVER <br></br>
											LETTER AND LINKEDIN
										</div>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										Editable file
										<p>PDF, .docx</p>
									</td>

									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
								</tr>
								<tr>
									<td>Review and critique</td>
									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
								</tr>
								<tr>
									<td>Edit and rewrite</td>
									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
								</tr>
								<tr>
									<td>Optimize Linkedin</td>
									<td>
										<NotDone></NotDone>
									</td>
									<td>
										<Done></Done>
									</td>
									<td>
										<Done></Done>
									</td>
								</tr>
								<tr>
									<td>
										Cover letter
										<p>1 page</p>
									</td>
									<td>
										<NotDone></NotDone>
									</td>
									<td>
										<NotDone></NotDone>
									</td>
									<td>
										<Done></Done>
									</td>
								</tr>
								<tr>
									<td>
										<span className={styles.tdText}>
											{" "}
											Revisions
										</span>
									</td>
									<td>
										<span className={styles.tdText}>
											{" "}
											Unlimited
										</span>
									</td>
									<td>
										<span className={styles.tdText}>
											{" "}
											Unlimited
										</span>
									</td>
									<td>
										<span className={styles.tdText}>
											{" "}
											Unlimited
										</span>
									</td>
								</tr>
								<tr>
									<td>Delivery</td>
									<td>
										<span className={styles.tdText}>
											2 days
										</span>
									</td>
									<td>
										<span className={styles.tdText}>
											3 days
										</span>
									</td>
									<td>
										<span className={styles.tdText}>
											5 days
										</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</Box>
			</Modal>
		</div>
	);
};
