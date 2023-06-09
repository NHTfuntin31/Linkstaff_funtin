<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\SkillMasterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::controller(StudentController::class)->group(function(){				
    Route::get('student', 'index')->name('students.index');			
    Route::get('student-export', 'export')->name('students.export');				
    Route::post('student-import', 'import')->name('students.import');			
    });		

    Route::resource('/skill', SkillMasterController::class);
