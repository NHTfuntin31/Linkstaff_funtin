<?php

namespace App\Http\Requests;
use Carbon\Carbon;

use Illuminate\Foundation\Http\FormRequest;

class Profile_update extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // return [
        //     'MaSo' => 'required|unique:sinhviens,MaSo',
        //     'HoTen' => 'required',
        //     'NgaySinh' => 'required|before:'.Carbon::now(),
        //     'SoDT' => 'required|numeric|digits:11',
        //     'email' => [
        //         'required',
        //         'email',
        //         'regex:/^[\w.-]+@(gmail|hotmail|yahoo)\.com$/i',
        //     ],
        // ];
        return [
            'Number' => ['required',
                        'unique:users,Number',],
                       // 'regex:/^(0|1|2)\d{2}([0-9])\d{1}([0-9][0-9]|[1-9]0[4|5|6])\d{6}$/'],
            'Name' => 'required',
            'DateOfBirth' => 'required|before:'.Carbon::now()->subYears(10),
            'PhoneNB' => 'required|numeric|digits:11',
            'email' => [
                'required',
                'email',
                'unique:users',
                'regex:/^[\w.-]+@(gmail|hotmail|yahoo)\.com$/i',
            ],
            
        ];
    }


    //lay loi tu messages hien thi
    public function messages()
    {
        // return[
        //     'MaSo.required' => 'Ma So can not be empty',
        //     'MaSo.unique' => 'Ma So ['.$this->MaSo.'] Exits',
        //     'HoTen.required'=>'Ho Ten can not be empty',
        //     'NgaySinh.before' => 'Date'.$this->NgaySinh.'Can not over than today',
        //     'SoDT' => 'So DT can not be empty',
        //     'SoDT.digits' => 'so dien thoai phai la 11 chu so'
        // ];
        return[
            'Number.required' => '学生番号を入力してください',
            'Number.unique' => '学生番号 ['.$this->Number.'] 存在している',
            'Name.required'=>'氏名を入力してください',
            'DateOfBirth.before' => '10歳以上入力可',
            'PhoneNB.required' => '電話番号を入力してください',
            'PhoneNB.digits' => '電話番号は11数字です',
            'email.unique' => 'email '.$this->email.' 存在している',
            
        ];
    }
}
