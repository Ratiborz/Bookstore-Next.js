import GlobalSvgSelector from '@/assets/icons/GlobalSvgSelector';
import Image from 'next/image';
import s from './swiper.module.scss';

export default function Swiper() {
	return (
		<div className={s.swiper_wrapper}>
			<div>
				<Image src={'/banner-01.png'} alt='banner' width={1120} height={702} />
			</div>
			<div className={s.promo_01}>
				<p className={s.promo__p}>Change old book on new</p>
				<GlobalSvgSelector id='arrow-right' />
			</div>
			<div className={s.promo_02}>
				<p className={s.promo__p}>top 100 books 2022</p>
				<GlobalSvgSelector id='arrow-right' />
			</div>
			<div className={s.swiper_dots}>
				<span className={s.swiper_dots__dot}></span>
				<span className={s.swiper_dots__dot}></span>
				<span className={s.swiper_dots__dot}></span>
			</div>
		</div>
	);
}
