import React, {useState} from 'react';
import PasswordGeneratorBody from '../PasswordGeneratorBody/PasswordGeneratorBody';
import PasswordGeneratorFooter from '../PasswordGeneratorFooter/PasswordGeneratorFooter';
import PasswordGeneratorHeader from '../PasswordGeneratorHeader/PasswordGeneratorHeader';
import s from './style.module.css';

const PasswordGeneratorCard = () => {
	const [password, setPassword] = useState('Amazing Password')
	return (
		<div className={s.root}>
			<div className={s.main}>
			<PasswordGeneratorHeader/>
			<PasswordGeneratorBody onButtonClick={setPassword}/>
			</div>
			<PasswordGeneratorFooter newPassword={password}/>
		</div>
	)
}

export default PasswordGeneratorCard
