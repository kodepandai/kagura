import type { Meta, StoryObj } from '@storybook/svelte';

import Preset from '../Preset.svelte';
import Checkbox from '../../../lib/Checkbox.svelte';
import controlSize from '../../controls/size';
import controlClasses from '../../controls/classes';
import controlPreset from '../../controls/preset';
import controlColor from '../../controls/color';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<Checkbox> = {
	title: 'component/inputs/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		preset: controlPreset(),
		size: controlSize('input'),
		color: controlColor('checkbox'),
		checked: {
			type: 'boolean'
		},
		indeterminate: {
			type: 'boolean'
		},
		disabled: {
			type: 'boolean'
		},
		classes: controlClasses('root, input, rightSection, icon, withIcon, disabled, invalid')
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
 import {Checkbox} from "@kagura-ui/svelte"
</script>
${code
					.replace('SlotDecorator', 'Checkbox')
					.replace(/ slot="[a-zA-Z]+"/, '')
					.replace(/ (withIcon)/g, '')
					.replace(/ preset="[a-zA-Z]+"/, '')}
`
		}
	}
};

export default meta;
type Story = StoryObj<Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {
		label: 'I agree'
	}
};
export const Checked: Story = {
	args: {
		label: 'I agree',
		checked: true
	}
};
export const Indeterminate: Story = {
	args: {
		label: 'I agree',
		indeterminate: true
	}
};
export const IndeterminateChecked: Story = {
	args: {
		label: 'I agree',
		indeterminate: true,
		checked: true
	}
};
