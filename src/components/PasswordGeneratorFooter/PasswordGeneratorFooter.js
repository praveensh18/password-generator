import React, {useState} from 'react';
import s from './style.module.css';
import copyIcon from '../../assets/copy-paste.svg';

const PasswordGeneratorFooter = (props) => {
	
	const copyToClipboard = () => {
		navigator.clipboard.writeText(props.newPassword);
		setShowInfo(true)
		setTimeout(() => {
			setShowInfo(false)
		}, 3000);
	}

	const [showInfo, setShowInfo] = useState(false)
	return (
		
		<div className={s.root}>
			<div>{props.newPassword}</div>
			<img src={copyIcon} className={s.copy_img} alt='Copy icon' onClick={copyToClipboard}/>
			{showInfo && <span className={s.copyText}>Copied to Clipboard</span>}
		</div>
	)
}

export default PasswordGeneratorFooter
