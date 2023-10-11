import { createBoard } from '@wixc3/react-board';
import { Button } from '../../../components/button/button';
import Button_module from '../../../components/button/button.module.scss';

export default createBoard({
    name: 'Button',
    Board: () => <Button className={Button_module.button}></Button>,
    isSnippet: true,
});
