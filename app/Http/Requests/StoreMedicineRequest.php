<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Medicine;

class StoreMedicineRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return $this->user()->can('create',Medicine::class);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'=>'required|string',
            'quantity'=>'required|integer',
            'unit'=>'required|string',
            'expires_at'=>'required|date',
            'active_ingredients'=>'array',
            'active_ingredients.*.name'=>'string|required',
            'active_ingredients.*.quantity'=>'integer|required',
            'active_ingredients.*.unit'=>'string|required'
        ];
    }
}
