import { createBoard } from '@wixc3/react-board';
import { HankTest1 } from '../../../components/hank-test-1/hank-test-1';

export default createBoard({
    name: 'HankTest1',
    Board: () => <HankTest1 />,
    isSnippet: true,
});
