import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Tai-Oak Tours & Travel">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8">
                <header className="mb-6 w-full z-2 max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex w-full items-center justify-around gap-4 rounded-4xl border border-red-900 bg-[#152238]">
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm px-5 py-2 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                        >
                            About Us
                        </Link>
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                        >
                            Hotels
                        </Link>
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm px-5 py-1.5 text-sm leading-normal text-[#EDEDEC] hover:cursor-pointer"
                        >
                            Destinations
                        </Link>
                    </nav>
                </header>
                <div className="flex w-full items-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <div>
                        <h3>Popular Destinations</h3>
                    </div>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
