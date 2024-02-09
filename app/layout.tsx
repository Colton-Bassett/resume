/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./layouts/nav/Nav";
import { Footer } from "./layouts/footer/Footer";
import { Roboto } from "next/font/google";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.scss";

// yarn dev

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
});

export default function RootLayout(props: React.PropsWithChildren) {
	const mainClassName = `${styles.main} ${roboto.className}`;

	return (
		<Providers>
			<html lang="en">
				<body>
					<section className={styles.container}>
						<header className={styles.header}>
							<Nav />
						</header>

						<main className={mainClassName}>{props.children}</main>
						<Footer />
					</section>
				</body>
			</html>
		</Providers>
	);
}
