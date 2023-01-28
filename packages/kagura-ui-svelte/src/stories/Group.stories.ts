import type { Meta, StoryObj } from '@storybook/svelte';

import GroupWithSlot from './views/GroupWithSlot.svelte';
import Preset from './Preset.svelte';
import { sizes } from 'kagura-ui/utils';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<GroupWithSlot> = {
	title: 'component/Group',
	component: GroupWithSlot,
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
		direction: {
			control: {
				type: 'select'
			},
			options: ['row', 'column'],
			defaultValue: 'row'
		},
		justify: {
			control: {
				type: 'select'
			},
			options: ['start', 'end', 'center', 'around', 'evenly', 'between'],
			defaultValue: 'start'
		},
		align: {
			control: {
				type: 'select'
			},
			options: ['start', 'end', 'center', 'stretch', 'baseline'],
			defaultValue: 'stretch'
		},
		spacing: {
			control: {
				type: 'select'
			},
			options: sizes,
			defaultValue: 'md'
		},
		wrap: {
			type: 'boolean',
			defaultValue: true
		},
		grow: {
			type: 'boolean',
			defaultValue: false
		},
		class: {
			type: 'string',
			description: 'custom class, not editable on this demo. See Group stories for exampel'
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
 import {Button, Group} from "@kagura-ui/svelte"
</script>

${code
	.replace('SlotDecorator', 'Group')
	.replace(/ slot="[a-zA-Z]+"/, '')
	.replace(/ preset="[a-zA-Z]+"/, '')
	.replace('/>', '>')}
	<Button>1</Button>
	<Button>2/Button>
	<Button>3</Button>
</Group>
			`
		}
	}
};

export default meta;
type Story = StoryObj<GroupWithSlot>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {}
};
export const CustomStyle: Story = {
	args: {
		class: 'shadow rounded p-2'
	}
};
