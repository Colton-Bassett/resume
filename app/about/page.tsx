/* Core */
import Image from "next/image";

/* Other */
import styles from "./about.module.scss";
import ResumeOfficeImage from "/public/resume-office.webp";
import PaymentImage from "/public/resume-payment.webp";

export default function AboutPage() {
	return (
		<div className={styles.aboutContainer}>
			<div className={styles.about}>
				<div className={styles.spacer}>
					<section className={styles.hero}>
						<div className={styles.heading}>
							<p className={styles.headingMini}>About us</p>
							<h1 className={styles.headingText}>
								For tech workers, by engineers
							</h1>
							<div className={styles.description}>
								CB's journey started in 2020, when full-stack
								engineer Colton took it upon himself to lend a
								helping hand to fellow graduates, refining and
								enhancing their resumes.
								<br></br>
								<br></br>
								Soon after, he joined forces with LM, a seasoned
								Amazon engineer. Together, their collaboration
								created resumes that opened doors to interviews
								with tech giants such as Apple, Google, and
								Meta.
								<br></br>
								<br></br>
								Inspired by the positive transformations, Colton
								and LM launched their venture in 2023, using CB
								to share their support and expertise with the
								tech community and beyond.
							</div>
						</div>
						<div className={styles.media}>
							<Image
								className={styles.headingImage}
								src={ResumeOfficeImage}
								alt="Resume Creation Space: Productive Office Space Where Expert Resumes Come to Life"
							></Image>
						</div>
					</section>
				</div>
				<div className={styles.spacer}>
					<section className={styles.profiles}>
						<div className={styles.profile}>
							<div className={styles.profileMedia}>
								<Image
									className={styles.headingImage}
									src={PaymentImage}
									alt="Colton, Full Stack Engineer and Resume Expert: Crafting Professional Resumes for Success"
								></Image>
							</div>
							<div className={styles.profileTextContainer}>
								<p className={styles.headingMini}>
									Full Stack Engineer
								</p>

								<h2 className={styles.profileHeader}>Colton</h2>
								<div className={styles.profileText}>
									Colton graduated in 2020 from Utah Tech
									University with a Computer Science degree,
									despite initially enrolling there as a
									technical writing major.
									<br></br>
									<br></br>
									Since then, he has dedicated over 4 years to
									web and mobile development across various
									software companies. His original passion for
									technical writing and helping others
									continues to fuel his role in crafting
									impactful resumes at CB.
									<br></br>
									<br></br>
									Colton has pursued 1000+ job applications
									and engaged in 250+ interviews with top-tier
									companies like Google, Amazon, Indeed, and
									Airbnb.
								</div>
							</div>
						</div>
						<div className={styles.profile}>
							<div className={styles.profileTextContainer}>
								<p className={styles.headingMini}>
									Senior Engineer
								</p>
								<h2 className={styles.profileHeader}>LM</h2>
								<div className={styles.profileText}>
									LM graduated from University of California,
									Irvine in 2016 with a degree in Computer
									Science. He then went on to work for several
									Top 500 companies before securing a spot
									with Amazon's Twitch.tv.
									<br></br>
									<br></br>
									With over 10 years of professional
									development experience, LM lends his
									expertise to CB with hands-on tech
									experience and advisory.
									<br></br>
									<br></br>
									LM has personally conducted over 50
									technical interviews, and over 250 candidate
									screenings with various Top 500 companies.
									<br></br>
									<br></br>
									He has also applied for 1000+ jobs and
									interviewed for 350+ roles, with companies
									including Google, Apple, Riot Games, and
									Netflix.
								</div>
								<p className={styles.subheadingMini}>
									*To ensure the safety and privacy of the
									individual, the abbreviation 'LM' is used in
									place of their full name.
								</p>
							</div>
							<div className={styles.profileMedia}>
								<Image
									className={styles.headingImage}
									src={PaymentImage}
									alt="LM, Resume Expert and Advisor: Guiding Your Path to Professional Success"
								></Image>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
