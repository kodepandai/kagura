import type { Meta, StoryObj } from '@storybook/svelte';

import TextAreaWithSlot from './views/TextAreaWithSlot.svelte';
import Preset from './Preset.svelte';
import controlSize from './controls/size';
import controlClasses from './controls/classes';
import controlSlot from './controls/slot';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<TextAreaWithSlot> = {
	title: 'component/TextArea',
	component: TextAreaWithSlot,
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
		autosize: {
			type: 'boolean',
			defaultValue: false
		},
		minRows: {
			type: 'number'
		},
		maxRows: {
			type: 'number'
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
		classes: controlClasses(
			'inputWrapper: {root, label, description, required, error, input}, input: {root, input}'
		),
		withIcon: controlSlot('icon'),
		withRightSection: controlSlot('rightSection')
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
 import {TextArea} from "@kagura-ui/svelte"
</script>

${code
	.replace('SlotDecorator', 'TextArea\n  ')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace(/ (withIcon|withRightSection)/g, '')
	.replace(/" /g, `"\n   `)
	.replace(/} /g, `}\n   `)}
`
		}
	}
};

export default meta;
type Story = StoryObj<TextAreaWithSlot>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {
		label: 'Email',
		description: 'please input valid email address',
		placeholder: 'your email'
	}
};

export const Filled: Story = {
	args: {
		variant: 'filled',
		placeholder: 'your email'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		placeholder: 'your email'
	}
};
export const Required: Story = {
	args: {
		label: 'Email',
		required: true,
		placeholder: 'your email'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		placeholder: 'your email'
	}
};
export const Small: Story = {
	args: {
		size: 'sm',
		placeholder: 'your email'
	}
};
export const WithDescription: Story = {
	args: {
		description: 'please enter valid email',
		placeholder: 'your email'
	}
};
export const WithError: Story = {
	args: {
		error: 'email format is not valid',
		placeholder: 'your email'
	}
};
export const WithIcon: Story = {
	args: {
		withIcon: true,
		description: 'please enter valid email',
		placeholder: 'Your email',
		label: 'Email'
	},
	parameters: {
		docs: {
			transformSource: (code: string) => `
<script>
 import {TextInput} from "@kagura-ui/svelte"
 import Icon from "@iconify/svelte"
</script>

${code
	.replace('SlotDecorator', 'TextInput')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ (withIcon|withRightSection)/g, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('\\>', '>')}
	<Icon icon="tabler:at" slot="icon"/>
</TextInput>
`
		}
	}
};
export const WithRightSection: Story = {
	args: {
		withRightSection: true
	},
	parameters: {
		docs: {
			transformSource: (code: string) => `
<script>
 import {TextInput} from "@kagura-ui/svelte"
 import Icon from "@iconify/svelte"
</script>

${code
	.replace('SlotDecorator', 'TextInput')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ (withIcon|withRightSection)/g, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('\\>', '>')}
	<Icon icon="tabler:alert-circle" slot="rightSection" class="opacity-40 w-1/2 h-1/2"/>
</TextInput>
`
		}
	}
};
export const CustomOrder: Story = {
	args: {
		label: 'Email',
		placeholder: 'your email',
		inputWrapperOrder: ['label', 'error', 'input', 'description'],
		error: 'email format is not valid',
		description: 'please enter valid email address'
	}
};

export const CustomStyle: Story = {
	args: {
		classes: {
			inputWrapper: {
				label: 'font-serif',
				description: 'italic',
				input: '!rounded-none !border-2 border-dashed focus:border-solid !placeholder-info',
				error: 'bg-warning bg-opacity-20 px-2 rounded'
			}
		},
		label: 'Email',
		description: 'please input valid email address',
		placeholder: 'type here ...',
		error: 'email is required'
	}
};
