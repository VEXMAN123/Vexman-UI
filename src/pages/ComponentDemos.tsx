import React, { useState } from 'react';
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
import { toast } from '../components/ui/sonner';

const demoCards = [
	{
		title: 'Buttons',
		accent: 'from-gray-900 via-gray-800 to-gray-700',
		headingColor: 'text-blue-200',
		content: (
			<div className="flex flex-col gap-4 items-center">
				<div className="flex gap-2">
					<Button variant="default">Primary</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="outline">Outline</Button>
				</div>
				<div className="flex gap-2">
					<Button variant="default" size="icon">
						<span role="img" aria-label="like">
							❤️
						</span>
					</Button>
					<Button variant="default" size="icon">
						<span role="img" aria-label="save">
							💾
						</span>
					</Button>
				</div>
			</div>
		),
	},
	{
		title: 'Form Elements',
		accent: 'from-slate-800 via-slate-700 to-blue-800',
		headingColor: 'text-teal-200',
		content: (
			<div className="flex flex-col gap-3 items-center w-full">
				<Input type="text" placeholder="Text input" />
				<Input type="email" placeholder="Email input" />
				<Input type="password" placeholder="Password input" />
				<div className="flex items-center gap-2 mt-2">
					<Switch />
					<span>Enable notifications</span>
				</div>
			</div>
		),
	},
	{
		title: 'Select / Dropdown',
		accent: 'from-gray-800 via-blue-900 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<Select>
				<SelectTrigger>Choose an option</SelectTrigger>
				<SelectContent>
					<SelectItem value="one">Option One</SelectItem>
					<SelectItem value="two">Option Two</SelectItem>
					<SelectItem value="three">Option Three</SelectItem>
				</SelectContent>
			</Select>
		),
	},
	{
		title: 'Checkbox & Radio',
		accent: 'from-blue-900 via-slate-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<div className="flex flex-col gap-3 items-center">
				<div className="flex gap-2 items-center">
					<Checkbox /> <span>Accept Terms</span>
				</div>
				<RadioGroup defaultValue="a" className="flex gap-2">
					<RadioGroupItem value="a" /> Option A
					<RadioGroupItem value="b" /> Option B
				</RadioGroup>
			</div>
		),
	},
	{
		title: 'Tabs',
		accent: 'from-blue-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<Tabs defaultValue="tab1">
				<TabsList>
					<TabsTrigger value="tab1">Tab One</TabsTrigger>
					<TabsTrigger value="tab2">Tab Two</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">Content for Tab One</TabsContent>
				<TabsContent value="tab2">Content for Tab Two</TabsContent>
			</Tabs>
		),
	},

	{
		title: 'Loader',
		accent: 'from-blue-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<div className="flex flex-col items-center">
				<Loader size={40} color="#06b6d4" />
			</div>
		),
	},
	{
		title: 'Badges & Tags',
		accent: 'from-slate-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<div className="flex gap-2">
				<Badge>Default</Badge>
				<Badge variant="secondary">Secondary</Badge>
				<Badge variant="outline">Outline</Badge>
				<Badge variant="error">Error</Badge>
				<Badge variant="success">Success</Badge>
			</div>
		),
	},
	{
		title: 'Progress',
		accent: 'from-blue-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<div className="flex flex-col gap-2 items-center">
				<div>Upload Progress</div>
				<Progress value={75} />
				<div>Download</div>
				<Progress value={45} />
			</div>
		),
	},
	{
		title: 'Avatar',
		accent: 'from-blue-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<Avatar>
				<img
					src="https://i.pravatar.cc/100"
					alt="Avatar"
					className="rounded-full w-16 h-16"
				/>
			</Avatar>
		),
	},
	{
		title: 'Tooltip',
		accent: 'from-slate-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant="outline">Hover me</Button>
					</TooltipTrigger>
					<TooltipContent>Tooltip info here</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		),
	},
	{
		title: 'Dialog / Modal',
		accent: 'from-blue-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<Dialog>
				<div className="p-6">
					<h3 className="text-lg font-bold mb-2">Dialog Title</h3>
					<p>This is a modal dialog for confirmations, forms, or popups.</p>
					<Button variant="secondary" className="mt-4">
						Close
					</Button>
				</div>
			</Dialog>
		),
	},
	{
		title: 'Toast / Alert',
		accent: 'from-blue-900 via-blue-800 to-blue-700',
		headingColor: 'text-blue-200',
		content: (
			<div className="flex flex-col items-center gap-4">
				<Button
					variant="success"
					onClick={() => toast.success('Success! Your action was completed.')}
				>
					Show Success Toast
				</Button>
				<Button
					variant="error"
					onClick={() => toast.error('Error! Something went wrong.')}
				>
					Show Error Toast
				</Button>
				<Button
					variant="default"
					onClick={() => toast('Info: This is a neutral message.')}
				>
					Show Info Toast
				</Button>
			</div>
		),
	},
];

const getCardStyle = (idx: number, accent: string) => {
	const heights = [
		240, 260, 220, 250, 230, 270, 220, 260, 240, 230, 250, 220, 260,
	];
	const rotations = [
		'-rotate-1',
		'rotate-2',
		'rotate-0',
		'-rotate-2',
		'rotate-1',
		'rotate-0',
		'rotate-1',
		'-rotate-2',
		'rotate-2',
		'rotate-0',
		'-rotate-1',
		'rotate-1',
		'rotate-0',
	];
	return `min-h-[${heights[idx % heights.length]}px] ${rotations[idx % rotations.length]} bg-black`;
};

const ComponentDemos = () => {
	return (
		<div className="min-h-screen bg-[#10141c] py-16 px-4">
			<h1 className="text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg tracking-tight">
				Live Component Demos
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
				{demoCards.map((card, idx) => (
					<Card
						key={idx}
						className={`p-8 rounded-2xl shadow-2xl border border-blue-400/20 backdrop-blur-md flex flex-col items-center justify-center ${getCardStyle(
							idx,
							card.accent
						)} animate-float-card`}
						style={{ zIndex: 10 + idx, animationDelay: `${idx * 0.15}s` }}
					>
						<h2
							className={`text-2xl font-bold mb-4 drop-shadow-lg text-center ${card.headingColor}`}
						>
							{card.title}
						</h2>
						<div className="w-full flex flex-col items-center justify-center">
							{card.content}
						</div>
					</Card>
				))}
			</div>
			<style>{`
        @keyframes float-card {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-8px) scale(1.02); }
          80% { transform: translateY(0px) scale(1); }
          100% { opacity: 1; transform: translateY(0px) scale(1); }
        }
        .animate-float-card {
          animation: float-card 1.2s cubic-bezier(.22,1,.36,1) both;
        }
      `}</style>
		</div>
	);
};

export default ComponentDemos;
