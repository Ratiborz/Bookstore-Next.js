import Aside from '@/components/main-page/aside/aside';
import Main from '@/components/main-page/main/main';
import Swiper from '@/components/main-page/swiper/swiper';

export default function Home() {
	return (
		<>
			<Swiper />
			<Aside />
			<Main />
		</>
	);
}
