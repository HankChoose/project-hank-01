import { createBoard } from '@wixc3/react-board';
import { FromRow } from '../../../components/from-row/from-row';
import { FaBeer } from 'react-icons/fa';

export default createBoard({
    name: 'FromRow',
    Board: () => <FromRow></FromRow>,
    isSnippet: true,
});
