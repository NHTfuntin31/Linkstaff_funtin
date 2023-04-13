<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'student_id' => $this->faker->numberBetween(0, 0),
            'name' => $this->faker->name(),
            'name_kana' => $this->faker->name(),
            'sex' => $this->faker->randomElement(['male', 'female']),
            'birthday' => $this->faker->date(),
            'age' => $this->faker->numberBetween(18, 60),
            'country' => $this->faker->country(),
            'first_interv_date' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'first_interv_staff' => $this->faker->name(),
            'first_interv_result' => $this->faker->text(),
            'sec_interv_date' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'sec_interv_staff' => $this->faker->name(),
            'sec_interv_result' => $this->faker->text(),
            'hire_date' => $this->faker->dateTimeBetween('-1 month', 'now'),
            'intern_department' => $this->faker->jobTitle(),
            'intern_result' => $this->faker->text(),
            'phone' => $this->faker->phoneNumber(),
            'email' => $this->faker->email(),
            'skill_jlpt' => $this->faker->randomElement(['N1', 'N2', 'N3', 'N4', 'N5']),
            'skill_hearing' => $this->faker->numberBetween(1, 5),
            'skill_speaking' => $this->faker->numberBetween(1, 5),
            'skill_reading' => $this->faker->numberBetween(1, 5),
            'skill_se' => $this->faker->numberBetween(1, 5),
            'graduate_4' => $this->faker->randomElement(['true', 'false']),
            'graduate_2' => $this->faker->randomElement(['true', 'false']),
            'graduate_school' => $this->faker->text(),
            'apply_department' => $this->faker->jobTitle(),
            'working_place' => $this->faker->text(),
            'current_status' => $this->faker->randomElement(['active', 'inactive']),
            'note' => $this->faker->text(),
        ];
    }
}
