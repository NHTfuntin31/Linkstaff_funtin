<?php

namespace App\Exports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromCollection;

//下のUSEを追加します
use Maatwebsite\Excel\Concerns\WithHeadings;			

class StudentsExport implements FromCollection, WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Student::all();
    }

    public function headings(): array		
    {		
        return ["ID",
                "状態",
                "氏名",
                "氏名（カタカナ)",
                "性別（男/女)",
                "生年月日",
                "年齢",
                "出身国",
                "実施日",
                "1次面接対応",
                "合否",
                "実施日",
                "2次面接対応",
                "合否",
                "入職日",
                "インターン対応部署",
                "合否",
                "電話番号",
                "メールアドレス",
                "日本語(JLPT)スキル",
                "ヒアリングスキル",
                "スピーキングスキル",
                "リーディングスキル",
                "SEスキル",
                "4大",
                "専門",
                "最終学歴",
                "応募職種",
                "希望勤務地",
                "現在の状況",
                "自由項目",
            ];		
    }		
		
}
