import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App1',
    Board: () => <App />,
    environmentProps: {
        canvasBackgroundColor: 'rgba(255, 196, 196, 0)',
        canvasHeight: 394,
        windowHeight: 565,
    },
});
