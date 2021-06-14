import { render, screen } from '@testing-library/react';
import MatchTable from './MatchTable';
import Match from '../models/Match';

const fixtures: Match[] = [{
    Shiaijo: 'A',
    NameTareWhite: 'Bob',
    NameTareRed: 'John',
    NumberTareWhite: 'GER-1',
    NumberTareRed: 'BEL-1'
},
{
    Shiaijo: 'B',
    NameTareWhite: 'Max',
    NameTareRed: 'Markus',
    NumberTareWhite: 'GER-2',
    NumberTareRed: 'BEL-2'
}]

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));

describe("MatchTable", () => {
    test('renders match table', () => {

        render(<MatchTable matches={[]}/>);
        expect(screen.getByText(/Name White/i)).toBeInTheDocument();
        expect(screen.getByText(/Name Red/i)).toBeInTheDocument();
        expect(screen.getByText(/Points Red/i)).toBeInTheDocument();
        expect(screen.getByText(/Points Red/i)).toBeInTheDocument();
    });

    test('renders match table with some data', () => {


        const { container } = render(<MatchTable matches={fixtures} />);
        expect(screen.getByText(/Bob/)).toBeInTheDocument();
        expect(screen.getByText(/John/)).toBeInTheDocument();

        expect(container.querySelectorAll('tr.match-table__row').length).toBe(2)
    });

    test('click a row', () => {
        const { container } = render(<MatchTable matches={fixtures} />);

        const firstRow = container.querySelectorAll('tr.match-table__row')[0] as Element;
        firstRow.click()
        expect(mockHistoryPush).toHaveBeenCalledWith('/shiaijo/A');

    });
})

