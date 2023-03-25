
import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { ButtonComponent } from './button.component';

export default {
  component: ButtonComponent,
  title: 'Task',
} as Meta;


const Template: Story = (args) => ({
    props: {
      args,
      changeButtonName: () => {
        args['buttonText']="marwan"
       console.log("a")
      }
    },
    template: `
      <app-button></app-button> 
      <button (click)="changeButtonName()">${args['buttonText']}</button>
    `
  });
  
  
export const Default = Template.bind({});
Default.args = {
    title:"marwan",
    buttonText:"button text"
};
