<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Profile;
use App\Http\Requests\Profile_update;

//them cai nay vao
use App\Models\Sinhvien;

class SinhvienController extends Controller
{
    public function index()
    {

    $sinhvien = Sinhvien::paginate(5);
    return view('index', compact('sinhvien'))->with('i',(request()->input('page', 1) -1) *5);
    }

    public function create()
    {
        return view('create');
    }

    public function store(Profile $request)
    {
        Sinhvien::create($request->all());
        return redirect()->route('sinhvien.index')->with('thongbao','them sinh vien thanh cong!');
    }

    public function edit(Sinhvien $sinhvien)
    {
        return view('edit',compact('sinhvien'));
    }

    public function update(Profile_update $request,Sinhvien $sinhvien)
    {
        $sinhvien->update($request->all());
        return redirect()->route('sinhvien.index')->with('thongbao','cap nhat sinh vien thanh cong!');

    }

    public function destroy(Sinhvien $sinhvien)
    {
        $sinhvien->delete();
        return redirect()->route('sinhvien.index')->with('thongbao','xoa sinh vien thanh cong!');
    }
}
