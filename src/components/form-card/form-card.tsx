import classNames from 'classnames';
import styles from './form-card.module.scss';
import { FormRow } from '../form-row/form-row';
import { Input } from '../input/input';
import { Inputpw } from '../inputpw/inputpw';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { Button } from '../button/button';

export interface FormCardProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FormCard = ({ className, children }: FormCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {' '}
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
