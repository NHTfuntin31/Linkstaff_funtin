<?php






public function model(array $row)
{
    $sex_records = array("女", "男");
    $jlpt_levels = array("N1", "N2", "N3", "N4", "N5");
    $valid_date_format = 'Y/m/d';

    $sk_se = array("Php", "Java", "mySQL", "phython");
    $skill_se = explode(",", $row['skill_se']);

    $error_flag = false;
    $error_messages = array();

    if (!empty($skill_se)) {
        if (empty(array_diff($skill_se, $sk_se))) {
            $error_flag = true;
            
            if (!in_array($row['sex'], $sex_records)) {
                $error_messages[] = "Sex is invalid";
            }
            if (!preg_match('/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u', $row['name'])) {
                $error_messages[] = "Name is invalid";
            }
            if (!preg_match('/^[^ア-ン゛゜ァ-ォャ-ョー]+$/u', $row['name_kana'])) {
                $error_messages[] = "Name kana is invalid";
            }
            if (!$this->isValidDate($row['birthday'], $valid_date_format)) {
                $error_messages[] = "Birthday is invalid";
            }
            // kiểm tra các điều kiện khác
            // ...
        }
    } else {
        $error_flag = true;
        $error_messages[] = "Skill SE is empty";
    }

    if ($error_flag) {
        $error_message = implode("; ", $error_messages);
        $line_number = $row['__row'];
        $error_columns = array();
        foreach ($row as $column_name => $column_value) {
            if (!$this->validateColumn($column_name, $column_value)) {
                $error_columns[] = $column_name;
            }
        }
        $error_column_names = implode("; ", $error_columns);

        echo "Error at line {$line_number}, columns: {$error_column_names}. Error message: {$error_message}\n";
    } else {
        // Lưu thông tin hợp lệ vào DB
    }
}
