import AppLayout from '@/layouts/app-layout';
import { Head, Link, router, usePage } from '@inertiajs/react'; // Added router
import { type BreadcrumbItem, type SharedData, type FlashMessage } from '@/types/index'; // Added FlashMessage
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Badge } from '@/components/ui/badge';
import { PlusCircle, Edit3, Trash2, Eye } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';

interface TourForListing {
    id: number;
    title: string;
    image_url: string | null;
    country: string;
    duration_days: number;
    low_season_price: number | string; // Can be string from form, ensure number for display
    is_featured: boolean;
    // edit_url?: string; // Optional: if passed from backend
}

interface IndexPageProps extends SharedData {
    tours: TourForListing[];
    flash: FlashMessage; // Re-enabled flash
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: route('admin.dashboard') },
    { title: 'Tours', href: route('admin.tours.index') },
];

export default function Index() {
    const { props } = usePage<IndexPageProps>();
    const { tours, flash } = props; // Destructure flash

    useEffect(() => { // Re-enabled flash message handling
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);

    const handleDelete = (tourId: number) => {
        if (confirm('Are you sure you want to delete this tour package? This action cannot be undone.')) {
            router.delete(route('admin.tours.destroy', tourId), { // Using Inertia's router.delete
                preserveScroll: true, // Optional: to keep scroll position after redirect
                // onSuccess and onError here are for client-side handling *before* the server responds with a redirect.
                // The toast messages for success/error are better handled by the flash messages from the server redirect.
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Tour Packages" />

            <div className="flex items-center justify-between">
                <Heading title="Tour Packages" description="Manage all your tour packages." />
                <Button asChild>
                    <Link href={route('admin.tours.create')}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add New Tour
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>All Tours</CardTitle>
                </CardHeader>
                <CardContent>
                    {tours.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px]">Image</TableHead>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Country</TableHead>
                                    <TableHead className="text-center">Duration</TableHead>
                                    <TableHead className="text-right">Price (Low Season)</TableHead>
                                    <TableHead className="text-center">Featured</TableHead>
                                    <TableHead className="text-right w-[150px]">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tours.map((tour) => (
                                    <TableRow key={tour.id}>
                                        <TableCell>
                                            <img
                                                src={tour.image_url || 'https://via.placeholder.com/60x40?text=No+Image'}
                                                alt={tour.title}
                                                className="h-10 w-16 rounded object-cover"
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">{tour.title}</TableCell>
                                        <TableCell>{tour.country}</TableCell>
                                        <TableCell className="text-center">{tour.duration_days} days</TableCell>
                                        <TableCell className="text-right">
                                            ${parseFloat(String(tour.low_season_price)).toFixed(2)}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {tour.is_featured ? (
                                                <Badge variant="default">Yes</Badge>
                                            ) : (
                                                <Badge variant="outline">No</Badge>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button variant="outline" size="icon" asChild title="View Details">
                                                <Link href={route('details', tour.id)}> {/* Assuming public view route */}
                                                    <Eye className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="outline" size="icon" asChild title="Edit Tour">
                                                <Link href={route('admin.tours.edit', tour.id)}> {/* Replace # with route('admin.tours.edit', tour.id) */}
                                                    <Edit3 className="h-4 w-4" />
                                                </Link>
                                            </Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(tour.id)} title="Delete Tour">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-center text-muted-foreground">No tour packages found. Add your first one!</p>
                    )}
                </CardContent>
            </Card>
        </AppLayout>
    );
}