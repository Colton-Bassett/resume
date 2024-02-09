"use client";

/* Core */
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

/* Other */
import styles from "./nav.module.scss";
import MobileDrawer from "./components/MobileDrawer";
import CallIcon from "/public/iconCall.svg";

export const Nav = () => {
	const pathname = usePathname();

	const [isScrolled, setIsScrolled] = useState(false);

	// scrollToLink
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition >= 64);
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`${styles.navContainer} ${
				isScrolled ? styles.scrolled : ""
			}`}
			id={"nav"}
		>
			<div className={styles.logoContainer}>
				<MobileDrawer></MobileDrawer>
				<div className={styles.logo}>
					<Link
						className={`${styles.link} ${pathname === "/"}`}
						href="/"
					>
						<span className={styles.linkSpan}>CB</span>
					</Link>
				</div>
			</div>

			<nav className={styles.nav}>
				<ul className={styles.linkList}>
					<li>
						{/* <Link
							className={`${styles.link} ${
								pathname === "/verify" ? styles.active : ""
							}`}
							href="/verify"
						> */}
						<Link className={`${styles.link}`} href="/#packages">
							<span className={styles.linkSpan}>Packages</span>
						</Link>
					</li>
					<li>
						<Link
							className={`${styles.link} ${
								pathname === "/about" ? styles.active : ""
							}`}
							href="/about"
						>
							<span className={styles.linkSpan}>About</span>
						</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.end}>
				<button
					className={styles.scheduleButton}
					type="button"
					aria-label="Schedule call"
				>
					<Link href="/about">Schedule call</Link>
				</button>
				<Link
					className={styles.callButton}
					href="/about"
					aria-label="Schedule call"
				>
					<Image
						className={styles.callIcon}
						src={CallIcon}
						alt="Schedule Call Icon: Schedule Call for Expert Tech Resume Assistance"
					></Image>
				</Link>
			</div>
		</div>
	);
};
