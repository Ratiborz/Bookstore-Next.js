import GlobalSvgSelector from '@/assets/icons/GlobalSvgSelector';
import Link from 'next/link';
import s from './header.module.scss';

export default function Header() {
	return (
		<header className={s.header}>
			<Link href='/'>
				<h1 className={s.title}>Bookshop </h1>
			</Link>
			<div className={s.menu}>
				<a className={s.menu__a}>books</a>
				<a className={s.menu__a}>audiobooks</a>
				<a className={s.menu__a}>Stationery & gifts</a>
				<a className={s.menu__a}>blog</a>
			</div>
			<div className={s.account_svg}>
				<div className={s.user_svg}>
					<Link href='/profile'>
						<GlobalSvgSelector id='user' />
					</Link>
				</div>
				<div className={s.shop_svg}>
					<Link href='/basket'>
						<GlobalSvgSelector id='shop-bag' />
					</Link>
				</div>
			</div>
		</header>
	);
}
