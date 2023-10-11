import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App1',
    Board: () => <App />,
    environmentProps: {
        windowHeight: 512,
        windowWidth: 1162,
        canvasBackgroundColor: 'rgba(255, 196, 196, 0)',
    },
});
