<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Profile extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        
        return [
            'name' => ['regex:/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u'],
            'name_kana' => ['regex:/^[\p{Katakana}\s]+$/u'],

            
                'sex' => ['regex:/^(女|男)$/'],
            
            'birthday' => ['date_format:Y/m/d'],
            'age' => ['numeric'],

        ];
        
    }

    public function messages()
    {
        return [
            'name.regex' => 'sai',
            'name_kata.regex' => 'qua sai',
            'sex.regex' => '男,女じゃないとだめ',
        ];
    }
}
