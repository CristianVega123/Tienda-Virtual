<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'prod_id' => 'required|numeric',
            'product_name' => 'string|max:100|unique:App\\Models\\Product,prod_name',
            'product_price' => 'decimal:1,2',
            'product_units' => 'integer',
            'product_description' => 'nullable|string',
            'product_image' => 'image',
            'category_id' => 'required|numeric'
        ];
    }
}
