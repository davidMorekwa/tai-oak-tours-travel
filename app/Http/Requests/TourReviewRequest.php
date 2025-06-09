<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class TourReviewRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = [
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'comment' => ['string', 'min:10', 'max:5000'],
        ];

        if (!Auth::check()) { // If user is not logged in, require name and email
            $rules['name'] = ['required', 'string', 'max:255'];
            $rules['email'] = ['required', 'email', 'max:255'];
        }
        // If user is logged in, name and email will be taken from Auth::user()

        return $rules;
    }

    public function messages(): array
    {
        return [
            'rating.required' => 'Please provide a rating.',
            'rating.min' => 'Rating must be at least 1 star.',
            'rating.max' => 'Rating cannot exceed 5 stars.',
        ];
    }
}
