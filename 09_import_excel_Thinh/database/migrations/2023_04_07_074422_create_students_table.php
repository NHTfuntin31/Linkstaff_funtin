<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->integer('student_id')->default(0);
            $table->String('name')->unique();
            $table->String('name_kana')->nullable();
            $table->String('sex')->nullable();
            $table->date('birthday')->nullable();
            $table->String('age')->nullable();
            $table->String('country')->nullable();
            $table->date('first_interv_date')->nullable();
            $table->String('first_interv_staff')->nullable();
            $table->String('first_interv_result')->nullable();
            $table->date('sec_interv_date')->nullable();
            $table->String('sec_interv_staff')->nullable();
            $table->String('sec_interv_result')->nullable();
            $table->date('intern_interv_date')->nullable();
            $table->String('intern_department')->nullable();
            $table->String('intern_result')->nullable();
            $table->date('hire_date')->nullable();
            $table->String('phone')->nullable();
            $table->String('email')->nullable();
            $table->String('skill_jlpt')->nullable();
            $table->String('skill_hearing')->nullable();
            $table->String('skill_speaking')->nullable();
            $table->String('skill_reading')->nullable();
            $table->String('skill_se')->nullable();
            $table->String('graduate_4')->nullable();
            $table->String('graduate_2')->nullable();
            $table->String('graduate_school')->nullable();
            $table->String('apply_department')->nullable();
            $table->String('working_place')->nullable();
            $table->String('current_status')->nullable();
            $table->String('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
