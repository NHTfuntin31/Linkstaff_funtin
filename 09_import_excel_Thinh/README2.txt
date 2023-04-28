<!--実行する前はライブラリーをインストール-->
composer require maatwebsite/excel
composer require phpoffice/phpspreadsheet


<!-- Windows を使う人 -->
C:/xampp/php/php.ini を開く

";extension=gd"の";"を削除してください。


<!-- exportする時 -->
"Laravel/09_import_excel_Thinh/public/test.xlsx"のファイルを参照して、新しいexcelファイルを作って、情報を購入する。
新しいexcelファイルは"Laravel/09_import_excel_Thinh/public/newExcel.xlsx"です。


<!-- skill SE -->
Skill SEは"skill_masters"テーブルで管理する。

seenderを使って、データを代入する：
"php artisan db:seed --class=SkillMasterSeeder"
