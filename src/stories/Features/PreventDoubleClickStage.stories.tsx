import { Meta, StoryObj } from '@storybook/react';
import TestSigmaContainer from '../TestSigmaContainer';
import PreventDoubleClickStage from '../../Graph/features/PreventDoubleClickStage/GraphEvents';

const meta: Meta<typeof PreventDoubleClickStage> = {
  title: 'Basics/PreventDoubleClickStage',
  component: PreventDoubleClickStage,
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
