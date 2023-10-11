import { createBoard } from '@wixc3/react-board';
import { Input } from '../../../components/input/input';
import Input_module from '../../../components/input/input.module.scss';
import Classnames from 'classnames';

export default createBoard({
    name: 'Input',
    Board: () => <Input className={Classnames(Input_module.input)} id={''} name={''} />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
