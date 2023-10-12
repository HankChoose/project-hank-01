import { createBoard } from '@wixc3/react-board';
import { FromRow } from '../../../components/from-row/from-row';

export default createBoard({
    name: 'FromRow',
    Board: () => <FromRow />,
    isSnippet: true,
});
