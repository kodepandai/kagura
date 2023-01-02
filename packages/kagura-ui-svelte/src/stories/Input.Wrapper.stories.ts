import type { Meta, StoryObj } from '@storybook/svelte';

import InputWrapper from './Input.Wrapper.svelte';
import Preset from './Preset.svelte';
import controlSize from './controls/size';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<InputWrapper> = {
	title: 'component/Input/Input Wrapper',
	component: InputWrapper,
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
		size: controlSize('input wrapper'),
		required: {
			type: 'boolean',
			description: 'add required attribute to input element'
		},
		withAsterisk: {
			type: 'boolean',
			description: 'add asterisk symbol'
		},
		label: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		error: {
			type: 'string'
		},
		inputWrapperOrder: {
			control: 'object',
			description: 'array with value `label | description | input | error`'
		}
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
 let value=""
</script>

${code
	.replace('SlotDecorator', 'Input.Wrapper')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('/>', '>')}
 	<Input placeholder="your email" bind:value />
</Input.Wrapper>
`
		}
	}
};

export default meta;
type Story = StoryObj<InputWrapper>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {
		label: 'Email'
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
export const Required: Story = {
	args: {
		required: true,
		label: 'Email'
	}
};

export const WithError: Story = {
	args: {
		error: 'email format is not valid'
	}
};
export const WithDescription: Story = {
	args: {
		description: 'please enter valid email'
	}
};
export const CustomOrder: Story = {
	args: {
		inputWrapperOrder: ['label', 'error', 'input', 'description'],
		error: 'email format is not valid',
		description: 'please enter valid email address'
	}
};
