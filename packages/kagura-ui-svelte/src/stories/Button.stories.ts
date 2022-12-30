import type { Meta, StoryObj } from '@storybook/svelte';

import type Button from '../lib/Button.svelte';
import ButtonView from './Button.svelte';
import controlSize from './controls/size';
import Preset from './Preset.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<Button> = {
	title: 'component/Button',
	component: ButtonView,
	tags: ['autodocs'],
	argTypes: {
		preset: {
			control: {
				type: 'select'
			},
			options: ['mantine', 'bootstrap'],
			description: 'choose kagura preset, this is for demo only',
			defaultValue: 'mantine'
		},
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'custom'],
			description: 'buton color scheme, default is primary'
		},
		variant: {
			control: { type: 'select' },
			options: ['filled', 'outline'],
			description: 'button style variant, default is filled'
		},
		size: controlSize('button'),
		slot: {
			type: 'string',
			defaultValue: 'Button',
			description: 'button slot, can be string, html element or any components'
		}
	},
	decorators: [
		(_, { args }) => ({
			Component: Preset,
			props: {
				preset: args.preset
			}
		})
	],
	parameters: {
		docs: {
			transformSource: (code, { initialArgs: prop }) => `
<script>
 import {Button} from "@kagura-ui/svelte"
</script>

${code
	.replace('SlotDecorator', 'Button')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('/>', '>')}
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
		slot: 'Button Primary'
	}
};

export const Secondary: Story = {
	args: {
		color: 'secondary',
		slot: 'Button Secondary'
	}
};
export const Outline: Story = {
	args: {
		variant: 'outline',
		slot: 'Button Outline'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		slot: 'Button Large'
	}
};
