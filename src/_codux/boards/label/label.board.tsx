import { createBoard } from '@wixc3/react-board';
import { Label } from '../../../components/label/label';

export default createBoard({
    name: 'Label',
    Board: () => <Label className="label"></Label>,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 5,
        windowWidth: 1148,
    },
});
