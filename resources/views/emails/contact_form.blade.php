<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .email-container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; }
        .header { background-color: #007562; color: #ffffff; padding: 10px 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; background-color: #ffffff; }
        .content p { margin-bottom: 10px; }
        .content strong { color: #005c4f; }
        .message-box { background-color: #f8f8f8; padding: 15px; border-left: 4px solid #007562; margin-top: 15px; border-radius: 3px;}
        .footer { text-align: center; font-size: 0.9em; color: #777; padding-top: 15px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 15px;}
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #eee;}
        th { background-color: #e9f5f3; width: 30%;}
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h2>New Contact Form Submission</h2>
        </div>
        <div class="content">
            <p>You have received a new message through the contact form on your website:</p>

            <table>
                <tr><th>From:</th><td>{{ $userName }}</td></tr>
                <tr><th>Email:</th><td><a href="mailto:{{ $userEmail }}">{{ $userEmail }}</a></td></tr>
                <tr><th>Subject:</th><td>{{ $subjectLine }}</td></tr>
            </table>

            <div class="message-box">
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">{{ $userMessage }}</p>
            </div>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>