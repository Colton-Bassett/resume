"use client";

/* Core */
import Link from "next/link";
import { usePathname } from "next/navigation";

/* Other */
import styles from "./footer.module.scss";

export const Footer = () => {
	const pathname = usePathname();

	return (
		<footer className={styles.footer}>
			<div className={styles.containerOut}>
				{/* Refactor to <Image></Image> */}
				<img
					className={styles.squiggle}
					src={"/page-break-squiggle.svg"}
					alt="Footer Page Break: Navigating Towards the End of the Resume Page"
				></img>

				<section className={styles.containerIn}>
					<div className={styles.content}>
						<a href="/" className={styles.logo}>
							<h3>CB</h3>
						</a>

						<p className={styles.footerText}>
							CB is a resume service equipped with real-world
							experience, expert advice, and unmatched quality.
							Our mission is to elevate your professional journey,
							helping you build a standout career with confidence,
							leaving the details to us.
						</p>
					</div>
					<div className={styles.linksContainer}>
						<ul className={styles.links}>
							<li>
								<h5>Learn more</h5>
							</li>
							<Link
								className={`${styles.link} ${pathname === "/"}`}
								href="/"
							>
								<span className={styles.linkSpan}>Home</span>
							</Link>
							<Link
								className={`${styles.link} ${
									pathname === "/#packages"
								}`}
								href="/#packages"
							>
								<span className={styles.linkSpan}>
									Packages
								</span>
							</Link>
							<Link
								className={`${styles.link} ${
									pathname === "/about"
								}`}
								href="/about"
							>
								<span className={styles.linkSpan}>About</span>
							</Link>
						</ul>
					</div>
					<div className={styles.linksContainer}>
						<ul className={styles.links}>
							<li>
								<h5>Support</h5>
							</li>
							<Link
								className={`${styles.link} ${pathname === "/"}`}
								href="/"
							>
								<span className={styles.linkSpan}>
									Contact us
								</span>
							</Link>
							<Link
								className={`${styles.link} ${pathname === "/"}`}
								href="/"
							>
								<span className={styles.linkSpan}>
									Schedule call
								</span>
							</Link>
							<Link
								className={`${styles.link} ${
									pathname === "/#faq"
								}`}
								href="/#faq"
							>
								<span className={styles.linkSpan}>FAQ</span>
							</Link>
						</ul>
					</div>
					<div className={styles.linksContainer}>
						<ul className={styles.links}>
							<li>
								<h5>Feedback</h5>
							</li>
							<Link
								className={`${styles.link} ${pathname === "/"}`}
								href="/"
							>
								<span className={styles.linkSpan}>
									Report issue
								</span>
							</Link>
						</ul>
					</div>
				</section>
			</div>
		</footer>
	);
};
