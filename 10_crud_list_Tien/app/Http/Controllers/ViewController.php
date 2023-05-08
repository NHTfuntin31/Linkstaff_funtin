<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class ViewController extends Controller
{
    public function index() {
        $user = User::all();
        return view('index', compact('user'))->with('i',(request()->input('page', 1) -1) *5);
    }
    public function getView(User $user){
        return view('view', compact('user'));
    }
}
