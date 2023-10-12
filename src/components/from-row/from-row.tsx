import classNames from 'classnames';
import styles from './from-row.module.scss';

export interface FromRowProps {
    className?: string;
    children?: JSX.Element | Array<JSX.Element | string> | string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FromRow = ({ className, children }: FromRowProps) => {
    return <div className={styles.root}>{children}</div>;
};
