import classNames from 'classnames';
import styles from './text.module.scss';

export interface TextProps {
    className?: string;
    children?:JSX.Element | Array<JSX.Element|string> | string;
    htmlFor?:string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Text = ({ className , children, htmlFor  }: TextProps) => {
    return <div className={classNames(styles.root, className)}>Already have an account?</div>;
};
