<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class CheckAvailabilityEmail extends Mailable
{
    use Queueable, SerializesModels;

    public string $destination;
    public string $userEmail;
    public string $userName;
    public ?string $checkInDate;
    public ?string $checkOutDate; // e.g., "December 2024" or "2024-12-15"
    public ?int $numberOfPeople;
    public ?string $userMessage;

    /**
     * Create a new message instance.
     */
    public function __construct(
        string $destination,
        ?string $checkInDate = null,
        ?string $checkOutDate = null,
        string $userEmail,
        string $userName,
        ?int $numberOfPeople = null,
        ?string $userMessage = null
    )
    {
        $this->destination = $destination;
        $this->userEmail = $userEmail;
        $this->checkInDate = $checkInDate;
        $this->checkOutDate = $checkOutDate;
        $this->numberOfPeople = $numberOfPeople;
        $this->userMessage = $userMessage;
        $this->userName = $userName; 
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            replyTo: [
                new Address($this->userEmail),
            ],
            to: [
                new Address(config('mail.to.address'), config('mail.to.name')), // Agency's email
            ],
            subject: 'Tour Availability Inquiry: ' . $this->destination,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.availability_check', // We'll create this Blade view
            with: [
                'tourName' => $this->destination,
                'userEmail' => $this->userEmail,
                'userName' => $this->userName,
                'requestedDate' => $this->checkInDate,
                'checkOutDate' => $this->checkOutDate,
                'numberOfPeople' => $this->numberOfPeople,
                'userMessage' => $this->userMessage,
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
