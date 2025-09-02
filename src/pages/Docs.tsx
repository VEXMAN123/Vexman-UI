import React from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectTrigger, SelectContent, SelectItem } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Switch } from '../components/ui/switch';
import { Dialog } from '../components/ui/dialog';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '../components/ui/tooltip';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { Card } from '../components/ui/card';
import { Loader } from '../components/ui/loader';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { Avatar } from '../components/ui/avatar';

const Docs = () => (
  <div className="container mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold mb-6">VexmanUI Documentation</h1>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Installation</h2>
      <p>Install VexmanUI using your preferred package manager. This will add all UI components to your project:</p>
      <pre className="bg-muted p-4 rounded">npm install vexman-ui</pre>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Usage</h2>
      <p>Import the components you need from <code>vexman-ui</code> and use them in your React app. Each component is fully typed and supports all standard React props.</p>
      <pre className="bg-muted p-4 rounded">
{`
import { Button, Input, Select, Checkbox, RadioGroup, Switch, Dialog, Tooltip, Tabs, Card, Loader, Badge, Progress, Avatar } from 'vexman-ui';
`}
      </pre>
    </section>
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">Component Examples & Explanations</h2>
      <h3 className="text-xl font-bold mt-4 mb-2">Button</h3>
      <pre className="bg-muted p-4 rounded">
{`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="default" size="icon"><span role="img" aria-label="like">❤️</span></Button>`}
      </pre>
      <p>Use <code>variant</code> to change the button style and <code>size</code> for icon or large buttons. All buttons are accessible and support keyboard navigation.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Input</h3>
      <pre className="bg-muted p-4 rounded">
{`<Input type="text" placeholder="Text input" />
<Input type="email" placeholder="Email input" />
<Input type="password" placeholder="Password input" />`}
      </pre>
      <p>Use <code>type</code> to specify the input type. Inputs are styled, accessible, and support all native props.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Select / Dropdown</h3>
      <pre className="bg-muted p-4 rounded">
{`<Select>
  <SelectTrigger>Choose an option</SelectTrigger>
  <SelectContent>
    <SelectItem value="one">Option One</SelectItem>
    <SelectItem value="two">Option Two</SelectItem>
    <SelectItem value="three">Option Three</SelectItem>
  </SelectContent>
</Select>`}
      </pre>
      <p>Use <code>Select</code> for dropdown menus. <code>SelectTrigger</code> opens the menu, and <code>SelectItem</code> defines each option.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Checkbox & Radio</h3>
      <pre className="bg-muted p-4 rounded">
{`<Checkbox />
<RadioGroup defaultValue="a">
  <RadioGroupItem value="a" /> Option A
  <RadioGroupItem value="b" /> Option B
</RadioGroup>`}
      </pre>
      <p>Checkboxes and radios are used for single or multiple selections. <code>RadioGroup</code> manages radio state.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Switch / Toggle</h3>
      <pre className="bg-muted p-4 rounded">
{`<Switch />`}
      </pre>
      <p>Use <code>Switch</code> for quick on/off states. Fully accessible and customizable.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Dialog / Modal</h3>
      <pre className="bg-muted p-4 rounded">
{`<Dialog>
  <div>Dialog content here</div>
</Dialog>`}
      </pre>
      <p>Dialogs are used for confirmations, forms, or popups. Content inside the dialog is fully customizable.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Tooltip</h3>
      <pre className="bg-muted p-4 rounded">
{`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>Tooltip info here</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      </pre>
      <p>Tooltips provide contextual information. Wrap your trigger in <code>TooltipTrigger</code> and content in <code>TooltipContent</code>.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Tabs</h3>
      <pre className="bg-muted p-4 rounded">
{`<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab One</TabsTrigger>
    <TabsTrigger value="tab2">Tab Two</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab One</TabsContent>
  <TabsContent value="tab2">Content for Tab Two</TabsContent>
</Tabs>`}
      </pre>
      <p>Tabs organize content into sections. Use <code>TabsTrigger</code> for each tab and <code>TabsContent</code> for the content.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Card</h3>
      <pre className="bg-muted p-4 rounded">
{`<Card>
  <div>Card content here</div>
</Card>`}
      </pre>
      <p>Cards group related content visually. Use for dashboards, forms, or content blocks.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Loader</h3>
      <pre className="bg-muted p-4 rounded">
{`<Loader size={40} color="#06b6d4" />`}
      </pre>
      <p>Loader shows animated loading states. Customize <code>size</code> and <code>color</code> as needed.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Badge / Tag</h3>
      <pre className="bg-muted p-4 rounded">
{`<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="success">Success</Badge>`}
      </pre>
      <p>Badges and tags are used for status indicators and labels. Use <code>variant</code> for color options.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Progress</h3>
      <pre className="bg-muted p-4 rounded">
{`<Progress value={75} />`}
      </pre>
      <p>Progress bars show loading or completion states. Set <code>value</code> from 0 to 100.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Avatar</h3>
      <pre className="bg-muted p-4 rounded">
{`<Avatar>
  <img src="https://i.pravatar.cc/100" alt="Avatar" className="rounded-full w-16 h-16" />
</Avatar>`}
      </pre>
      <p>Avatars display user images with a unique style and status indicator.</p>
      <h3 className="text-xl font-bold mt-4 mb-2">Toast / Alert</h3>
      <pre className="bg-muted p-4 rounded">
{`toast.success('Success! Your action was completed.')
toast.error('Error! Something went wrong.')
toast('Info: This is a neutral message.')`}
      </pre>
      <p>Use <code>toast</code> for feedback messages. Supports success, error, and info variants.</p>
    </section>
    <section>
      <h2 className="text-2xl font-semibold mb-2">Customization</h2>
      <p>VexmanUI is built with Tailwind CSS. You can customize styles via your Tailwind config and utility classes. All components are designed to be easily themeable and extendable.</p>
    </section>
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-2">Contributing</h2>
      <p>We welcome contributions! To contribute, fork the repo, create a feature branch, commit your changes, and open a pull request. Please follow our code style and add tests for new features.</p>
    </section>
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-2">License</h2>
      <p>VexmanUI is MIT licensed. You are free to use, modify, and distribute it in your projects.</p>
    </section>
  </div>
);

export default Docs;
