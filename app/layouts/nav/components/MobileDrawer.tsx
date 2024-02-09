/* Core */
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

/* Other */
import styles from "../../nav/nav.module.scss";
import MenuIcon from "/public/iconMenu.svg";
import AboutIcon from "/public/iconAbout.svg";
import FAQIcon from "/public/iconFaq.svg";
import PackageIcon from "/public/iconPackage.svg";
import MenuOpen from "/public/iconMenuOpen.svg";
import CIcon from "/public/iconC.svg";

export default function MobileDrawer() {
	const [isDrawerOpen, setDrawerOpen] = React.useState(false);

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setDrawerOpen(open);
		};

	const drawerContent = (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				width: 320,
				height: "100%",
			}}
			role="presentation"
		>
			<div className={styles.mobileListContainer}>
				<button
					className={styles.menuOpenButton}
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<Image
						className={styles.menuOpenIcon}
						src={MenuOpen}
						alt="Mobile Drawer Close Icon: Closing the Mobile Menu for Navigation"
					></Image>
				</button>
				<div className={styles.listItemContainer}>
					<Link
						className={styles.listItem}
						href="/"
						onClick={toggleDrawer(false)}
						onKeyDown={toggleDrawer(false)}
					>
						<div className={styles.listItemIconContainer}>
							<Image
								className={styles.listItemIcon}
								src={CIcon}
								alt="Mobile Drawer Home Icon: Returning to the Homepage"
							></Image>
						</div>
						<div className={styles.listItemText}>Home</div>
					</Link>
				</div>
				<div
					className={styles.listItemContainer}
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<Link className={styles.listItem} href="/#packages">
						<div className={styles.listItemIconContainer}>
							<Image
								className={styles.listItemIcon}
								src={PackageIcon}
								alt="Mobile Drawer Package Icon: Navigating to Package Information"
							></Image>
						</div>
						<div className={styles.listItemText}>Packages</div>
					</Link>
				</div>
				<div
					className={styles.listItemContainer}
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<Link className={styles.listItem} href="/about">
						<div className={styles.listItemIconContainer}>
							<Image
								className={styles.listItemIcon}
								src={AboutIcon}
								alt="Mobile Drawer About Us Icon: Navigating to About Us Information"
							></Image>
						</div>
						<div className={styles.listItemText}>About</div>
					</Link>
				</div>
				<div
					className={styles.listItemContainer}
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<Link className={styles.listItem} href="/#faq">
						<div className={styles.listItemIconContainer}>
							{" "}
							<Image
								className={styles.listItemIcon}
								src={FAQIcon}
								alt="Mobile Drawer FAQ Icon: Navigating to FAQ Information"
							></Image>
						</div>
						<div className={styles.listItemText}>FAQ</div>
					</Link>
				</div>
			</div>
			<div className={styles.mobileMenuScheduleContainer}>
				<button
					className={styles.mobileScheduleButton}
					type="button"
					aria-label="Schedule call"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<Link href="/about">Schedule call</Link>
				</button>
			</div>
		</Box>
	);

	return (
		<div className={styles.mobileDrawer}>
			<React.Fragment>
				<button
					className={styles.mobileMenuButton}
					onClick={toggleDrawer(true)}
				>
					<Image
						className={styles.menuIcon}
						src={MenuIcon}
						alt="Open Mobile Menu Icon: Navigating to Mobile Drawer Menu"
					></Image>
				</button>
				<Drawer
					open={isDrawerOpen}
					onClose={toggleDrawer(false)}
					PaperProps={{ sx: { borderRadius: "0 20px 20px 0" } }}
				>
					{drawerContent}
				</Drawer>
			</React.Fragment>
		</div>
	);
}
