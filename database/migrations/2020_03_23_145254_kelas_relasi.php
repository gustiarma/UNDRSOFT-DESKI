<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class KelasRelasi extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kelas_relasi', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('id_siswa');
            $table->uuid('id_kelas');

            // $table->integer('id_siswa');
            // $table->integer('id_kelas');
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
        Schema::dropIfExists('kelas_relasi');
    }
}
