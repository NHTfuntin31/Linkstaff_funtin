<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SkillMaster;

class SkillMasterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $skillNames = ['Java', 'C', 'C++', 'FORTRAN', 'COBOL', 'JavaScript', 'Ruby', 'PHP', 'Python', 'GO', 'Swift', 'Kotlin'];
        
        foreach ($skillNames as $skillName) {
            SkillMaster::create(['name' => $skillName]);
        }
}
}
