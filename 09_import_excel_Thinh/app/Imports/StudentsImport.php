<?php

namespace App\Imports;

use Carbon\Carbon;
use App\Models\Student;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithCalculatedFormulas;
//下のuseを追加します
use Maatwebsite\Excel\Concerns\WithHeadingRow;	
use Maatwebsite\Excel\Concerns\WithValidation;								

class StudentsImport implements WithHeadingRow, ToCollection, WithValidation, WithCalculatedFormulas
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
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
        // Lấy các dòng từ dòng thứ 6 trở đi
        $datas = $rows->slice(4);
        //dd($datas);
        foreach($datas as $row){
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
                'interv_date' => $this->transformDate($row[14]),
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
            Student::create($data);
        }
        
            

    }

    public function rules(): array
        {
            return[
                'name' => ['regex:/^[\p{Katakana}\s]+$/u'], 
                'name_kana' => ['regex:/^[\p{Katakana}\s]+$/u'], 
                'sex' => ['regex:/^(女|男)$/'],                  
                'age' => 'integer|min:1',                                     

                'first_interv_result' => ['regex:/^(合格|不合格)$/'],
                'sec_interv_result' => ['regex:/^(合格|不合格)$/'],
                'intern_result' => ['regex:/^(合格|不合格)$/'],

                'skill_jlpt' => ['regex:/^(N1|N2|N3|N4|N5)$/'],
                'skill_hearing' => ['regex:/^(N1|N2|N3|N4|N5)$/'],
                'skill_speaking' => ['regex:/^(N1|N2|N3|N4|N5)$/'],
                'skill_reading' => ['regex:/^(N1|N2|N3|N4|N5)$/'],

                'graduate_2' => ['nullable','regex:/^(〇|null)$/'],
                'graduate_4' => ['nullable','regex:/^(〇|null)$/'],
                'apply_department' => ['regex:/^(営業|SEのみ)$/'],
            ];
        }

}
