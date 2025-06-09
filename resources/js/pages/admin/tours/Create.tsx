import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox'; // Make sure this component exists
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea'; // Make sure this component exists
import AppLayout from '@/layouts/app-layout';
import { SharedData, TourLocation, type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';

// Dummy data for selects - in a real app, this might come from props or an API
// const countries = ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Zanzibar'];

const categories = ['Safari', 'Beach Holiday', 'Mountain Trekking', 'Cultural Tour', 'City Tour', 'Adventure Sports'];

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: route('admin.dashboard') }, // Assuming 'dashboard' is the admin dashboard route
    { title: 'Tours', href: route('admin.tours.index') }, // Replace # with route('admin.tours.index') if you have a tour listing page
    { title: 'Add New Tour', href: route('admin.tours.create') },
];

export default function CreateTour() {
    const { props } = usePage<SharedData>();
    const locations = props.locations as TourLocation[];

    const { data, setData, post, processing, errors, reset, progress } = useForm({
        title: '',
        description: '',
        location: '',
        duration_days: 1,
        low_season_price: '', // Use string for input, parse on backend or before sending
        high_season_price: '', // Use string for input
        image: null as File | null, // For file upload
        highlights: '', // Comma-separated string
        is_featured: false,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.tours.store'), {
            onSuccess: () => {
                reset();
                // Optionally, redirect or show a success notification
                // router.visit(route('admin.tours.index'));
            },
            onError: (pageErrors) => {
                console.error(pageErrors);
            },
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add New Tour Package" />
            <Heading title="Create New Tour Package" description="Fill in the details below to add a new tour." />

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Tour Details</CardTitle>
                        <CardDescription>Provide the necessary information for the new tour package.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Title */}
                        <div className="space-y-1.5 md:col-span-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="e.g., 7 Days Maasai Mara & Amboseli Adventure"
                                required
                            />
                            <InputError message={errors.title} />
                        </div>

                        {/* Description */}
                        <div className="space-y-1.5 md:col-span-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Detailed description of the tour package..."
                                rows={5}
                                required
                            />
                            <InputError message={errors.description} />
                        </div>

                        {/* Country */}
                        <div className="space-y-1.5">
                            <Label htmlFor="country">Location</Label>
                            <Select value={data.location} onValueChange={(value) => setData('location', value)} required>
                                <SelectTrigger id="country">
                                    <SelectValue placeholder="Select Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    {locations.map((location) => (
                                        <SelectItem key={location.id} value={location.name}>
                                            {location.name}, {location.country}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={errors.location} />
                        </div>

                        {/* Duration */}
                        <div className="space-y-1.5">
                            <Label htmlFor="duration_days">Duration (Days)</Label>
                            <Input
                                id="duration_days"
                                type="number"
                                value={data.duration_days}
                                onChange={(e) => setData('duration_days', parseInt(e.target.value, 10) || 1)}
                                min="1"
                                required
                            />
                            <InputError message={errors.duration_days} />
                        </div>

                        {/* Low Season Price */}
                        <div className="space-y-1.5">
                            <Label htmlFor="low_season_price">Low Season Price ($)</Label>
                            <Input
                                id="low_season_price"
                                type="number"
                                value={data.low_season_price}
                                onChange={(e) => setData('low_season_price', e.target.value)}
                                min="0"
                                step="0.01"
                                placeholder="e.g., 1500.00"
                                required
                            />
                            <InputError message={errors.low_season_price} />
                        </div>

                        {/* High Season Price */}
                        <div className="space-y-1.5">
                            <Label htmlFor="high_season_price">High Season Price ($)</Label>
                            <Input
                                id="high_season_price"
                                type="number"
                                value={data.high_season_price}
                                onChange={(e) => setData('high_season_price', e.target.value)}
                                min="0"
                                step="0.01"
                                placeholder="e.g., 2000.00"
                                required
                            />
                            <InputError message={errors.high_season_price} />
                        </div>

                        {/* Image Upload */}
                        <div className="space-y-1.5">
                            <Label htmlFor="image">Tour Image</Label>
                            <Input
                                id="image"
                                type="file"
                                onChange={(e) => setData('image', e.target.files ? e.target.files[0] : null)}
                                accept="image/*"
                            />
                            {progress && (
                                <progress value={progress.percentage} max="100" className="mt-1 w-full">
                                    {progress.percentage}%
                                </progress>
                            )}
                            <InputError message={errors.image} />
                        </div>

                        {/* Highlights */}
                        <div className="space-y-1.5 md:col-span-2">
                            <Label htmlFor="highlights">Highlights (comma-separated)</Label>
                            <Textarea
                                id="highlights"
                                value={data.highlights}
                                onChange={(e) => setData('highlights', e.target.value)}
                                placeholder="e.g., Big Five sightings, Great Migration, Cultural village visit, Hot air balloon option"
                                rows={3}
                            />
                            <InputError message={errors.highlights} />
                        </div>

                        {/* Is Featured */}
                        <div className="flex items-center space-x-2 md:col-span-2">
                            <Checkbox
                                id="is_featured"
                                checked={data.is_featured}
                                onCheckedChange={(checked) => setData('is_featured', Boolean(checked))}
                            />
                            <Label htmlFor="is_featured" className="cursor-pointer font-normal">
                                Mark as Featured Package
                            </Label>
                            <InputError message={errors.is_featured} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2 border-t pt-6">
                        <Button type="button" variant="outline" onClick={() => reset()} disabled={processing}>
                            Reset Form
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save Tour Package'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </AppLayout>
    );
}
