<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMataPelajaransTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pelajaran', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nama');
            $table->uuid('kode')->nullable();
            $table->string('icon')->nullable();
            $table->string('deskripsi')->nullable();
            $table->uuid('kode_materi')->nullable();
            // $table->string('kode_materi')->nullable();
            $table->uuid('kode_pengajar')->nullable();
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
        Schema::dropIfExists('pelajaran');
    }
}
