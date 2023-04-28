<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//下のUSEを追加します。
use App\Exports\StudentsExport;		
use App\Imports\StudentsImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Student;

use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Border;

//saveではなく、downloadのために使います
use Illuminate\Support\Facades\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class StudentController extends Controller
{
    
    public function index()
    {

    $students = Student::paginate(20);
    return view('index', compact('students'))->with('i',(request()->input('page', 1) -1) *20);
    }

    public function export()				
        {				
            //09_import_Thinh のpublicのtest.xlsx
            $spreadsheet = IOFactory::load(public_path('test.xlsx'));
    
            // アクティブなワークシートを取得する
            $worksheet = $spreadsheet->getActiveSheet();
            
            // 新しいデータの開始行を設定します
            $startRow = 6;
            
            // エクスポート クラスの新しいインスタンスを作成する
            $export = new StudentsExport;
            
            // エクスポート クラスからデータを取得する
            $data = $export->collection()->toArray();

            // データをループしてワークシートに挿入する
            foreach ($data as $row) {
                $colIndex = 2;
                foreach ($row as $value) {
                    $cell = $worksheet->getCellByColumnAndRow($colIndex, $startRow);
                    $cell->setValue($value);

                    // セルのスタイルを取得する
                    $style = $worksheet->getStyleByColumnAndRow($colIndex, $startRow);

                    // セルのすべての辺に境界線のスタイルを設定する
                    $style->getBorders()->getAllBorders()->setBorderStyle(Border::BORDER_THIN);

                    $colIndex++;
                }
                $startRow++;
            }
            
            // 変更した Excel ファイルを保存する
            $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
            //09_import_Thinh のpublicのnewExcelに返す
            $writer->save('newExcel.xlsx');

            $headers = [
                'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'Content-Disposition' => 'attachment; filename="newExcel.xlsx"',
            ];

            $response = new StreamedResponse(function () use ($writer) {
                $writer->save('php://output');
            }, 200, $headers);

            return $response;
        }						
                

    public function import(Request $request)	
    {
        if (!$request->hasFile('file')) {
            return back()->withErrors(['message' => 'ファイルを選択してください。']);
        }
        
        Excel::import(new StudentsImport, request()->file('file'));
        return redirect()->route('students.index');
    }			
}
