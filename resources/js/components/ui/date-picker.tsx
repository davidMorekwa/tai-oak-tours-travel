// /Users/dave/Code/travel-agency/resources/js/components/ui/date-picker.tsx

'use client'; // Required for react-day-picker interaction

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Define the props the component accepts
interface DatePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    buttonId?: string; // Optional ID for the button
    placeholder?: string; // Optional placeholder text
    className?: string; // Allow passing additional classes
}

export function DatePicker({ date, setDate, buttonId, placeholder = 'Pick a date', className }: DatePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    id={buttonId} // Apply the optional ID
                    variant={'outline'}
                    className={cn(
                        'w-full justify-start text-left font-normal', // Changed from w-[280px] to w-full
                        !date && 'text-muted-foreground',
                        className, // Apply any additional classes passed in
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
        </Popover>
    );
}
