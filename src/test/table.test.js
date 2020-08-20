import React from 'react';
import { render,screen } from '@testing-library/react';
import Table from '../components/Table/index';

describe('Table Component', () => {
    test('renders Table component', () => {
      render(<Table />);
      screen.debug();
    });

    test('Table headers', () => {
        const header = []
        render(<Table header={header}/>);
        expect(screen.getByText('name'));
        screen.debug();
    });
});

