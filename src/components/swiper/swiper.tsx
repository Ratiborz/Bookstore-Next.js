'use client';
import GlobalSvgSelector from '@/assets/icons/GlobalSvgSelector';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import s from './swiper.module.scss';

export default function Swiper() {
	const [banner, setBanner] = useState(1);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			if (banner === 1) {
				setBanner(2);
			} else if (banner === 2) {
				setBanner(3);
			} else if (banner === 3) {
				setBanner(1);
			}
		}, 3000);

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, [banner]);

	const handleDotClick = (num: number) => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		setBanner(num);
	};

	return (
		<div className={s.swiper_wrapper}>
			<div>
				<Image
					src={`/banner-0${banner}.png`}
					alt='banner'
					width={1120}
					height={702}
					priority
				/>
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
				<span
					className={`${s.swiper_dots__dot} ${banner === 1 && s.active}`}
					onClick={() => handleDotClick(1)}
				></span>
				<span
					className={`${s.swiper_dots__dot} ${banner === 2 && s.active}`}
					onClick={() => handleDotClick(2)}
				></span>
				<span
					className={`${s.swiper_dots__dot} ${banner === 3 && s.active}`}
					onClick={() => handleDotClick(3)}
				></span>
			</div>
		</div>
	);
}
