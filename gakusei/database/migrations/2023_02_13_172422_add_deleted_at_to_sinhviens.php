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
        //go php artisan make:migration add_deleted_at_to_sinhviens de tao cai nay
        
        Schema::table('sinhviens', function (Blueprint $table) {
            //them dong nay vao
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sinhviens', function (Blueprint $table) {
            //them dong nay vao sau do go php artisan migrate
            $table->dropColumn('deleted_at');
        });
    }
};
