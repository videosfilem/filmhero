import Home from '@/pages/Home';

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/films',
		props: route => ({query: route.query}),
		component: () => import('@/pages/Films')
	},
	{
		path: '/film/:id',
		props: true,
		component: () => import('@/pages/Film')
	}
];

export default routes;
