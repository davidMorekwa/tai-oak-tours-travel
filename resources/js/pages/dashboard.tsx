import Heading from '@/components/heading';
import StatsCard from '@/components/stats-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, SharedData } from '@/types'; // Import SharedData
import { Head, Link, usePage } from '@inertiajs/react'; // Import usePage
import {
    Briefcase,
    CalendarClock,
    PlusCircle,
    ListChecks,
    PlaneTakeoff,
    BookOpenCheck,
    MessageSquareWarning,
    Badge, // Icon for pending reviews
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'), // Ensure route name matches
    },
];

const recentActivities = [
    { id: 1, description: 'New booking for "Maasai Mara Safari" by John Doe.', time: '2 hours ago', tourId: 'tour-123' },
    { id: 2, description: 'Payment received for booking #B007.', time: '5 hours ago', bookingId: 'B007' },
    { id: 3, description: 'Enquiry about "Kilimanjaro Trek" from Jane Smith.', time: '1 day ago', enquiryId: 'enq-456' },
];

export default function Dashboard() {
    const { props } = usePage<SharedData & { pendingReviewsCount?: number, activeToursCount?: number, activeBookingsCount?: number }>();
    const pendingReviewsCount = props.pendingReviewsCount ?? 0;
    // const activeToursCount = props.activeToursCount ?? 0; // Example if you pass this
    // const activeBookingsCount = props.activeBookingsCount ?? 0; // Example if you pass this

    // Stats data, now can include dynamic counts
    const stats = [
        { title: 'Active Tours', value: props.activeToursCount?.toString() || 'N/A', icon: PlaneTakeoff, description: 'Currently managed packages' },
        { title: 'Pending Reviews', value: pendingReviewsCount.toString(), icon: MessageSquareWarning, description: 'Awaiting approval' },
        { title: 'Active Bookings', value: props.activeBookingsCount?.toString() || 'N/A', icon: BookOpenCheck, description: 'Confirmed reservations' },
        { title: 'Upcoming Departures', value: '12', icon: CalendarClock, description: 'In the next 30 days' }, // Example static
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 md:p-6">
                <Heading title="Welcome Back!" description="Here's a quick overview of your travel agency." />
                {/* Stats Cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatsCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} description={stat.description} />
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Quick Actions */}
                    <Card className="lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                            <CardDescription>Common tasks at your fingertips.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <Button asChild className="w-full justify-start">
                                <Link href={route('admin.tours.index')}>
                                    <PlusCircle className="mr-2 h-4 w-4" /> Manage Tour Packages
                                </Link>
                            </Button>
                            <Button asChild className="w-full justify-start" variant="outline">
                                <Link href={route('admin.reviews.index')}>
                                    <ListChecks className="mr-2 h-4 w-4" /> Manage Reviews
                                    {pendingReviewsCount > 0 && <Badge className="ml-auto bg-destructive text-destructive-foreground">{pendingReviewsCount}</Badge>}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Recent Activity */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>Latest updates and notifications.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {recentActivities.map((activity) => (
                                    <li key={activity.id} className="flex items-start space-x-3">
                                        <Briefcase className="mt-1 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm">{activity.description}</p>
                                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Placeholder for more detailed reports/charts */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sales Overview</CardTitle>
                        <CardDescription>Monthly sales performance chart (placeholder).</CardDescription>
                    </CardHeader>
                    <CardContent className="h-64 md:h-96">
                        <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex h-full items-center justify-center overflow-hidden rounded-xl border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            <p className="text-muted-foreground">Chart will be displayed here</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
