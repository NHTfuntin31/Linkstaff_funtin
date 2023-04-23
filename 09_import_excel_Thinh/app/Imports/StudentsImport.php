<?php

namespace App\Imports;

use App\Models\Student;
use App\Models\SkillMaster;
//以下のuseを追加します。
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\WithHeadingRow;	
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
use Illuminate\Support\Facades\Validator;			
						
use Illuminate\Support\Facades\DB;
class StudentsImport implements ToCollection, WithHeadingRow, WithValidation, WithCalculatedFormulas //追加したやつをここに書きます
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */

        /** public function model(array $row) でした。
         * 
        *インポートする前にチェックするためにpublic function collection(Collection $rows)を使います
        *
        *
        */
            //日にちは 「Y-m-d」にするfunction
            public function transformDate($value, $format = 'Y/m/d')
            {
                try {
                    return \Carbon\Carbon::instance(\PhpOffice\PhpSpreadsheet\Shared\Date::excelToDateTimeObject($value));
                } catch (\ErrorException $e) {
                    return \Carbon\Carbon::createFromFormat($format, $value);
                }
            }

            public function collection(Collection $rows)
            {
                $n=0;
                $m=6;
                 // Lấy các dòng từ dòng thứ 6 trở đi
                $datas = $rows->slice(4);
                //dd($datas);
                $uniqueArray = array();
            foreach($datas as $row){
                $uniqueArray[$n] = $row[2];
                if (!in_array($row[2], $uniqueArray)) {
                    $data=[
                        'name' => $row[2],
                        'name_kana' => $row[3],
                        'sex' => $row[4],
                        'birthday' => $this->transformDate($row[5]),
                        'age' => $row[6],
                        'country' => $row[7],
                        'first_interv_date' => $this->transformDate($row[8]),
                        'first_interv_staff' => $row[9],
                        'first_interv_result' => $row[10],
                        'sec_interv_date' => $this->transformDate($row[11]),
                        'sec_interv_staff' => $row[12],
                        'sec_interv_result' => $row[13],
                        'intern_interv_date' => $this->transformDate($row[14]),
                        'intern_department' => $row[15],
                        'intern_result' => $row[16],
                        'hire_date' => $this->transformDate($row[17]),
                        'phone' => $row[18],
                        'email' => $row[19],
                        'skill_jlpt' => $row[20],
                        'skill_hearing' => $row[21],
                        'skill_speaking' => $row[22],
                        'skill_reading' => $row[23],
                        'skill_se' => $row[24],
                        'graduate_4' => $row[25],
                        'graduate_2' => $row[26],
                        'graduate_school' => $row[27],
                        'apply_department' => $row[28],
                        'working_place' => $row[29],
                        'current_status' => $row[30], 
                        'note' => $row[31],
                    ];
                    $validator = Validator::make($data, $this->rules());
                    
                    
                        if($row[2]===null){
                            break;
                        }
                        if ($validator->fails()) {
                            $errors = $validator->errors()->getMessages();
                            foreach ($errors as $column => $messages) {
                                $message = implode(',', $messages);
                                return back()->withErrors($message .'　　　' . $m . '行目');
                            }
                        }
                    }else{
                        Student::create($data);
                    }
                        
                

                    $n++;
                    $m++;
                }

            }
        public function rules(): array
        {
            //skill_masterテーブルのnameカラムのデータ と
            //studentsテーブルのskill_seカラムを比べる

            $allowedValues = DB::table('skill_masters')->pluck('name')->toArray();
            return[
                // 'skill_se' => [
                //     'nullable',
                //     function ($attribute, $value, $fail) use ($allowedValues) {
                //         $valueArray = explode(',', $value); // split string into array
        
                //         if (count(array_intersect($valueArray, $allowedValues)) !== count($valueArray)) {
                //             $fail($attribute.' 違います');
                //         }
                //     },
                // ],
                
                
                'name' => ['unique:students,name','not_regex:/^[\p{Katakana}\s]+$/u'],     //カタカナ以外
                'name_kana' => ['nullable','regex:/^[\p{Katakana}\s]+$/u'],    //カタカナを設定
                'sex' => ['nullable','regex:/^(女|男)$/'],                     //性は「男」また　[女]
                //'phone' => 'numeric|digits:11',                   //電話番号　は　11記号です。

                //結果は　「不合格」　また　「合格」
                'first_interv_result' => ['nullable','regex:/^(合格|不合格)$/'],
                'sec_interv_result' => ['nullable','regex:/^(合格|不合格)$/'],
                'intern_result' => ['nullable','regex:/^(合格|不合格)$/'],

                //日本語のレベルは　N5ーN1
                'skill_jlpt' => ['nullable','regex:/^(N1|N2|N3|N4|N5)$/'],
                'skill_hearing' => ['nullable','regex:/^(N1|N2|N3|N4|N5)$/'],
                'skill_speaking' => ['nullable','regex:/^(N1|N2|N3|N4|N5)$/'],
                'skill_reading' => ['nullable','regex:/^(N1|N2|N3|N4|N5)$/'],

                //チェックした内容は　「〇」また null
                'graduate_2' => ['nullable','regex:/^(〇)$/'],
                'graduate_4' => ['nullable','regex:/^(〇)$/'],
                'apply_department' => ['nullable','regex:/^(営業|SE)$/'],

            ];
            
        }
        public function messages()
        {
            'name.unique' -> $this.'存在しています';
        }
}
