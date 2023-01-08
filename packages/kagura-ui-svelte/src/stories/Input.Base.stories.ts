import type { Meta, StoryObj } from '@storybook/svelte';

import InputWithSlot from './views/InputWithSlot.svelte';
import Preset from './Preset.svelte';
import controlSize from './controls/size';
import controlClasses from './controls/classes';
import controlSlot from './controls/slot';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<InputWithSlot> = {
	title: 'component/Input/Input Base',
	component: InputWithSlot,
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
			defaultValue: 'Your email'
		},
		invalid: {
			type: 'boolean',
			description: 'make input invalid'
		},
		size: controlSize('input'),
		disabled: {
			type: 'boolean'
		},
		classes: controlClasses('root, input'),
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
 import {Input} from "@kagura-ui/svelte"
</script>

${code
	.replace('SlotDecorator', 'Input')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ (withIcon|withRightSection)/g, '')
	.replace(/ preset="[a-zA-Z]+"/, '')}
`
		}
	}
};

export default meta;
type Story = StoryObj<InputWithSlot>;

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
export const WithIcon: Story = {
	args: {
		withIcon: true
	},
	parameters: {
		docs: {
			transformSource: (code: string) => `
<script>
 import {Input} from "@kagura-ui/svelte"
 import Icon from "@iconify/svelte"
</script>

${code
	.replace('SlotDecorator', 'Input')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ (withIcon|withRightSection)/g, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('\\>', '>')}
	<Icon icon="tabler:at" slot="icon"/>
</Input>
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
 import {Input} from "@kagura-ui/svelte"
 import Icon from "@iconify/svelte"
</script>

${code
	.replace('SlotDecorator', 'Input')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ (withIcon|withRightSection)/g, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('\\>', '>')}
	<Icon icon="tabler:alert-circle" slot="rightSection" class="opacity-40 w-1/2 h-1/2"/>
</Input>
`
		}
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
