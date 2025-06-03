<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;

class ContactFormEmail extends Mailable
{
    use Queueable, SerializesModels;

    public string $userName;
    public string $userEmail;
    public ?string $subjectLine;
    public string $userMessage;

    /**
     * Create a new message instance.
     */
    public function __construct(
        string $userName,
        string $userEmail,
        ?string $subjectLine,
        string $userMessage
    ) {
        $this->userName = $userName;
        $this->userEmail = $userEmail;
        $this->subjectLine = $subjectLine ?: 'New Contact Form Submission';
        $this->userMessage = $userMessage;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            replyTo: [
                new Address($this->userEmail, $this->userName),
            ],
            to: [ // Send to your agency's configured "to" address
                new Address(config('mail.to.address'), config('mail.to.name')),
            ],
            subject: $this->subjectLine,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.contact_form',
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
