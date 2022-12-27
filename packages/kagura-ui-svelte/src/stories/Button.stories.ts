import type { Meta, StoryObj } from '@storybook/svelte';

import type Button from '../lib/Button.svelte';
import ButtonView from './Button.svelte';
import Preset from "./Preset.svelte"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<Button> = {
	title: 'component/Button',
	component: ButtonView,
	tags: ['autodocs'],
	argTypes: {
		preset: {
			control: {
				type: "select",
			},
			options: ["mantine", "bootstrap"],
			description: "choose kagura preset, this is for demo only",
			defaultValue: "mantine"
		},
		color: {
			control: { type: 'select' },
			options: [
				"primary",
				"secondary",
				"success",
				"danger",
				"warning",
				"info",
				"dark",
				"custom",
			],
			defaultValue: "primary",
			description: 'buton color scheme, default is primary'
		},
		variant: {
			control:
				{ type: "select" },
			options: ["filled", "outline"],
			defaultValue: "filled",
			description: "button style variant, default is filled"

		},
		class: {
			control: {
				type: "string"
			},
			description: "custom class name. readonly, cannot be set from this documentation"
		},
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
export const CustomClass: Story = {
	args: {
		slot: 'Button Custom',
		class: '!rounded-none !border-red-400'
	}
};
