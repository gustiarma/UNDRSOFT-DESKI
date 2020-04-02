<?php

use App\Model\Kelas;
use Illuminate\Database\Seeder;

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
            $kelas = new Kelas;
            $kelas->nama_kelas = 'Kelas ' . $i;
            $kelas->save();

        }


    }

}
