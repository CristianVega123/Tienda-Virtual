<?php

namespace App\Http\Requests;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{


    protected $stopOnFirstFailure = true;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize()
    {
        return $this->user()->can("create", $this->user());
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'product_image' => 'required|image',
            'product_name' => 'required|string|max:100|unique:App\\Models\\Product,prod_name',
            'product_price' => 'required|decimal:1,2',
            'product_units' => 'required|integer',
            'product_description' => 'nullable|string',
            'category_id' => 'required|numeric'
        ];
    }
}
