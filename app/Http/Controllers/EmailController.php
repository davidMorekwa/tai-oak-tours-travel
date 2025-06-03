<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\CheckAvailabilityEmail;
use App\Mail\ContactFormEmail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class EmailController extends Controller
{
    public function handleAvailabilityCheck(Request $request)
    {
        // Validate the request data (important!)
        $validatedData = $request->validate([
            'destination' => 'required|string|max:255',
            'user_email' => 'required|email|max:255',
            'user_name' => 'required|string|max:255',
            'check_in_date' => 'nullable|string|max:100',
            'check_out_date' => 'nullable|string|max:100',
            'number_of_people' => 'required|integer|min:1',
            'message' => 'nullable|string|max:2000',
        ]);

        // The email address of your agency where these inquiries should be sent
        $agencyAdminEmail = config('mail.to.address'); // Or get from config

        try {
            Mail::to($agencyAdminEmail)
                ->send(new CheckAvailabilityEmail(
                    $validatedData['destination'],
                    $validatedData['check_in_date'] ?? null,
                    $validatedData['check_out_date'] ?? null,
                    $validatedData['user_email'],
                    $validatedData['user_name'],
                    $validatedData['number_of_people'],
                    $validatedData['message'] ?? null
                ));
            Log::info('Availability check email sent successfully');


            // Redirect back with a success message
            return back()->with('status', 'Thank you! Your availability request has been sent. We will get back to you shortly.');

        } catch (\Exception $e) {
            Log::error('Failed to send availability check email: ' . $e->getMessage());
            // Redirect back with an error message
            return back()->with('error', 'Sorry, there was an issue sending your request. Please try again later or contact us directly.');
        }
    }

    public function handleContactFormSubmission(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:255',
            'message' => 'required|string|min:10|max:5000',
        ]);

        $agencyAdminEmail = config('mail.to.address', 'admin@yourtravelagency.com'); // Default if not in config

        try {
            Mail::to($agencyAdminEmail)
                ->send(new ContactFormEmail(
                    $validatedData['name'],
                    $validatedData['email'],
                    $validatedData['subject'] ?? 'General Inquiry', // Provide a default subject
                    $validatedData['message']
                ));

            Log::info('Contact form email sent successfully to ' . $agencyAdminEmail . ' from ' . $validatedData['email']);

            return Redirect::back()->with('status', 'Thank you for your message! We will get back to you shortly.');

        } catch (\Exception $e) {
            Log::error('Failed to send contact form email: ' . $e->getMessage(), [
                'exception' => $e,
                'data' => $validatedData
            ]);
            return Redirect::back()->with('error', 'Sorry, there was an issue sending your message. Please try again later or contact us directly.');
        }
    }
}
