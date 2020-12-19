import { render, screen } from '@testing-library/react';
import React from 'react';
import Form from "./Form";

describe('Form component', () => {
    test('renders Form component', () => {
        render(<Form />);

        screen.debug();

        expect(screen.getByText('Стоимость недвижимости')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('10 000 000')).toBeInTheDocument();
        expect(screen.getByText('Первоначальный взнос')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('2 000 000')).toBeInTheDocument();
        expect(screen.getByText('Срок кредита')).toBeInTheDocument();
        expect(screen.getAllByPlaceholderText('10')).toHaveLength(2);
        expect(screen.getByText('Процентная ставка')).toBeInTheDocument();

        expect(screen.getByText('Save')).toBeInTheDocument();
        expect(screen.getByText('Clear')).toBeInTheDocument();

        expect(screen.getAllByRole('button')).toHaveLength(7);
    })

})