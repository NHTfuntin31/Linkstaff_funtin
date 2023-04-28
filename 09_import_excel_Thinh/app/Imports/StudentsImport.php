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
                $errors_array = [];
                $m=6;
                 // 6行目からインポートする
                $datas = $rows->slice(4);
            foreach($datas as $row){
                if (is_int($row[5])){
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
                }else{
                    //エクスポートファイルまたインポートするため
                    $data=[
                        'name' => $row[2],
                        'name_kana' => $row[3],
                        'sex' => $row[4],
                        'birthday' =>$row[5],
                        'age' => $row[6],
                        'country' => $row[7],
                        'first_interv_date' => $row[8],
                        'first_interv_staff' => $row[9],
                        'first_interv_result' => $row[10],
                        'sec_interv_date' => $row[11],
                        'sec_interv_staff' => $row[12],
                        'sec_interv_result' => $row[13],
                        'intern_interv_date' => $row[14],
                        'intern_department' => $row[15],
                        'intern_result' => $row[16],
                        'hire_date' => $row[17],
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
                }

                    //名前は空だったら飛ばします
                    if($row[2]===null){
                        $m++;
                        continue;
                    }

                    $validator = Validator::make($data, $this->rules());

                    //同じ電話番号だったら、飛ばします
                    $coincident = Validator::make($data, [
                        'phone' => 'unique:students,phone'
                    ]);
                    if ($coincident->fails()) {
                        $m++;
                        continue;
                    }

                    //skill_seはskill_mastersの子供じゃないとき、違う値を表示
                    $allowedValues = DB::table('skill_masters')->pluck('name')->toArray();
                    $skill_se_error = explode(',', $row[24]);
                    $diff = array_diff($skill_se_error, $allowedValues);
                    $driff_string = implode(",", $diff);

                    if ($validator->fails()) {
                        $errors = $validator->errors()->getMessages();
                        foreach ($errors as $column => $messages) {
                            if($column === 'name'){
                               $errors_array[] ='氏名の'. $m . '行目を違っています'; 
                            }
                            if($column === 'name_kana'){
                                $errors_array[] ='氏名カタカナの'. $m . '行目を違っています';
                             }
                             if($column === 'sex'){
                                $errors_array[] ='性の'. $m . '行目を違っています'; 
                             }
                             if($column === 'age'){
                                $errors_array[] ='年齢の'. $m . '行目を違っています'; 
                             }
                             if($column === 'country'){
                                $errors_array[] ='国の'. $m . '行目を違っています'; 
                             }
                             if($column === 'first_interv_date'){
                                $errors_array[] ='ー次面接日にちの'. $m . '行目を違っています'; 
                             }
                             if($column === 'first_interv_staff'){
                                $errors_array[] ='ー次面接担当者の'. $m . '行目を違っています'; 
                             }
                             if($column === 'first_interv_result'){
                                $errors_array[] ='ー次面接結果の'. $m . '行目を違っています'; 
                             }
                             if($column === 'sec_interv_date'){
                                $errors_array[] ='二次面接日にちの'. $m . '行目を違っています'; 
                             }
                             if($column === 'sec_interv_staff'){
                                $errors_array[] ='二次面接担当者の'. $m . '行目を違っています'; 
                             }
                             if($column === 'sec_interv_result'){
                                $errors_array[] ='二次面接結果の'. $m . '行目を違っています'; 
                             }
                             if($column === 'intern_interv_date'){
                                $errors_array[] ='インタン次面接日にちの'. $m . '行目を違っています'; 
                             }
                             if($column === 'intern_department'){
                                $errors_array[] ='インタン次面接担当者の'. $m . '行目を違っています'; 
                             }
                             if($column === 'intern_result'){
                                $errors_array[] ='インタン次面接結果の'. $m . '行目を違っています'; 
                             }
                             if($column === 'hire_date'){
                                $errors_array[] ='入社日の'. $m . '行目を違っています'; 
                             }
                             if($column === 'email'){
                                $errors_array[] ='メールの'. $m . '行目を違っています'; 
                             }
                             if($column === 'skill_jlpt'){
                                $errors_array[] ='日本語JLPTの'. $m . '行目を違っています'; 
                             }
                             if($column === 'skill_se'){
                                $errors_array[] ='SEスキルの'. $m . '行目を違っています。'.$driff_string.'ではありません'; 
                             }
                            }
                            
                                return back()->withErrors(new \Illuminate\Support\MessageBag([$errors_array]));
                        
                        }
                        
                        Student::create($data);
                        $m++;
                    }
                    
            }

            
        public function rules(): array
        {
            //skill_masterテーブルのnameカラムのデータ と
            //studentsテーブルのskill_seカラムを比べる
            $allowedValues = DB::table('skill_masters')->pluck('name')->toArray();
            return[
                'name_kana' => ['nullable','regex:/^[\p{Katakana}\s]+$/u'],
                'sex' => ['nullable','regex:/^(女|男)$/'],
                // 'phone' => ['regex:^\+?\d+(?:\(\d+\)|-\d+)*(?:\s*\d+(?:\(\d+\)|-\d+)*)*$'],

                //結果は　「不合格」　また　「合格」
                'first_interv_result' => ['nullable','regex:/^(合格|不合格)$/'],
                'sec_interv_result' => ['nullable','regex:/^(合格|不合格)$/'],
                'intern_result' => ['nullable','regex:/^(合格|不合格)$/'],

                'skill_se' => [
                    'nullable',
                    function ($attribute, $value, $fail) use ($allowedValues) {
                        $valueArray = explode(',', $value); // split string into array
                        if (count(array_intersect($valueArray, $allowedValues)) !== count($valueArray)) {
                            $fail($attribute.' 違います');
                        }
                    },
                ],
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
}
