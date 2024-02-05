import GlobalSvgSelector from '@/assets/icons/GlobalSvgSelector';
import s from './header.module.scss';

export default function Header() {
	return (
		<header className={s.header}>
			<h1 className={s.title}>Bookshop</h1>
			<div className={s.menu}>
				<a className={s.menu__a}>books</a>
				<a className={s.menu__a}>audiobooks</a>
				<a className={s.menu__a}>Stationery & gifts</a>
				<a className={s.menu__a}>blog</a>
			</div>
			<div className={s.account_svg}>
				<div className={s.user_svg}>
					<GlobalSvgSelector id='user' />
				</div>
				<div className={s.shop_svg}>
					<GlobalSvgSelector id='shop-bag' />
				</div>
			</div>
		</header>
	);
}
