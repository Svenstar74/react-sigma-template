import { Meta, StoryObj } from '@storybook/react';
import TestSigmaContainer from '../TestSigmaContainer';
import CenterNode from '../../Graph/features/CenterNode/GraphEvents';

const meta: Meta<typeof CenterNode> = {
  title: 'Basics/CenterNode',
  component: CenterNode,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithFeature: Story = {
  args: {},
  decorators: [
    (Story) => (
      <TestSigmaContainer loadGraph='example4nodes'>
        <Story />
      </TestSigmaContainer>
    ),
  ],
};

export const WithoutFeature: Story = {
  args: {},
  decorators: [
    () => (
      <TestSigmaContainer loadGraph='example4nodes'>
      </TestSigmaContainer>
    ),
  ],
};
