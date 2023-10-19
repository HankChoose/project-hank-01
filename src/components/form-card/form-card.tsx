import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';
import React from 'react';
import { Elevation, H1, TextArea, Card, InputGroup } from '@blueprintjs/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import Login from './Login';

export interface FormCardProps {
    className?: string;
    children?: React.ReactNode;
    formType?: 'signin' | 'signup';
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FormCard = ({ className, formType = 'signin', children }: FormCardProps) => {
    const submitCaption =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Send';
    const formTitle =
        formType === 'signin' ? 'Sign In' : formType === 'signup' ? 'Sign Up' : 'Contact Us';

    return (
        <div className={classNames(styles.root, className)}>
            {' '}
             <Router>
                <div>
                <nav>
                    <ul>
                    <li>
                        <Link to="/login2">注册</Link>
                    </li>
                    <li>
                        <Link to="/login">登录</Link>
                    </li>
                    </ul>
                </nav>

                
                </div>
            </Router>
            <H1>{formTitle}</H1>
            {children}
            <FormRow /> <FormRow />
            <FormRow children={<Input />} />
            <FormRow />
            <Inputpw />
            <FormRow />
            <FormRow children={<Button>My Button</Button>} />
            <FormRow />
        </div>
    );
};
