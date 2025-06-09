import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { SharedData, TourLocation, type BreadcrumbItem, FlashMessage, ItineraryItem } from '@/types';
import Heading from '@/components/heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InputError from '@/components/input-error';
import { toast } from 'sonner';
import { useEffect, useState, Fragment } from 'react';
import { Edit3, Trash2 } from 'lucide-react';

const categories = ['Safari', 'Beach Holiday', 'Mountain Trekking', 'Cultural Tour', 'City Tour', 'Adventure Sports']; // Keep or fetch dynamically

interface TourDataForForm {
    id: number;
    title: string;
    description: string;
    location: string; // Name of the location
    duration_days: number;
    low_season_price: string | number;
    high_season_price: string | number;
    image_url?: string | null; // URL of the existing image
    highlights: string | null;
    is_featured: boolean;
    itineraries: ItineraryItem[];
}

interface EditPageProps extends SharedData {
    tour: TourDataForForm;
    locations: TourLocation[];
    flash: FlashMessage;
}

export default function EditTour() {
    const { props } = usePage<EditPageProps>();
    const { tour, locations: allLocations, flash } = props;

    const [imagePreview, setImagePreview] = useState<string | null>(tour.image_url || null);

    const { data, setData, post, processing, errors, progress, transform } = useForm({
        _method: 'PUT', // Method spoofing for Laravel
        title: tour.title || '',
        description: tour.description || '',
        location: tour.location || '', // Pre-fill with current location name
        duration_days: tour.duration_days || 1,
        low_season_price: String(tour.low_season_price || ''),
        high_season_price: String(tour.high_season_price || ''),
        image: null as File | null, // New image file
        highlights: tour.highlights || '',
        is_featured: tour.is_featured || false,
    });

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Dashboard', href: route('admin.dashboard') },
        { title: 'Tours', href: route('admin.tours.index') },
        { title: 'Edit Tour', href: route('admin.tours.edit', tour.id) },
    ];

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setData('image', file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setData('image', null);
            // If they clear the file input, revert to original image or no preview
            setImagePreview(tour.image_url || null);
        }
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // Inertia's `post` method with `_method: 'PUT'` handles multipart/form-data for file uploads.
        post(route('admin.tours.update', tour.id), {
            // preserveState: true, // Might be useful if you want to avoid full page reload on validation errors
            onSuccess: () => {
                // toast.success('Tour package updated successfully!'); // Handled by flash message from backend
                // router.visit(route('admin.tours.index')); // Redirect is handled by backend
            },
            onError: (pageErrors) => {
                console.error('Form submission error:', pageErrors);
                toast.error('Failed to update tour. Please check the form for errors.');
            },
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Edit Tour - ${tour.title}`} />
            <Heading title="Edit Tour Package" description={`Updating details for "${tour.title}"`} />

            <form onSubmit={handleSubmit}>
                <Card>
                    <CardHeader>
                        <CardTitle>Tour Details</CardTitle>
                        <CardDescription>Modify the information for the tour package.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {/* Title, Description, Location, Duration, Prices - similar to Create.tsx */}
                        {/* ... (Copy relevant fields from Create.tsx, ensuring values are from `data.fieldName`) ... */}
                        {/* Example for Title: */}
                        <div className="space-y-1.5 md:col-span-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" value={data.title} onChange={(e) => setData('title', e.target.value)} required />
                            <InputError message={errors.title} />
                        </div>
                        {/* Description */}
                        <div className="space-y-1.5 md:col-span-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} rows={5} required />
                            <InputError message={errors.description} />
                        </div>
                        {/* Location */}
                        <div className="space-y-1.5">
                            <Label htmlFor="location">Location</Label>
                            <Select value={data.location} onValueChange={(value) => setData('location', value)} required>
                                <SelectTrigger id="location"><SelectValue placeholder="Select Location" /></SelectTrigger>
                                <SelectContent>
                                    {allLocations.map((loc) => (
                                        <SelectItem key={loc.id} value={loc.name}>{loc.name}, {loc.country}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <InputError message={errors.location} />
                        </div>
                         {/* Duration */}
                        <div className="space-y-1.5">
                            <Label htmlFor="duration_days">Duration (Days)</Label>
                            <Input id="duration_days" type="number" value={data.duration_days} onChange={(e) => setData('duration_days', parseInt(e.target.value,10) || 1)} min="1" required />
                            <InputError message={errors.duration_days} />
                        </div>
                        {/* Low Season Price */}
                        <div className="space-y-1.5">
                            <Label htmlFor="low_season_price">Low Season Price ($)</Label>
                            <Input id="low_season_price" type="number" value={data.low_season_price} onChange={(e) => setData('low_season_price', e.target.value)} min="0" step="0.01" required />
                            <InputError message={errors.low_season_price} />
                        </div>
                        {/* High Season Price */}
                        <div className="space-y-1.5">
                            <Label htmlFor="high_season_price">High Season Price ($)</Label>
                            <Input id="high_season_price" type="number" value={data.high_season_price} onChange={(e) => setData('high_season_price', e.target.value)} min="0" step="0.01" required />
                            <InputError message={errors.high_season_price} />
                        </div>

                        {/* Image Upload */}
                        <div className="space-y-1.5">
                            <Label htmlFor="image">Tour Image (leave blank to keep current)</Label>
                            {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 h-32 w-auto rounded object-cover" />}
                            <Input id="image" type="file" onChange={handleImageChange} accept="image/*" />
                            {progress && progress.percentage && (
                                <progress value={progress.percentage} max="100" className="mt-1 w-full">{progress.percentage}%</progress>
                            )}
                            <InputError message={errors.image} />
                        </div>

                        {/* Highlights */}
                        <div className="space-y-1.5 md:col-span-2">
                            <Label htmlFor="highlights">Highlights (comma-separated)</Label>
                            <Textarea id="highlights" value={data.highlights || ''} onChange={(e) => setData('highlights', e.target.value)} rows={3} />
                            <InputError message={errors.highlights} />
                        </div>

                        {/* Is Featured */}
                        <div className="flex items-center space-x-2 md:col-span-2">
                            <Checkbox id="is_featured" checked={data.is_featured} onCheckedChange={(checked) => setData('is_featured', Boolean(checked))} />
                            <Label htmlFor="is_featured" className="cursor-pointer font-normal">Mark as Featured Package</Label>
                            <InputError message={errors.is_featured} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2 border-t pt-6">
                        <Button type="button" variant="outline" asChild>
                            <Link href={route('admin.tours.index')}>Cancel</Link>
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : 'Save Changes'}
                        </Button>
                    </CardFooter>
                </Card>
            </form>
            <div className="mt-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Tour Itinerary</CardTitle>
                            <CardDescription>Manage the day-by-day plan for this tour.</CardDescription>
                        </div>
                        <Button asChild>
                            <Link href={route('admin.tours.itineraries.create', tour.id)}>Add Itinerary Day</Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        {tour.itineraries && tour.itineraries.length > 0 ? (
                            <div className="space-y-4">
                                {tour.itineraries.map((item) => (
                                    <Card key={item.id} className="overflow-hidden">
                                        <CardHeader className="flex flex-row items-center justify-between bg-muted/50 p-4">
                                            <CardTitle className="text-lg">
                                                Day {item.day_number}: {item.title}
                                            </CardTitle>
                                            <div className="space-x-2">
                                                <Button variant="outline" size="sm" asChild>
                                                <Link href={route('admin.tours.itineraries.edit', { tour: tour.id, itinerary: item.id })} >
                                                        <Edit3 className="mr-1 h-4 w-4" /> Edit
                                                    </Link>
                                                </Button>
                                                <Button variant="destructive" size="sm" onClick={() => {/* handleDeleteItinerary(item.id) */ toast.info('Delete itinerary not yet implemented.')}}>
                                                    <Trash2 className="mr-1 h-4 w-4" /> Delete
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-4">
                                            <p className="whitespace-pre-wrap text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <p className="py-4 text-center text-muted-foreground">
                                No itinerary items added yet. Click "Add Itinerary Day" to start.
                            </p>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    )
}