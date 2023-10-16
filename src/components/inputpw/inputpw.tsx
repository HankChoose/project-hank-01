import classNames from 'classnames';
import styles from './inputpw.module.scss';
import React, { useState } from 'react';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Inputpw = ({ className }: InputpwProps) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={classNames(styles.root, className)}>
            <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={togglePasswordVisibility} className={styles.Button}>
                {showPassword ? <img src="./hide.png" alt="H" /> : <img src="./show.png" alt="S" />}
            </button>
        </div>
    );
};
