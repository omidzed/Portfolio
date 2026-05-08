import { RotatingBanner } from './RotatingBanner';

export const SudokuCarousel = () => {
    const posters = ['sudoku.png', 'sudoku.jpeg'];

    return (
        <div className='mt-2'>
            <RotatingBanner posters={posters} />
        </div>
    );
};
