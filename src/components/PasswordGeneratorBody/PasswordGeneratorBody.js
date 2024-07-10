import React from 'react';
import s from './style.module.css';
import { generatePassword } from '../../utils/password';

const PasswordGeneratorBody = (props) => {
  const submit = (e) => {
    e.preventDefault();
    let formData = {};
    const form = new FormData(e.currentTarget);
    form.forEach((value, key) => {
      formData[key] = value;
    });

    // Generate new password and pass it to parent component
    props.onButtonClick(generatePassword(formData));
  };
  return (
    <form onSubmit={submit}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select name='size' defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input name='uppercase' type='checkbox' defaultChecked />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input name='number' type='checkbox' defaultChecked />
        </div>
        <div className={s.grid_item}>
          Specials
          <input name='special' type='checkbox' defaultChecked />
        </div>
      </div>
      <div className={s.btn_container}>
        <button type='submit' className={s.btn_generate}>
          Generate
        </button>
      </div>
    </form>
  );
};

export default PasswordGeneratorBody;
