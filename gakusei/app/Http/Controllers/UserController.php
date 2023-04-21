<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use App\Http\Requests\Profile;
use App\Http\Requests\Profile_update;

class UserController extends Controller
{
    public function index()
    {

    $user = User::paginate(5);
    return view('index', compact('user'))->with('i',(request()->input('page', 1) -1) *5);
    }

    public function create()
    {
        return view('create');
    }

    public function store(Profile $request)
    {
        User::create($request->all());
        return redirect()->route('user.index')->with('thongbao','追加しました!');
    }

    public function edit(User $user)
    {
        return view('edit',compact('user'));
    }

    public function update(Profile_update $request,User $user)
    {
        $user->update($request->all());
        return redirect()->route('user.index')->with('thongbao','アップデートしました!');

    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->route('user.index')->with('thongbao','削除しました!');
    }
}
