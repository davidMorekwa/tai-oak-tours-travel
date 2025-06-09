// /Users/dave/Code/travel-agency/resources/js/pages/ContactUs.tsx

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Head, Link, useForm, usePage } from '@inertiajs/react'; // Import useForm
import { Mail, MapPin, MapPlus, Phone } from 'lucide-react'; // Icons for contact details
// Import useInView and cn
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { SharedData } from '@/types';
import PublicNavbar from '@/components/public-navbar';
import PublicFooter from '@/components/public-footer';

// Define logo path
const logoUrl = '/storage/image_assets/logo.png'; // Adjust path if needed

export default function ContactUs() {
    const { props, component } = usePage<SharedData>();
    const logoUrl = '/storage/image_assets/logo.jpg';
    // Setup useInView hooks for each section with staggering delays
    const animationOptions = { triggerOnce: true, threshold: 0.1 };
    const { ref: heroRef, inView: heroInView } = useInView(animationOptions);
    const { ref: formDetailsRef, inView: formDetailsInView } = useInView(animationOptions);
    const { ref: mapRef, inView: mapInView } = useInView(animationOptions);

    // Use Inertia's useForm for the contact form
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('contact.submit'), {
            preserveScroll: true,
            onSuccess: () => {
                reset(); // Clear form fields on success
                alert('Thank you for your message! We will get back to you shortly.'); // Or use a more elegant notification
            },
            onError: (formErrors) => {
                console.error('Contact form submission error:', formErrors);
                // You can display errors more gracefully if needed
                alert('There was an error submitting your message. Please check the form and try again.');
            },
        });
    };

    return (
        <>
            <Head title="Contact Tai-Oak Tours & Travel" />

            {/* Main Content Area */}
            <div className="flex min-h-screen flex-col items-center bg-[#fff7d6] text-[#1b1b18]">
                {/* --- Navigation Header --- */}
                <PublicNavbar />
                {/* --- End Navigation Header --- */}

                {/* Content Sections Wrapper */}
                <div className="w-full max-w-7xl px-4 py-6 md:px-6 lg:px-8 lg:py-8">
                    {/* Hero Section - ANIMATED */}
                    <section
                        ref={heroRef}
                        className={cn(
                            'mb-8 rounded-lg bg-gradient-to-r from-[#152253] to-[#0e1630] p-8 py-12 text-center text-white shadow-lg md:py-16',
                            'opacity-0 transition-opacity duration-1000 ease-in-out', // Base animation
                            heroInView ? 'opacity-100' : '', // In view state
                        )}
                    >
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Get In Touch</h1>
                        <p className="mx-auto max-w-3xl text-lg text-gray-300">
                            Have questions about our tours, need help planning your trip, or just want to say hello? We'd love to hear from you! Reach
                            out using the form below or contact us directly.
                        </p>
                    </section>

                    {/* Contact Form & Details Section - ANIMATED */}
                    <section
                        ref={formDetailsRef}
                        className={cn(
                            'mb-8 rounded-lg bg-white p-6 shadow-md md:p-8', // White background
                            'opacity-0 transition-opacity duration-1000 ease-in-out delay-100', // Animation + delay
                            formDetailsInView ? 'opacity-100' : '',
                        )}
                    >
                        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
                            {/* Contact Details (Takes up 2/5 columns on large screens) */}
                            <div className="lg:col-span-2">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="mt-1 h-6 w-6 shrink-0 text-[#007562]" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                                            <address className="not-italic text-gray-600">
                                                Muthaiga Square, Thika Road
                                                <br />
                                                Nairobi, Kenya
                                            </address>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="mt-1 h-6 w-6 shrink-0 text-[#007562]" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                                            <a href="tel:+254700123456" className="text-gray-600 hover:text-[#007562] hover:underline">
                                                +254 741 775 694
                                            </a>
                                            <p className="text-sm text-gray-500">(Mon-Fri, 9am - 5pm EAT)</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="mt-1 h-6 w-6 shrink-0 text-[#007562]" />
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                                            <a href="mailto:info@taioaktours.co.ke" className="text-gray-600 hover:text-[#007562] hover:underline">
                                                taioaktraveltours2025@gmail.com
                                            </a>
                                            <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form (Takes up 3/5 columns on large screens) */}
                            <div className="lg:col-span-3">
                                <h2 className="mb-6 text-3xl font-bold text-gray-900">Send Us a Message</h2>
                                <form onSubmit={handleContactSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                                                Full Name <span className="text-red-600">*</span>
                                            </label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Your Name"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                                disabled={processing}
                                            />
                                            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                                                Email Address <span className="text-red-600">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                required
                                                disabled={processing}
                                            />
                                            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="mb-1 block text-sm font-medium text-gray-700">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            type="text"
                                            placeholder="e.g., Enquiry about Maasai Mara Safari"
                                            value={data.subject}
                                            onChange={(e) => setData('subject', e.target.value)}
                                            disabled={processing}
                                        />
                                        {errors.subject && <p className="mt-1 text-xs text-red-600">{errors.subject}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                                            Your Message <span className="text-red-600">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 w-full rounded-md border bg-transparent p-3 text-base shadow-xs transition-[color,box-shadow] focus:outline-none focus-visible:ring-[3px] md:text-sm"
                                            placeholder="Tell us how we can help..."
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            required
                                            disabled={processing}
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                                    </div>
                                    <div className="text-right">
                                        <Button type="submit" variant={'default'} size={'lg'} disabled={processing}>
                                            Send Message
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Map Section - ANIMATED */}
                    <section
                        ref={mapRef}
                        className={cn(
                            'mb-8 rounded-lg bg-[#f5e7c5] p-6 shadow-md md:p-8', // Cream background
                            'opacity-0 transition-opacity duration-1000 ease-in-out delay-200', // Animation + delay
                            mapInView ? 'opacity-100' : '',
                        )}
                    >
                        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">Find Us Here</h2>
                        <div className="overflow-hidden rounded-lg shadow-md">
                            {/* Replace with your actual Google Maps embed code */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.850881570899!2d36.84701397496561!3d-1.261930998682896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x182f170978780797%3A0x7209355894759bac!2sMuthaiga%20Square!5e0!3m2!1sen!2ske!4v1716218900000!5m2!1sen!2ske"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tai-Oak Tours Location"
                            ></iframe>
                        </div>
                    </section>
                </div>{' '}
                {/* End content wrapper */}
                {/* --- Footer --- */}
                <PublicFooter />
                {/* --- End Footer --- */}
            </div>{' '}
            {/* End main content div */}
        </> // End fragment
    );
}
