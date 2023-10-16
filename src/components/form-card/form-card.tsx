import classNames from 'classnames';
import styles from './form-card.module.scss';
import { HTMLAttributes } from 'react';
export interface FormCardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FormCard = ({ className , children }: FormCardProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
