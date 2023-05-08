<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('student', function (Blueprint $table) {
            Schema::create('students', function (Blueprint $table) {
                $table->id();
                $table->string('name', 500)->nullable();
                $table->string('name_kana', 500)->nullable();
                $table->boolean('sex')->default(0)->nullable();
                $table->date('birthday')->nullable();
                // $table->integer('age')->nullable()->default(0);
                $table->integer('age')->nullable();
                $table->string('country', 500)->nullable();
                $table->date('first_interv_date')->nullable();
                $table->string('first_interv_staff', 500)->nullable();
                $table->boolean('first_interv_result')->nullable();
                $table->date('sec_interv_date')->nullable();
                $table->string('sec_interv_staff', 500)->nullable();
                $table->boolean('sec_interv_result')->nullable();
                $table->boolean('intern_interv_date')->nullable();
                $table->date('hire_date')->nullable();
                $table->string('intern_department', 500)->nullable();
                $table->boolean('intern_result')->nullable();
                $table->string('phone')->nullable()->unique();
                $table->string('phoneSearch')->nullable();
                $table->string('email', 500)->nullable()->unique();
                $table->unsignedInteger('skill_jlpt')->nullable()->length(5);
                $table->unsignedInteger('skill_hearing')->nullable()->length(5);
                $table->unsignedInteger('skill_speaking')->nullable()->length(5);
                $table->unsignedInteger('skill_reading')->nullable()->length(5);
                $table->string('skill_se', 500)->nullable();
                $table->boolean('graduate_4')->nullable();
                $table->boolean('graduate_2')->nullable();
                $table->string('graduate_school', 500)->nullable();
                $table->string('apply_department', 500)->default('勤務地マスタ')->nullable();
                $table->string('working_place', 500)->nullable();
                $table->string('current_status', 500)->nullable();
                $table->string('note', 500)->nullable();
                $table->timestamp('deleted_at')->nullable()->nullable();
                $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('students');
    }
};
