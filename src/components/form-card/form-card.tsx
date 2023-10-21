import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
          
            {children}
            <FormRow />
            <FormRow children={<Input />} />
            <FormRow />
            <Inputpw />
            <FormRow />
            <FormRow children={<Button> {formTitle} </Button>} />
            <FormRow />
        </div>
    );
};
