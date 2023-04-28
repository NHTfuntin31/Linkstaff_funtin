<?php

namespace App\Http\Controllers;

use App\Models\SkillMaster;
use Illuminate\Http\Request;

class SkillMasterController extends Controller
{
    public function index()
    {
        $skill_masters = SkillMaster::all();
        return view('skills-index', compact('skill_masters'))->with('i', (request()->input('page', 1) - 1) * 5);
    }


    public function create()
    {
        //
        return view('skills-create');
    }


    public function store(Request $request)
    {
        //
        $data = $request->all();
        $name = $request->input('name');
        $data['name'] = ucfirst($name);
        $request->validate([
            'name' => 'required|unique:skill_masters,name',
        ],[
            'name.required' => 'スキルを入力してください！',
            'name.unique' => 'このスキルは存在されています！'
        ]);
        SkillMaster::create($data);
        return redirect(route('skill.index'));
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
        $skill = SkillMaster::find($id);
        return view('skills-edit', compact('skill'));
    }


    public function update(Request $request, $id)
    {
        //
        $request->validate([
            'name' => 'required|unique:skill_masters,name',
        ],[
            'name.required' => 'スキルを入力してください！',
            'name.unique' => 'このスキルは存在されています！'
        ]);
        $skill = SkillMaster::find($id);
        $skill['name'] = $request->input('name');
        $skill->update();
        return redirect(route('skill.index'));
    }


    public function destroy($id)
    {
        $skill = SkillMaster::find($id);
        $skill->delete();
        return redirect(route('skill.index'));
    }
}
