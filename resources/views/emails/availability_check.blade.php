<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tour Availability Inquiry</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .email-container { width: 100%; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 5px; }
        .header { background-color: #007562; color: #ffffff; padding: 10px 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; background-color: #ffffff; }
        .content p { margin-bottom: 10px; }
        .content strong { color: #005c4f; }
        .footer { text-align: center; font-size: 0.9em; color: #777; padding-top: 15px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 15px;}
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #eee;}
        th { background-color: #e9f5f3; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h2>Tour Availability Inquiry</h2>
        </div>
        <div class="content">
            <p>Hello Admin,</p>
            <p>You have received a new tour availability inquiry with the following details:</p>

            <table>
                <tr><th>Tour/Destination:</th><td>{{ $tourName }}</td></tr>
                <tr><th>User Email:</th><td><a href="mailto:{{ $userEmail }}">{{ $userEmail }}</a></td></tr>
                @if($checkInDate)
                    <tr><th>CheckInDate Date:</th><td>{{ $checkInDate }}</td></tr>
                @endif
                @if($checkOutDate)
                    <tr><th>CheckOut Date:</th><td>{{ $checkOutDate }}</td></tr>
                @endif
                @if($numberOfPeople)
                    <tr><th>Number of People:</th><td>{{ $numberOfPeople }}</td></tr>
                @endif
            </table>

            @if($userMessage)
                <p><strong>Additional Message:</strong></p>
                <p style="white-space: pre-wrap; background-color: #f8f8f8; padding: 10px; border-radius: 3px;">{{ $userMessage }}</p>
            @endif

            <p>Please follow up with the user regarding their request.</p>
        </div>
        <div class="footer">
            <p>&copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>