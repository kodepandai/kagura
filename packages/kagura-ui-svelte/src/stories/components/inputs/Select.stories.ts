import type { Meta, StoryObj } from '@storybook/svelte';

import Select from '../../../lib/Select.svelte';
import Preset from '../Preset.svelte';
import controlSize from '../../controls/size';
import controlClasses from '../../controls/classes';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<Select> = {
	title: 'component/inputs/Select',
	component: Select,
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
		description: {
			control: 'text',
			description: 'add input description'
		},
		placeholder: {
			type: 'string',
			description: 'set input placeholder'
		},
		label: { type: 'string' },
		size: controlSize('input'),
		required: { type: 'boolean' },
		withAsterisk: { type: 'boolean' },
		disabled: {
			type: 'boolean'
		},
		error: {
			control: 'text',
			defaultValue: '',
			description: 'add error message to input'
		},
		inputWrapperOrder: {
			control: 'object',
			description: 'array with value `label | description | input | error`'
		},
		classes: controlClasses(`root, wrapper, label, input,<br>
			description, required, error, invalid,<br>
			icon, withIcon, rightSection, disabled,<br>
			item, itemWraper, rightSectionIcon`)
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
 import {Select} from "@kagura-ui/svelte"
</script>

${code
	.replace('SlotDecorator', 'Select\n  ')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace(/" /g, `"\n   `)
	.replace(/} /g, `}\n   `)}
`
		}
	}
};

export default meta;
type Story = StoryObj<Select>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {
		label: 'Framework',
		description: 'Choose your favorite framework',
		placeholder: 'your favorite framework'
	}
};

export const Filled: Story = {
	args: {
		variant: 'filled',
		placeholder: 'your favorite framework'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'your favorite framework'
	}
};
export const Required: Story = {
	args: {
		label: 'Framework',
		required: true,
		placeholder: 'your favorite framework'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		placeholder: 'your favorite framework'
	}
};
export const Small: Story = {
	args: {
		size: 'sm',
		placeholder: 'your favorite framework'
	}
};
export const WithDescription: Story = {
	args: {
		description: 'please enter valid your favorite framework',
		placeholder: 'your favorite framework'
	}
};
export const WithError: Story = {
	args: {
		error: 'invalid value',
		placeholder: 'your favorite framework'
	}
};
export const CustomOrder: Story = {
	args: {
		label: 'Framework',
		placeholder: 'your favorite framework',
		inputWrapperOrder: ['label', 'error', 'input', 'description'],
		error: 'invalid value',
		description: 'Please choose your favorite framework'
	}
};

export const CustomStyle: Story = {
	args: {
		classes: {
			wrapper: 'shadow border p-2 rounded',
			label: 'font-serif',
			description: 'italic',
			input: '!rounded-none !border-2 border-dashed focus:border-solid !placeholder-info',
			error: 'bg-warning bg-opacity-20 px-2 rounded'
		},
		label: 'Framework',
		description: 'Choose your favorite framework',
		placeholder: 'type here ...',
		error: 'your favorite framework is required'
	}
};
