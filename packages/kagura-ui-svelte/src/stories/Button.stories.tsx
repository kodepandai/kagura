import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '../lib/Button.svelte';
import ButtonView from './Button.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<Button> = {
	title: 'component/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: { type: 'select' },
			options: ['primay', 'secondary', 'success']
		},
		slot: {
			type: 'string',
			defaultValue: 'Button'
		}
	},
	decorators: [
		(_, { args }) => ({
			Component: ButtonView,
			props: args
		})
	],
	parameters: {
		docs: {
			transformSource: (_, { initialArgs: prop }) => `
<script>
 import {Button} from "@kagura-ui/svelte"
</script>
<Button${prop.color ? ` color="${prop.color}"` : ''}>
 ${prop.slot}
</Button>
`
		}
	}
};

export default meta;
type Story = StoryObj<Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {
		slot: 'Label'
	}
};
export const Primary: Story = {
	args: {
		color: 'primary',
		slot: 'Button Primary'
	}
};

export const Secondary: Story = {
	args: {
		color: 'secondary',
		slot: 'Button Secondary'
	}
};
