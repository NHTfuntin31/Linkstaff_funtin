<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    { //để chạy validator thì chuyển thành true
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required', //|unique:students,name
            'age' => 'nullable|integer|min:1|max:200',
            'name_kana' => ['nullable', 'regex:/^[\p{Katakana}\s]+$/u'],
            'email' =>  ['nullable', 'regex:/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ '],

            // 'sex' => 'required|in:male,female',

            'birthday' => 'nullable|date|before:today',
            'hire_date' => 'nullable',
            'intern_department' => 'nullable',
            'intern_result' => 'nullable',

        ];
    }
    public function messages()
    {
        return [
            'name.unique' => '名前は存在しています。。',
            'name.required' => '名前は空白にできません。',
            'age.required' => '年齢を空欄にすることはできません。',
            'age.integer' => '年齢は整数でなければなりません。.',
            'age.min' => 'age は :min よりも古い必要があります。',
            'age.max' => '正しい年齢を入力してください。',

            'name_kana.regex' => '名前はカタカナでなければなりません。（例グエン）',

            // 'sex.required' => '性別を空欄にすることはできません。',
            'birthday.before' => '日付フィールドの値は今日の日付より大きくすることはできません。',
            'birthday.date' => '日付フィールドの日付より大きくすることはできません。',

            'phone.' => '電話番号は数字で入力してください。',
            'email.regex' => ' メール形式が正しくない。',

            // // '' => '',
        ];
    }
}
