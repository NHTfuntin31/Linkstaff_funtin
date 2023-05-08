<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\CountryController;
use Illuminate\Support\Facades\Route;

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


// Route::get('/login', function () {
//     return view('login.login');
// });



Route::resource('/student',StudentController::class); 
Route::resource('/skill', SkillController::class);
Route::get('/restore', [studentController::class, 'restore'])->name('STUDENT.restore'); 

Route::get('/', function () {
        return view('welcome');
    //return redirect(route('student.index'));
});

Route::get('/test', function () {
    return view('login/test');
});

// Route::get('/testphp', function () {
//     return view('login/test');
// });

// Route::post('/search', [StudentController::class,'seasrch'])->name('STUDENT.search');

Route::get('/skills', [StudentController::class, 'getSkills']);

Route::get('/getCountry', [CountryController::class,'index']);
Route::post('/addCountry', [CountryController::class,'storeCountry']);

