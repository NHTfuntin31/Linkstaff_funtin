<?php

namespace App\Exports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\FromCollection;

//下のUSEを追加します
use Maatwebsite\Excel\Concerns\WithHeadings;        //カラム名が必要場合
use Maatwebsite\Excel\Concerns\ShouldAutoSize;      //サイズ調整

use Maatwebsite\Excel\Concerns\WithEvents;          //デザイン設定したい場合
use Maatwebsite\Excel\Events\AfterSheet;            //

use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Style\Border;

use Maatwebsite\Excel\Concerns\WithCustomStartCell;

class StudentsExport implements FromCollection, WithCustomStartCell
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Student::all();
    }
    public function startCell(): string
    {
        return 'B6';
    }
    // public function headings(): array		
    // {		
    //     return ["ID",
    //             "氏名",
    //             "氏名（カタカナ)",
    //             "性別（男/女)",
    //             "生年月日",
    //             "年齢",
    //             "出身国",
    //             "実施日",
    //             "1次面接対応",
    //             "合否",
    //             "実施日",
    //             "2次面接対応",
    //             "合否",
    //             "実施日",
    //             "インターン対応部署",
    //             "合否",
    //             "入職日",
    //             "電話番号",
    //             "メールアドレス",
    //             "日本語(JLPT)スキル",
    //             "ヒアリングスキル",
    //             "スピーキングスキル",
    //             "リーディングスキル",
    //             "SEスキル",
    //             "4大",
    //             "専門",
    //             "最終学歴",
    //             "応募職種",
    //             "希望勤務地",
    //             "現在の状況",
    //             "自由項目",
    //         ];		
    // }

    // public function registerEvents(): array
    // {
    //     return [     , ShouldAutoSize, WithEvents
    //         AfterSheet::class    => function(AfterSheet $event) {
    //             $cellRange = 'B5:AF5'; // All headers
    //             $style = $event->sheet->getStyle($cellRange);
    //             $style->getFont()->setBold(true);
    //             $style->getFill()->setFillType(Fill::FILL_SOLID)->getStartColor()->setARGB('FFC0C0C0');

    //             $borders = $style->getBorders();
    //             $borders->getAllBorders()->setBorderStyle(Border::BORDER_THIN);
    //             $borders->getAllBorders()->setColor(new \PhpOffice\PhpSpreadsheet\Style\Color('000000'));
    //         },
    //     ];
    // }

		
}
