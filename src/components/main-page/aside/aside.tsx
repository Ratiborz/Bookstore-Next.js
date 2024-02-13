import s from './aside.module.scss';

export default function Aside() {
	const genres = [
		'Architecture',
		'Art & Fashion',
		'Biography',
		'Business',
		'Crafts & Hobbies',
		'Drama',
		'Fiction',
		'Food & Drink',
		'Health & Wellbeing',
		'History & Politics',
		'Humor',
		'Poetry',
		'Psychology',
		'Science',
		'Technology',
		'Travel & Maps',
	];
	return (
		<div className={s.aside}>
			{genres.map((genre, index) => {
				return (
					<p key={index} className={s.aside__genre}>
						{genre}
					</p>
				);
			})}
		</div>
	);
}
