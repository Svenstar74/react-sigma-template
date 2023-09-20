import { Meta, StoryObj } from '@storybook/react';
import LoadGraph from '../Graph/LoadGraph';
import TestSigmaContainer from './TestSigmaContainer';

const meta: Meta<typeof LoadGraph> = {
  title: 'Example/TestStory',
  component: LoadGraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TestSigmaContainer>
        <Story />
      </TestSigmaContainer>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
