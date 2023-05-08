<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Skill;
use App\Http\Requests\StudentRequest;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $skills = Skill::all();
        $type = $request->input('type');
        $value = $request->input('value');
        // $request->session()->put('insertvalue', $request->input('value'));

        $request->session()->put('inserttype', $request->input('type'));
        if ($type) {
            if ($type == 'phone') {
                $request->session()->put('insertvalue', $request->input('value'));

                $student = DB::table('students')
                ->where(function ($query) use ($value) {
                    $query->where('phone', 'like', '%' . str_replace('-', '%', $value) . '%')
                          ->orWhereRaw("REPLACE(phone, '-', '') like '%" . str_replace('-', '', $value) . "%'");
                })
                ->get();

            //    $student = DB::table('students')
            //     ->where(function ($query) use ($value) {
            //         if(strpos($value, '-') !== false) {
            //             // Nếu có dấu "-" trong chuỗi, thực hiện tìm kiếm theo đúng vị trí dấu "-"
            //             $query->where('phone', 'like', '%' . $value . '%');
            //         } else {
            //             // Nếu không có dấu "-", thực hiện tìm kiếm theo chuỗi chữ số
            //             $query->where('phone', 'like', '%' . $value . '%')
            //                   ->orWhereRaw("REPLACE(phone, '-', '') like '%" . $value . "%'");
            //         }
            //     })
            //     ->get();


                if ($student->count() < 0) {
                    return back()->withInput()->with('type', $type)->with('thongbao2', '検索値が見つかりません.');
                } else {
                    return view('index.index', compact('student', 'type', 'skills'))->with('i', (request()->input('page', 1) - 1) * 5);
                }
            } elseif ($type == 'name') {
                $request->session()->put('insertvalue', $request->input('value'));
                $student = DB::table('students')->where('name', 'like', '%' . $value . '%')->orWhere('name_kana', 'like', '%' . $value . '%')->paginate(5);
                if ($student->isEmpty()) {
                    return back()->withInput()->with('type', $type)->with('thongbao2', '検索値が見つかりません.');
                } else {
                    return view('index.index', compact('student', 'type', 'skills'))->with('i', (request()->input('page', 1) - 1) * 5);
                }
            } else if ($type == 'skill_se') {
                $student = DB::table('students')
                    ->where(function ($query) use ($value) {
                        foreach ($value as $val) {
                            $query->orWhere('skill_se', 'LIKE', '%' . $val . '%');
                        }
                    })->whereNull('deleted_at')->paginate(5);
                if ($student->isEmpty()) {
                    return back()->withInput()->with('thongbao2', '検索値が見つかりません.');
                } else {
                    return view('index.index', compact('student', 'type', 'skills'))->with('i', (request()->input('page', 1) - 1) * 5);
                }
            } else {
                $request->session()->put('insertvalue', $request->input('value'));
                $student = DB::table('students')->where($type, 'like', '%' . $value . '%')->whereNull('deleted_at')->paginate(5);
                if ($student->isEmpty()) {
                    return back()->withInput()->with('type', $type)->with('thongbao2', '検索値が見つかりません.');
                } else {
                    return view('index.index', compact('student', 'type', 'skills'))->with('i', (request()->input('page', 1) - 1) * 5);
                }
            }
        } else {
            $request->session()->put('insertvalue', $request->input('value'));
            $student = Student::paginate(5);
            $student->withPath(route('student.index') . '?page=' . session()->get('student_page', 1));
            return view('index.index', compact('student', 'type', ['skills']))->with('i', (session()->get('student_page', 1) - 1) * 5);
        }
    }

    public function create()
    {
        $skills = Skill::all();
        return view('index.create', compact(['skills']));
    }

    public function store(StudentRequest $studentRequest)
    {
        $data = $studentRequest->all();

        // $dateOfBirth = $studentRequest->input('birthday');
        // $today = date("Y-m-d");
        // $diff = date_diff(date_create($dateOfBirth), date_create($today));
        // $age = $diff->format('%y');
        // $data['age'] = $age;
        
        if (is_null($studentRequest['skill_se'])) {
            $phoneSearch = $studentRequest->input('phone');
            $phoneSearch2 = str_replace('-', '', $phoneSearch);
            $data['phoneSearch'] = $phoneSearch2;

            $apply_department = $studentRequest->input('apply_department');
            if (empty($apply_department)) {
                $apply_department = '勤務地マスタ';
            }
            $age = $studentRequest->input('age');
            if (empty($age)) {
                $age = 0;
            }
            $data['age'] = $age;
            $data['apply_department'] = $apply_department;

            Student::create($data);

            return redirect()->route('student.index')->with('thongbao', '追加しました!');
        } else {

            $phoneSearch = $studentRequest->input('phone');
            $phoneSearch2 = str_replace('-', '', $phoneSearch);
            $data['phoneSearch'] = $phoneSearch2;

            $skill_se = $studentRequest->input('skill_se');
            $skill_seStr = implode(',', $skill_se);
            $data['skill_se'] = $skill_seStr;
            $graduate_4 = $studentRequest->has('graduate_4') ? 1 : 0;
            $graduate_2 = $studentRequest->has('graduate_2') ? 1 : 0;
            $data['graduate_4'] = $graduate_4;
            $data['graduate_2'] = $graduate_2;

            Student::create($data);
            return redirect()->route('student.index')->with('thongbao', '追加しました!');
        };
    }

    public function show($id)
    {
        $student = Student::find($id);
        return view('index.view', compact('student'));
    }
    public function edit(Request $request, String $id)
    {
        $student = Student::find($id);
        $skills = Skill::all();

        $string = $student->skill_se;
        $arraySkill = explode(',', $string);
        $student['skill_se'] = $arraySkill;
        return view('index.edit', compact('student', 'skills', 'arraySkill'));
    }

    public function update(Request $request, $id)
    {
        $data = $request->all();


        if (is_null($request['skill_se'])) {
            $phoneSearch = $request->input('phone');
            $phoneSearch2 = str_replace('-', '', $phoneSearch);
            $data['phoneSearch'] = $phoneSearch2;

            $student = Student::find($id);
            $student->update($data);

            return redirect()->route('student.index')->with('thongbao', 'アップデートしました!');
        } else {
            $phoneSearch = $request->input('phone');
            $phoneSearch2 = str_replace('-', '', $phoneSearch);
            $data['phoneSearch'] = $phoneSearch2;

            $student = Student::find($id);

            $skill_se = $request->input('skill_se');
            $skill_seStr = implode(',', $skill_se);
            $graduate_4 = $request->has('graduate_4') ? 1 : 0;
            $graduate_2 = $request->has('graduate_2') ? 1 : 0;
            $data['skill_se'] = $skill_seStr;
            $data['graduate_4'] = $graduate_4;
            $data['graduate_2'] = $graduate_2;
            $student->update($data);
            return redirect()->route('student.index')->with('thongbao', 'アップデートしました!');
        };
        // dd($request['skill_se']);
    }

    public function destroy($id)
    {
        // Lưu trang hiện tại vào session
        session()->put('student_page', request()->input('page', 1));

        $student = Student::find($id);
        $student->delete();

        return back()->with('thongbao', '削除しました!');
        // return redirect(route('student.index'))->with('thongbao', '削除しました!');
    }

    public function restore()
    {
        $student = Student::withTrashed();
        $student->restore();
        return redirect()->route('student.index')->with('thongbao', '成功した回復!');
    }

    // public function search(Request $request)
    // {

    //     $type = $request->input('type');
    //     $value = $request->input('value');
    // }

    public function getSkills()
    {
        $skills = Skill::all();

        return response()->json($skills);
    }
}
