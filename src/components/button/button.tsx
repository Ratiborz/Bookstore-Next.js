import { ReactNode } from 'react';
import s from './button.module.scss';

type ButtonProps = {
	children: ReactNode;
};

export const Button: React.FC<ButtonProps> = ({ children }) => {
	return <button className={s.button}>{children}</button>;
};
