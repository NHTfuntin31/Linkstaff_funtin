<?php

namespace App\Imports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\ToModel;
use Carbon\Carbon;

//下のuseを追加します
use Maatwebsite\Excel\Concerns\WithHeadingRow;				
use Hash;							

class TestsImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        $sex_records = array("女", "男");
        $jlpt_levels = array("N1", "N2", "N3", "N4", "N5");
        $valid_date_format = 'Y/m/d';
        
        $sk_se = array("Php", "Java" ,"mySQL","phython");
        $skill_se = explode(",", $row['skill_se']);

 

        $error_messages = array();

            if (!empty($skill_se)) {
                if (!empty(array_diff($skill_se, $sk_se))) {
                    $error_messages[] = "Skill SE is empty";
                }
            }
            if (!in_array($row['sex'], $sex_records)){
                $error_messages[] = "Sex is invalid";
            }

            if(preg_match('/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u', $row['name']) ){
                $error_messages[] = "Sex is invalid";
            }

            if(!preg_match('/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u', $row['name_kana'])){
                $error_messages[] = "Sex is invalid";
            }

            // if(!$this->isValidDate($row['birthday'], $valid_date_format)){
            //     $error_messages[] = "Sex is invalid";
            // }

            // if(!$this->isValidDate($row['first_interv_date'], $valid_date_format)){
            //     $error_messages[] = "Sex is invalid";
            // }

            // if(!$this->isValidDate($row['sec_interv_date'], $valid_date_format)){
            //     $error_messages[] = "Sex is invalid";
            // }

            // if(!$this->isValidDate($row['hire_date'], $valid_date_format)){
            //     $error_messages[] = "Sex is invalid";
            // }

            if(($row['graduate_4'] === null || $row['graduate_4'] === '〇')){
                $error_messages[] = "Sex is invalid";
            }

            if(!$row['graduate_2'] === null || !$row['graduate_2'] === '〇'){
                $error_messages[] = "Sex is invalid";
            }

            if(!in_array($row['skill_jlpt'], $jlpt_levels)){
                $error_messages[] = "Sex is invalid";
            }

            if(!in_array($row['skill_hearing'], $jlpt_levels)){
                $error_messages[] = "Sex is invalid";
            }

            if(!in_array($row['skill_speaking'], $jlpt_levels)){
                $error_messages[] = "Sex is invalid";
            }

            if(!in_array($row['skill_reading'], $jlpt_levels)){
                $error_messages[] = "Sex is invalid";
            }

            if(!preg_match('/^[ぁ-んァ-ヶー一-龠]+$/u', $row['country'])){
                $error_messages[] = "Sex is invalid";
            }

            if(!in_array($row['apply_department'], ['営業', 'SEのみ'])){
                $error_messages[] = "Sex is invalid";
            }

            if(!preg_match('/^[0-9-]{9,12}$/u', $row['phone'])){
                $error_messages[] = "Sex is invalid";
            }

            if(!is_numeric($row['age']) && $row['age'] >= 18 && $row['age'] <= 60){
                $error_messages[] = "Sex is invalid";
            }
           
            $error_message = implode("; ", $error_messages);
            //line
            // if (array_key_exists('__row', $row)) {
            //     $line_number = $row['__row'];
            // }
            $error_columns = array();
            // foreach ($row as $column_name => $column_value) {
            //     if (!$this->validateColumn($column_name, $column_value)) {
            //         $error_columns[] = $column_name;
            //     }
            // }
            //colum
            $error_column_names = implode("; ", $error_columns);

            $data = compact('error_message', 'line_number', 'error_column_names');
            return view('index', $data);
            // echo "Error at line {$line_number}, columns: {$error_column_names}. Error message: {$error_message}\n";
        
        if (!empty($skill_se)) {
            if (empty(array_diff($skill_se, $sk_se))) {
                if (in_array($row['sex'], $sex_records) &&
                    !preg_match('/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u', $row['name']) &&
                    preg_match('/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u', $row['name_kana']) &&
                    // $this->isValidDate($row['birthday'], $valid_date_format) &&
                    // $this->isValidDate($row['first_interv_date'], $valid_date_format) &&
                    // $this->isValidDate($row['sec_interv_date'], $valid_date_format) &&
                    // $this->isValidDate($row['hire_date'], $valid_date_format) &&
                    ($row['graduate_4'] === null || $row['graduate_4'] === '〇') && ($row['graduate_2'] === null || $row['graduate_2'] === '〇') &&
                    in_array($row['skill_jlpt'], $jlpt_levels) &&
                    in_array($row['skill_hearing'], $jlpt_levels) &&
                    in_array($row['skill_speaking'], $jlpt_levels) &&
                    in_array($row['skill_reading'], $jlpt_levels) &&
                    preg_match('/^[ぁ-んァ-ヶー一-龠]+$/u', $row['country']) &&
                    in_array($row['apply_department'], ['営業', 'SEのみ']) &&
                    preg_match('/^[0-9-]{9,12}$/u', $row['phone']) &&
                    is_numeric($row['age']) && $row['age'] >= 18 && $row['age'] <= 60){


                        
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
        }

    }
}