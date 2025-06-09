import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import StarRating from '@/components/ui/star-rating';
import { AdminReviewsIndexPageProps, AdminReview, LinkItem, BreadcrumbItem } from '@/types';
import { CheckCircle, Clock, Trash2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: route('admin.dashboard') },
    { title: 'Manage Reviews', href: route('admin.reviews.index') },
];

export default function AdminReviewsIndex() {
    const { reviews: paginatedReviews, filters } = usePage<AdminReviewsIndexPageProps>().props;
    const [currentFilter, setCurrentFilter] = useState(filters.status);

    const handleFilterChange = (status: string) => {
        setCurrentFilter(status as 'all' | 'pending' | 'approved');
        router.get(route('admin.reviews.index'), { status }, { preserveState: true, replace: true });
    };

    const handleApprove = (reviewId: number) => {
        if (confirm('Are you sure you want to approve this review?')) {
            router.patch(route('admin.reviews.approve', reviewId), {}, {
                preserveScroll: true,
                onSuccess: () => alert('Review approved!'),
            });
        }
    };

    const handleUnapprove = (reviewId: number) => {
        if (confirm('Are you sure you want to unapprove this review?')) {
            router.patch(route('admin.reviews.unapprove', reviewId), {}, {
                preserveScroll: true,
                onSuccess: () => alert('Review unapproved!'),
            });
        }
    };

    const handleDelete = (reviewId: number) => {
        if (confirm('Are you sure you want to delete this review? This action cannot be undone.')) {
            router.delete(route('admin.reviews.destroy', reviewId), {
                preserveScroll: true,
                onSuccess: () => alert('Review deleted!'),
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Reviews" />
            <div className="flex h-full flex-1 flex-col gap-6 rounded-xl p-4 md:p-6">
                <div className="flex items-center justify-between">
                    <Heading title="Manage Customer Reviews" description="Approve, unapprove, or delete customer reviews." />
                    <div className="w-48">
                        <Select value={currentFilter} onValueChange={handleFilterChange}>
                            <SelectTrigger id="status-filter">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Reviews</SelectItem>
                                <SelectItem value="pending">Pending Approval</SelectItem>
                                <SelectItem value="approved">Approved</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-lg border bg-card text-card-foreground shadow-sm">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Reviewer</TableHead>
                                <TableHead>Tour</TableHead>
                                <TableHead className="text-center">Rating</TableHead>
                                <TableHead>Comment</TableHead>
                                <TableHead>Submitted</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paginatedReviews.data.length > 0 ? (
                                paginatedReviews.data.map((review: AdminReview) => (
                                    <TableRow key={review.id}>
                                        <TableCell>
                                            <div className="font-medium">{review.reviewer_name}</div>
                                            <div className="text-xs text-muted-foreground">{review.reviewer_email || review.user_name}</div>
                                        </TableCell>
                                        <TableCell className="max-w-xs truncate">{review.tour_title || 'N/A'}</TableCell>
                                        <TableCell className="text-center">
                                            <StarRating value={review.rating} size={16} readonly />
                                        </TableCell>
                                        <TableCell className="max-w-md truncate" title={review.comment}>{review.comment}</TableCell>
                                        <TableCell>{review.created_at_formatted}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge variant={review.is_approved ? 'default' : 'secondary'}
                                                   className={cn(review.is_approved ? 'bg-green-500 hover:bg-green-600' : 'bg-yellow-500 hover:bg-yellow-600', 'text-white')}>
                                                {review.is_approved ? 'Approved' : 'Pending'}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                            {!review.is_approved ? (
                                                <Button variant="ghost" size="icon" onClick={() => handleApprove(review.id)} title="Approve">
                                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                                </Button>
                                            ) : (
                                                <Button variant="ghost" size="icon" onClick={() => handleUnapprove(review.id)} title="Unapprove">
                                                    <XCircle className="h-5 w-5 text-yellow-600" />
                                                </Button>
                                            )}
                                            <Button variant="ghost" size="icon" onClick={() => handleDelete(review.id)} title="Delete">
                                                <Trash2 className="h-5 w-5 text-red-600" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center py-10">
                                        No reviews found for the selected filter.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination Links */}
                {paginatedReviews.links.length > 3 && (
                    <div className="mt-6 flex justify-center space-x-1">
                        {paginatedReviews.links.map((link: LinkItem, index: number) => (
                            <Link
                                key={index}
                                href={link.url || '#'}
                                className={cn(
                                    'px-3 py-1.5 md:px-4 md:py-2 border rounded-md text-xs md:text-sm font-medium transition-colors',
                                    link.active ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-card-foreground hover:bg-accent border-border',
                                    !link.url ? 'text-muted-foreground cursor-not-allowed bg-muted' : ''
                                )}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                preserveScroll
                            />
                        ))}
                    </div>
                )}
                 {paginatedReviews.total > 0 && (
                    <div className="mt-2 text-center text-sm text-muted-foreground">
                        Showing {paginatedReviews.from} to {paginatedReviews.to} of {paginatedReviews.total} reviews
                    </div>
                )}
            </div>
        </AppLayout>
    );
}