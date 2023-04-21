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


=========================================================================================================
=============================================validation==================================================
=========================================================================================================

<!-- フンさんと同じ skill_master テーブルを作成 -->

php artisan make:model SkillMaster -m -v -c

(model SkillMaster、migration skill_masters , controller SkillMasterController)



<!-- skill master viewを作成 -->

layout.blade.php				//layout
skills-index.blade.php			//index画面
skills-edit.blade.php			//修正画面



<!-- StudentsImport.phpの中で -->
   (app/Imports/studentsImport.php)
   
 public function model(array $row) の代わりに public function collection(Collection $rows)を使い
 
 
 //インポートする前に値をチェックするために
 public function rules(): array を追加


<!-- 詳細 -->

//SE skillを管理するテーブル。
http://127.0.0.1:8000/skill

//↑↑SkillMasterを参照し、skillsを登録してインポート時にチェックする
http://127.0.0.1:8000/student



<!-- まだできていないこと -->

チェックした後で、エラーの内容は日本語になっていないです。


<!--  -->
































