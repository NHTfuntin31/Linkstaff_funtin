<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nepia extends Model
{
    use HasFactory;
    protected $fillable = [
        'colum1',
        'colum2',
        'colum3',
        'colum4',
    ];
}
