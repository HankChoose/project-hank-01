import classNames from 'classnames';
import styles from './register-form.module.scss';
import Input_module from '../input/input.module.scss';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Inputpw } from '../inputpw/inputpw';
import { Button } from '../button/button';
import { Link } from '../link/link';

export interface RegisterFormProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const RegisterForm = ({ className }: RegisterFormProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Register</h1>
            <form />
            <Label>Email</Label>
            <Input className={classNames(Input_module.input)} id={''} name={''} />
            <Label>Password</Label>
            <Inputpw />
            <Label>Password again</Label>
            <Inputpw />
            <Button>Register</Button>
            <Button>Cancel</Button>
            <div>
                Already have an account?<Link>Sign in</Link>
            </div>
        </div>
    );
};
