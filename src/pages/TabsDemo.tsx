import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const TabsDemo = () => (
  <div className="p-8 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Tabs Demo</h1>
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab One</TabsTrigger>
        <TabsTrigger value="tab2">Tab Two</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <div className="mt-4">This is the content for Tab One.</div>
      </TabsContent>
      <TabsContent value="tab2">
        <div className="mt-4">This is the content for Tab Two.</div>
      </TabsContent>
    </Tabs>
  </div>
);

export default TabsDemo;
