<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//下のUSEを追加します。
use App\Exports\StudentsExport;		
use App\Imports\StudentsImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Student;

use App\Http\Requests\Profile;

class StudentController extends Controller
{
    
    public function index()
    {

    $students = Student::paginate(20);
    return view('index', compact('students'))->with('i',(request()->input('page', 1) -1) *20);
    }

    public function export()			
    {			
        return Excel::download(new StudentsExport, 'students.xlsx');			
    }			
                

    public function import(Profile $request)			
    {
        if (!$request->hasFile('file')) {
            return back()->withErrors(['message' => 'ファイルを選択してください。']);
        }
        
        try{
            Excel::import(new StudentsImport,request()->file('file'));
            return back()->with('success', 'Import successful!');
        
        } catch (\Exception $e) {
            return back()
                ->withInput()
                ->withErrors('インポートできません。'.$e->getMessage());
        }
        		
    }			
}
