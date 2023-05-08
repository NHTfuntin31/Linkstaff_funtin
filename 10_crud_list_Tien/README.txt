<!-- プロジェクトを作成 -->

composer create-project laravel/laravel example
ーmigration students を作成
ーmodel Stutent を作成
--StudentController を作成


<!-- Controllerを作成  -->

php artisan make:controller StudentController


<!-- viewを作成  -->

index.blade.php
create.blad.php
edit.blade.php
view.blade.php

<!--run--!>
php artisan serve --port=8002  

php artisan optimize

php artisan migrate:fresh  

php artisan db:seed    
php artisan db:seed --class=StudentTable
php artisan db:seed --class=SkillStable

php artisan route:cache

php artisan db:seed
php artisan db:seed --class=StudentTable
php artisan db:seed --class=SkillTable 

php artisan config:cache

<!----!>

 


実行手順
.envをコピー
composer install
php artisan migrate:fresh
php artisan migrate:refresh

php artisan db:seed    
php artisan db:seed --class=StudentTable
php artisan db:seed --class=SkillTable
php artisan config:cache
php artisan serve

localhost:8000/student

