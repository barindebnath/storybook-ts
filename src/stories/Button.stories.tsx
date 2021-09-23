import Button, { Props } from "../Button";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "Default Click" },
    children: {
      defaultValue: "Default Text",
    },
  },
};
export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Red = Template.bind({});
Red.args = {
  children: "Red",
  backgroundColor: "red",
  size: "sm",
  color: "white",
};

export const Blue = Template.bind({});
Blue.args = {
  children: "Blue",
  backgroundColor: "blue",
  size: "lg",
  color: "white",
};
