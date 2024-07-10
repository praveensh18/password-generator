import React from 'react';
import s from './style.module.css';
import lockIcon from '../../assets/lock.svg';

const PasswordGeneratorHeader = () => {
	return (
		<div className={s.root}>
			<div className={s.title}>Password Generator</div>
			<img src={lockIcon} className={s.lockIcon} alt='lock icon'/>
		</div>
	)
}

export default PasswordGeneratorHeader
