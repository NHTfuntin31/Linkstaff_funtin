<?php

namespace App\Imports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\ToModel;

//下のuseを追加します
use Maatwebsite\Excel\Concerns\WithHeadingRow;				
use Hash;							

class StudentsImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Student([
            
            // 'student_id' => $row['#'],
            'name' => $row['name'],
            'name_kana' => $row['name_kana'],
            'sex' => $row['sex'],
            'birthday' => $row['birthday'],
            'age' => $row['age'],
            'country' => $row['country'],
            'first_interv_date' => $row['first_interv_date'],
            'first_interv_staff' => $row['first_interv_staff'],
            'first_interv_result' => $row['first_interv_result'],
            'sec_interv_date' => $row['sec_interv_date'],
            'sec_interv_staff' => $row['sec_interv_staff'],
            'sec_interv_result' => $row['sec_interv_result'],
            'hire_date' => $row['hire_date'],
            'intern_department' => $row['intern_department'],
            'intern_result' => $row['intern_result'],
            'phone' => $row['phone'],
            'email' => $row['email'],
            'skill_jlpt' => $row['skill_jlpt'],
            'skill_hearing' => $row['skill_hearing'],
            'skill_speaking' => $row['skill_speaking'],
            'skill_reading' => $row['skill_reading'],
            'skill_se' => $row['skill_se'],
            'graduate_4' => $row['graduate_4'],
            'graduate_2' => $row['graduate_2'],
            'graduate_school' => $row['graduate_school'],
            'apply_department' => $row['apply_department'],
            'working_place' => $row['working_place'],
            'current_status' => $row['current_status'], 
            'note' => $row['note'],
        ]);
    }
}
