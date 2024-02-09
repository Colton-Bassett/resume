"use client";

/* Core */
import Link from "next/link";
import Image from "next/image";
import { SpecsModal } from "./components/SpecsModal";
import Accordions from "./components/Accordion";

/* Other */
import styles from "./home.module.scss";
import ShippingIcon from "/public/iconShipping.svg";
import EditIcon from "/public/iconEdit.svg";
import CommunicationIcon from "/public/iconCommunication.svg";
import CraftingResumeImage from "/public/crafting-resume.webp";
import ResumeExplanationImage from "/public/resume-explanation.webp";
import DiscussingResumeImage from "/public/discussing-resume.webp";
import CodeIcon from "/public/iconCode.svg";

export const Home = () => {
	return (
		<div className={styles.content}>
			<section className={styles.hero}>
				<div className={styles.heroHeader}>
					<h1>
						Tech resumes. <br></br>Built just for <br></br>you.
					</h1>
					<h5>Hassle free. Satisfaction guaranteed.</h5>
				</div>
				<div
					className={styles.heroImage}
					aria-label="Smiling Professional Viewing Resumes on a Tablet."
				></div>
			</section>
			<section className={styles.packages} id="packages">
				<div className={styles.spacer}>
					<h2 className={styles.packagesHeader}>
						Three packages to support your career journey.
					</h2>
					<div className={styles.grid}>
						<div className={styles.gridThird}>
							<div className={styles.package}>
								<h4 className={styles.packageTitle}>Basic</h4>
								<div>
									<h3 className={styles.packagePrice}>$50</h3>
									<div className={styles.packageText}>
										1 page resume, feedback<br></br> and
										suggestions.
									</div>
								</div>
							</div>
						</div>
						<div className={styles.gridThird}>
							<div className={styles.package}>
								<h4 className={styles.packageTitle}>
									Standard
								</h4>
								<div>
									<h3 className={styles.packagePrice}>$75</h3>
									<div className={styles.packageText}>
										1 page resume, Linkedin review,{" "}
										<br></br>
										in-depth consultation.
									</div>
								</div>
							</div>
						</div>
						<div className={styles.gridThird}>
							<div className={styles.package}>
								<h4 className={styles.packageTitle}>Premium</h4>
								<div>
									<h3 className={styles.packagePrice}>
										$100
									</h3>
									<div className={styles.packageText}>
										1 page resume, cover letter, Linkedin
										review, extensive collaboration.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.ctaContainer}>
						<SpecsModal></SpecsModal>

						<button className={styles.cta} type="button">
							Schedule call
						</button>
					</div>
				</div>
			</section>
			<section className={styles.guarantees}>
				<div className={styles.spacer}>
					<div className={styles.grid}>
						<div className={styles.gridThird}>
							<Image
								src={ShippingIcon}
								alt="Shipping Icon: Fast and Reliable Resume Shipping for Your Convenience"
							></Image>
							<h4 className={styles.guaranteeTitle}>
								2 - 5 day delivery
							</h4>
							<div className={styles.guaranteeText}>
								Expertly crafted. Timely delivery.
							</div>
						</div>
						<div className={styles.gridThird}>
							<Image
								src={EditIcon}
								alt="Revision Icon: We Enhance, Modify, and Update Your Resume with Ease"
							></Image>
							<h4 className={styles.guaranteeTitle}>
								Unlimited revisions
							</h4>
							<div className={styles.guaranteeText}>
								Unlimited revisions. Satisfaction guaranteed.
							</div>
						</div>
						<div className={styles.gridThird}>
							<Image
								src={CommunicationIcon}
								alt="Expert Advice Icon: Connect and Communicate for Professional Resume Guidance"
							></Image>
							<h4 className={styles.guaranteeTitle}>
								Expert advice
							</h4>
							<div className={styles.guaranteeText}>
								Hands-on advice from experienced industry
								veterans.
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.tailoredSupport}>
				<div className={styles.spacer}>
					<h2 className={styles.tailoredSupportHeader}>
						Tailored. Simplicity. Success.
					</h2>
					<div className={styles.grid}>
						<div className={styles.gridHalf}>
							<div className={styles.tailoredSupportContainer}>
								<Image
									className={styles.tailoredSupportImage}
									src={CraftingResumeImage}
									alt="Young Professional Typing on Laptop: Crafting Resumes with Expertise"
								></Image>
								<div
									className={styles.tailoredSupportAccentText}
								>
									Empowering your career journey
								</div>
								<h4 className={styles.tailoredSupportText}>
									We specialize in crafting resumes tailored
									for tech giants such as Google, Amazon,
									Apple, and more. Additionally, we create
									resumes for any technical occupation,
									helping you achieve your dream job.
								</h4>
							</div>
						</div>
						<div className={styles.gridHalf}>
							<div className={styles.tailoredSupportContainer}>
								<Image
									className={styles.tailoredSupportImage}
									src={ResumeExplanationImage}
									alt="Resume Maker Explaining with Tablet: Tailoring Your Resume for Success"
								></Image>
								<div
									className={styles.tailoredSupportAccentText}
								>
									Years of tech know-how
								</div>
								<h4 className={styles.tailoredSupportText}>
									Benefit from over a decades worth of tech
									and interview experience. We provide expert
									guidance with applications, resume crafting,
									interviews and beyond.
								</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.aboutUs}>
				<div className={styles.spacer}>
					<div className={styles.aboutUsContainer}>
						<Image
							className={styles.aboutusImage}
							src={DiscussingResumeImage}
							alt="Resume Professionals Discussing Details: Crafting Customized Resumes for Excellence"
						></Image>
						<div className={styles.aboutUsContent}>
							<h2 className={styles.aboutUsHeader}>
								Quality resumes built by professionals
							</h2>
							<h4 className={styles.aboutUsSubheader}>
								A 4-year industry experienced software developer
								teams up with a 10-year veteran software
								engineer from Amazon.
							</h4>

							<Link className={`${styles.link}`} href="/about">
								<button className={styles.cta} type="button">
									Learn more about us
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.careers}>
				<div className={styles.careersContainer}>
					<div className={styles.careersImage}>
						<Image
							className={styles.codeIcon}
							src={CodeIcon}
							alt="Coding Block Icon: Expert Resume Crafting Across All Tech Fields"
						></Image>
					</div>
					<div className={styles.careersContent}>
						<div className={styles.spacer}>
							<h2>We've got you covered</h2>
							<div className={styles.careersBody}>
								<div className={styles.careersText}>
									CB is dedicated to assisting professionals
									at every phase of their journey, regardless
									of their current position. From recent grads
									to mid-levels and seniors, we provide
									services for all tech domains and roles.
								</div>
								<Link className={`${styles.link}`} href="/#faq">
									<span className={styles.linkSpan}>
										Not seeing your career field?
									</span>
								</Link>
							</div>

							<dl className={styles.careersTable}>
								<dt>Software Engineering</dt>
								<div className={styles.ddContainer}>
									<dd>Full stack</dd>
									<dd>Front end</dd>
									<dd>Back end</dd>
									<dd>Web</dd>
									<dd>Mobile</dd>
									<dd>Testing</dd>
									<dd>Analytics</dd>
									<dd>DevOps</dd>
								</div>

								<dt>Information Technology</dt>
								<div className={styles.ddContainer}>
									<dd>IT Support </dd>
									<dd>Cybersecurity</dd>
									<dd>Networking</dd>
									<dd>Databases</dd>
									<dd>Cloud systems</dd>
								</div>
								<dt>Design</dt>
								<div className={styles.ddContainer}>
									<dd>UI / UX</dd>
									<dd>Web Design</dd>
									<dd>Mobile Design</dd>
									<dd>Graphics Design</dd>
								</div>
							</dl>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.FAQ} id="faq">
				<div className={styles.spacer}>
					<h4>FAQs</h4>

					<Accordions></Accordions>
				</div>
			</section>
		</div>
	);
};
