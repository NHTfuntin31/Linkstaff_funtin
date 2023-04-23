<?php

use Illuminate\Support\Facades\Route;

//them cai nay vao
use App\Http\Controllers\SinhvienController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//them cai nay vao
Route::resource('/sinhvien', SinhvienController::class);

Route::resource('/user', UserController::class);