<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;


class CardRequest extends FormRequest
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
        return [
            'title' => ['required', 'string'],
            'category' => ['required'],
            'genres' => ['required'],
            'description'=> ['nullable','string'],
            'url'=> ['nullable','string'],
            'img'=> ['nullable','string'],
            'location'=> ['nullable','string'],
            'start'=> ['nullable','date_format:H:i'],
            'end'=> ['nullable','date_format:H:i'],
            'close'=> ['nullable'],
            'level'=> ['nullable','string'],
        ];
    }
}
