import Header from '@/components/main-page/header/header';
import type { Metadata } from 'next';
import { Inter, Montserrat, Open_Sans } from 'next/font/google';
import 'normalize.css';
import './globals.css';

const inter = Inter({
	weight: ['400', '500'],
	subsets: ['latin'],
	variable: '--font-inter',
	preload: true
});

const open_sans = Open_Sans({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-open-sans',
	preload: true
});

const montserrat = Montserrat({
	weight: ['500', '600', '700', '900'],
	subsets: ['latin'],
	variable: '--font-montserrat',
	preload: true
});

export const metadata: Metadata = {
	title: 'Bookshop',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} ${open_sans.variable} ${montserrat.variable}`}
			>
				<div className='container'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
