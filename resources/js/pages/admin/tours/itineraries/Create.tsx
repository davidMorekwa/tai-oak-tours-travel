import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { type BreadcrumbItem, type SharedData, FlashMessage } from '@/types';
import Heading from '@/components/heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import InputError from '@/components/input-error';
import { toast } from 'sonner';
import { useEffect } from 'react';

interface TourInfo {
    id: number;
    title: string;
}

interface CreateItineraryPageProps extends SharedData {
    tour: TourInfo;
    nextDayNumber: number;
    flash: FlashMessage;
}

export default function CreateItinerary() {
    const { props } = usePage<CreateItineraryPageProps>();
    const { tour, nextDayNumber, flash } = props;

    const { data, setData, post, processing, errors, reset } = useForm({
        day_number: nextDayNumber || 1,
        title: '',
        description: '',
    });

    useEffect(() => {
        // This page might not receive flash messages directly if redirecting elsewhere
        // But good to have if we ever redirect back here with a message
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: route('admin.dashboard') },
        { title: 'Tours', href: route('admin.tours.index') },
        { title: `Edit: ${tour.title}`, href: route('admin.tours.edit', tour.id) },
        { title: 'Add Itinerary Item', href: route('admin.tours.itineraries.create', tour.id) },
    ];

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.tours.itineraries.store', tour.id), {
            onSuccess: () => {
                // Backend redirects to tour edit page with flash message
                // reset(); // Reset form if staying on page, but we are redirecting
            },
            onError: (pageErrors) => {
                console.error('Form submission error:', pageErrors);
                toast.error('Failed to add itinerary. Please check the form.');
            },
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Add Itinerary to ${tour.title}`} />
            <Heading
                title={`Add Itinerary Item for "${tour.title}"`}
                description="Detail the plan for a specific day of the tour."
            />

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>New Itinerary Day</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label htmlFor="day_number">Day Number</Label>
                            <Input id="day_number" type="number" value={data.day_number} onChange={(e) => setData('day_number', parseInt(e.target.value, 10) || 1)} min="1" required />
                            <InputError message={errors.day_number} />
                        </div>
                        <div>
                            <Label htmlFor="title">Activity Title / Headline</Label>
                            <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} placeholder="e.g., Arrival & Hotel Transfer" required />
                            <InputError message={errors.title} />
                        </div>
                        <div>
                            <Label htmlFor="description">Day's Description</Label>
                            <Textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} placeholder="Detailed activities for the day..." rows={5} required />
                            <InputError message={errors.description} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2 border-t pt-6">
                        <Button type="button" variant="outline" asChild>
                            <Link href={route('admin.tours.edit', tour.id)}>Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Add Itinerary Item'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </AppLayout>
    );
}