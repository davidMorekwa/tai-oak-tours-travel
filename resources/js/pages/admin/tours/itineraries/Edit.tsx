import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { type BreadcrumbItem, type SharedData, FlashMessage, ItineraryItem as ItineraryData } from '@/types';
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

interface EditItineraryPageProps extends SharedData {
    tour: TourInfo;
    itinerary: ItineraryData; // This is the specific itinerary item being edited
    flash: FlashMessage;
}

export default function EditItinerary() {
    const { props } = usePage<EditItineraryPageProps>();
    const { tour, itinerary, flash } = props;

    const { data, setData, put, processing, errors, reset } = useForm({
        _method: 'PUT', // For Laravel to recognize it as a PUT request
        day_number: itinerary.day_number || 1,
        title: itinerary.title || '',
        description: itinerary.description || '',
    });

    useEffect(() => {
        if (flash?.success) toast.success(flash.success);
        if (flash?.error) toast.error(flash.error);
    }, [flash]);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: route('dashboard') },
        { title: 'Tours', href: route('admin.tours.index') },
        { title: `Edit: ${tour.title}`, href: route('admin.tours.edit', tour.id) },
        { title: `Edit Itinerary Day ${itinerary.day_number}`, href: route('admin.tours.itineraries.edit', { tour: tour.id, itinerary: itinerary.id }) },
    ];

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        put(route('admin.tours.itineraries.update', { tour: tour.id, itinerary: itinerary.id }), {
            onSuccess: () => {
                // Backend redirects to tour edit page with flash message
            },
            onError: (pageErrors) => {
                console.error('Form submission error:', pageErrors);
                toast.error('Failed to update itinerary. Please check the form.');
            },
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Itinerary Day ${itinerary.day_number} for ${tour.title}`} />
            <Heading
                title={`Edit Itinerary Day ${itinerary.day_number}`}
                description={`Updating details for "${itinerary.title}" in tour "${tour.title}".`}
            />

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Itinerary Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <Label htmlFor="day_number">Day Number</Label>
                            <Input id="day_number" type="number" value={data.day_number} onChange={(e) => setData('day_number', parseInt(e.target.value, 10) || 1)} min="1" required />
                            <InputError message={errors.day_number} />
                        </div>
                        <div>
                            <Label htmlFor="title">Activity Title / Headline</Label>
                            <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                            <InputError message={errors.title} />
                        </div>
                        <div>
                            <Label htmlFor="description">Day's Description</Label>
                            <Textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} rows={5} required />
                            <InputError message={errors.description} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2 border-t pt-6">
                        <Button type="button" variant="outline" asChild>
                            <Link href={route('admin.tours.edit', tour.id)}>Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </AppLayout>
    );
}