<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PHPUnit\Framework\Constraint\Count;
use app\Models\Countries;
use Illuminate\Support\Facades\Validator;

class CountryController extends Controller
{
    public function index()
    {
        $countries = DB::table('countries')->get();
        return response()->json($countries);
    }



public function storeCountry(Request $request)
{
    


//     // Validate input data
//     $validator = Validator::make($request->all(), [
//         'newCountry' => 'required|unique:countries,name|regex:/^[ぁ-んァ-ヶー一-龠　]+$/u',
//     ]);

//     if ($validator->fails()) {
//         return response()->json(['error' => $validator->errors()->first()], 422);
//     }

//     // Insert new country
//     $data = [];
//     $names = $request->input('newCountry');
//     foreach ($names as $name) {
//         $data[] = ['name' => $name];
//     }
//     Countries::insert($data);

    return response()->json(['status' => 200]);
// }

}


}