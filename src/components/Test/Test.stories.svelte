<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Test from '$components/Test/Test.svelte';
</script>

<!-- More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export -->
<!-- More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes -->
<Meta title="Components/Test" component={Test} />

<!-- More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args -->
<Template let:args>
	<Test {...args} />
</Template>

<!-- More on args: https://storybook.js.org/docs/svelte/writing-stories/args -->
<Story name="Hello world" args={{ text: 'Hello world' }} />

<Story name="Goodnight world" args={{ text: 'Goodnight world' }} />
