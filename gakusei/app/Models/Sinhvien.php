<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Sinhvien extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable = [
        'MaSo',
        'HoTen',
        'NgaySinh',
        'DiaChi',
        'SoDT',
        'email',
        

    ];

    
}


