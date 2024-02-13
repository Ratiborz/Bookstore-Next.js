import Image from 'next/image';
import s from './profile.module.scss';
import { Button } from '../button/button';

export const Account = () => {
	return (
		<div className={s.wrapper__profile}>
			<div className={s.data}>
				<h2 className={s.data_title}>PROFILE</h2>
				<div className={s.data__general}>
					<Image
						src={'/profile-img.png'}
						alt='profile'
						width={235}
						height={235}
					/>

					<div className={s.personal__info}>
						<div className={s.initials}>
							<h3 className={s.initials__title}>YOUR NAME</h3>
							<h2 className={s.initials__name}>John Smith</h2>
						</div>
						<div className={s.email}>
							<h3 className={s.email__title}>YOUR EMAIL</h3>
							<h2 className={s.email__your}>example@mail.com</h2>
						</div>
						{/* <button className={s.button__edit}>EDIT PROFILE</button> */}
						<Button>EDIT PROFILE</Button>
					</div>
				</div>
			</div>

			<div className={s.about}>
				<h2 className={s.about__title}>ABOUT ME</h2>
				<p className={s.about__description}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante
					consequat, ornare nisi et, ultrices libero. Nunc nibh dolor, maximus
					quis auctor nec, tempor quis ipsum. Proin mollis pellentesque nulla ac
					varius.
				</p>
			</div>
		</div>
	);
};
