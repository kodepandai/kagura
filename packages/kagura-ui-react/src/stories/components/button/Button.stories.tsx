import type { Meta, StoryObj } from '@storybook/react';

import controlClasses from '../../controls/classes';
import controlSize from '../../controls/size';
import Preset from '../Preset';
import controlColor from '../../controls/color';
import { Button } from 'src/components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta: Meta<typeof Button> = {
	title: 'component/buttons/Button',
	component: Button,
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
		color: controlColor('button'),
		variant: {
			control: { type: 'select' },
			options: ['filled', 'outline'],
			description: 'button style variant, default is filled'
		},
		size: controlSize('button'),
		classes: controlClasses('root, inner, label'),
		children: {
			type: 'string',
			description: 'button children, can be string, html element or any components',
		}
	},
	args: {
		children: "Button"
	},
	decorators: [
		(Story, { args }) => <Preset preset={args.preset}><Story {...args} /></Preset>
	],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Default: Story = {
	args: {
		children: 'Label'
	}
};
export const Primary: Story = {
	args: {
		children: 'Button Primary'
	}
};

export const Secondary: Story = {
	args: {
		color: 'secondary',
		children: 'Button Secondary'
	}
};
export const Outline: Story = {
	args: {
		variant: 'outline',
		children: 'Button Outline'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		children: 'Button Large'
	}
};
export const Small: Story = {
	args: {
		size: 'sm',
		children: 'Button Small'
	}
};
export const CustomStyle: Story = {
	args: {
		classes: {
			root: '!rounded-lg !border-primary !bg-transparent py-2 hover:shadow-lg',
			inner: '!rounded shadow bg-primary',
			label: 'uppercase px-2'
		}
	}
};
