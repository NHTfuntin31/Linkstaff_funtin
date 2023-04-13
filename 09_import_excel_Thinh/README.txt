<!-- プロジェクトを作成 -->

composer create-project laravel/laravel example
ーmigration students を作成
ーmodel Stutent を作成 



<!-- Installing maatwebsite/excel Package  -->

composer require maatwebsite/excel
php artisan migrate



<!-- Import クラスを作成 -->

php artisan make:import StudentsImport --model=Student
(app/Imports/studentsImport.php)




<!-- Export クラスを作成  -->

php artisan make:export StudentsExport --model=Student
(app/Exports/studentsExport.php)



<!-- Controllerを作成  -->

php artisan make:controller StudentController


<!-- viewを作成  -->

index.blade.php


