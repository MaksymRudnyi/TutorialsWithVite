import type { Meta, StoryObj } from '@storybook/react';
import MoviePoster from '.';
import { MOVIE } from '../../constants';
const meta = {
  title: 'Movie Cards/Emotion (CSS in JSJ)',
  component: MoviePoster,
  argTypes: {
    rating: {
      options: ['G', 'PG', 'PG-13', 'R', 'NC-17'],
      control: { type: 'select' },
    }
  }
} satisfies Meta<typeof MoviePoster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    movie: MOVIE,
    rating: 'R'
  },
};
