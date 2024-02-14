---
to: ./src/components/<%=name %>/index.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';

import <%=name %> from '.';

const meta: Meta<typeof <%=name %>> = {
  title: '<%=name %>',
  component: <%=name %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof <%=name %>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
