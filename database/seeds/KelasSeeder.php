<?php

use App\Model\Kelas;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=1; $i <= 3; $i++) {
            $kelas = new Kelas(['id' => Str::uuid()]);
            $kelas->nama_kelas = 'Kelas ' . $i;
            $kelas->save();

        }


    }

}
