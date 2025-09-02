# VexmanUI

Next-Gen React UI Component Library

## Overview
VexmanUI is a modern, fast, developer-first React component library. It features zero-config setup, full TypeScript support, and advanced design patterns for building beautiful, scalable web apps.

## Features
- ⚡ Modern, performant React components
- 🛠️ Zero dependencies
- 🌲 Tree-shakeable
- 🖥️ SSR ready
- 🧩 Full TypeScript support
- 🎨 Customizable with Tailwind CSS

## Installation

Install with your favorite package manager:

```bash
npm install vexman-ui
# or
yarn add vexman-ui
# or
pnpm add vexman-ui
# or
bun add vexman-ui
```

## Quick Start

Import and use components in your React app:

```tsx
import { Button, Card, Tabs, TabsList, TabsTrigger, TabsContent } from 'vexman-ui';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <Card>Card Content</Card>
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab One</TabsTrigger>
          <TabsTrigger value="tab2">Tab Two</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content for Tab One</TabsContent>
        <TabsContent value="tab2">Content for Tab Two</TabsContent>
      </Tabs>
    </div>
  );
}
```

## Component API Reference

### Button
```tsx
import { Button } from 'vexman-ui';
<Button variant="default" size="lg">Click Me</Button>
```
Props:
- `variant`: "default" | "outline" | "ghost" | "link"
- `size`: "sm" | "md" | "lg"

### Card
```tsx
import { Card } from 'vexman-ui';
<Card>Card Content</Card>
```

### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'vexman-ui';
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab One</TabsTrigger>
    <TabsTrigger value="tab2">Tab Two</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab One</TabsContent>
  <TabsContent value="tab2">Content for Tab Two</TabsContent>
</Tabs>
```

## More Components
See the `/src/components/ui/` directory for all available components. Each component is fully typed and ready for use.

## Customization
VexmanUI is built with Tailwind CSS. You can customize styles via your Tailwind config and utility classes.

## Contributing
1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## INSTALLATION
<img width="626" height="223" alt="image" src="https://github.com/user-attachments/assets/3c71c8b1-a276-43db-b9c3-2bb1dec791f6" />

## License

