<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInfoSiswasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('info_siswa', function (Blueprint $table) {
            $table->id();
            $table->integer('id_siswa');
            $table->string('nomor_induk')->nullable();
            $table->string('nomor_hp')->nullable();
            $table->string('agama')->nullable();
            $table->string('alamat')->nullable();
            $table->integer('id_orangtua')->nullable();
            $table->string('foto')->nullable();
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
        Schema::dropIfExists('info_siswa');
    }
}
