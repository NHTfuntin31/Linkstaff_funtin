<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Skill;

class SkillTable extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $skills = [[
            'name' => 'PHP',],[
            'name' => 'HTML',],[
            'name' => 'Java',],[
            'name' => 'JavaScript',],[
            'name' => 'C',],[
            'name' => 'C++',],[
            'name' => 'Ruby',],[
            'name' => 'Python',],[
            'name' => 'TypeScript',],[
            'name' => 'CSS',],[
            'name' => 'Swift',],[
            'name' => 'Go',]
        ];
            Skill::insert($skills);
    }
}
