import { render, screen } from '@testing-library/react';
import MatchTable from './MatchTable';

describe("MatchTable", () => {
    test('renders match table', () => {
        render(<MatchTable />);
        expect(screen.getByText(/Name White/i)).toBeInTheDocument();
        expect(screen.getByText(/Name Red/i)).toBeInTheDocument();
        expect(screen.getByText(/Points Red/i)).toBeInTheDocument();
        expect(screen.getByText(/Points Red/i)).toBeInTheDocument();
    });

    test('renders match table with some data', () => {
        const data = [{
            NameTareWhite: 'Bob', 
            NameTareRed: 'John', 
            NumberTareWhite: 'GER-1', 
            NumberTareRed: 'BEL-1'
        },
        {
            NameTareWhite: 'Max', 
            NameTareRed: 'Markus', 
            NumberTareWhite: 'GER-2', 
            NumberTareRed: 'BEL-2'
        }]

        const {container} = render(<MatchTable matches={data} />);
        expect(screen.getByText(/Bob/)).toBeInTheDocument();
        expect(screen.getByText(/John/)).toBeInTheDocument();

        expect(container.querySelectorAll('tr.match-table__row').length).toBe(2)
    });
})

