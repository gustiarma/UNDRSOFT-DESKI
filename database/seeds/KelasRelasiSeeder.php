<?php

use App\User;
use App\Model\KelasRelasi;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class KelasRelasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arrayKelas = [1, 2, 3];
        $siswa = User::all();
        foreach ($siswa as $siswa) {
            KelasRelasi::updateOrCreate([
                'id'=>Str::uuid(),
                'id_siswa' => $siswa->id,
                'id_kelas' => $arrayKelas[array_rand($arrayKelas)],
            ]);
        }
    }
}
