import type { Meta, StoryObj } from '@storybook/svelte';

import Input from '../lib/Input.svelte';
import Preset from './Preset.svelte';
import controlSize from './controls/size';
import controlClasses from './controls/classes';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<Input> = {
	title: 'component/Input/Input Base',
	component: Input,
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
		variant: {
			control: {
				type: 'select'
			},
			options: ['default', 'filled'],
			description: 'choose input variant',
			defaultValue: 'default'
		},
		value: {
			type: 'string',
			description: 'input value, use bind:value to enable two way binding'
		},
		placeholder: {
			type: 'string',
			description: 'set input placeholder',
			defaultValue: 'your email'
		},
		invalid: {
			type: 'boolean',
			description: 'make input invalid'
		},
		size: controlSize('input'),
		disabled: {
			type: 'boolean'
		},
		classes: controlClasses('root, input')
	},
	decorators: [
		(_, { args }) => ({
			Component: Preset,
			props: {
				preset: args.preset,
				className: 'max-w-md mx-auto'
			}
		})
	],
	parameters: {
		docs: {
			transformSource: (code: string) => `
<script>
 import {Input} from "@kagura-ui/svelte"
</script>

${code
	.replace('SlotDecorator', 'Input')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ preset="[a-zA-Z]+"/, '')}
`
		}
	}
};

export default meta;
type Story = StoryObj<Input>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {}
};

export const Filled: Story = {
	args: {
		variant: 'filled'
	}
};

export const Invalid: Story = {
	args: {
		invalid: true
	}
};
export const Disabled: Story = {
	args: {
		disabled: true
	}
};

export const Large: Story = {
	args: {
		size: 'lg'
	}
};
export const Small: Story = {
	args: {
		size: 'sm'
	}
};
export const CustomStyle: Story = {
	args: {
		classes: {
			root: 'shadow rounded-xl overflow-hidden',
			input: '!border-none focus:bg-primary !bg-opacity-30'
		}
	}
};
