<?php

use Illuminate\Database\Seeder;
use App\Model\Materi;
use App\Model\MataPelajaran;

class MateriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->listMatapelajaran() as $materi) {
            MataPelajaran::create([
                'nama' => $materi[0],
                'icon'=>'https://picsum.photos/200',
                'kode' => $materi[1],
            ]);
        }
    }



    private function listMatapelajaran()
    {
        $array = [
            ["Pendidikan Agama dan Budi Pekerti", "PABP"],
            ["Pendidikan Kewarganegaraan", "PK"],
            ["Bahasa Indonesia", "BI"],
            ["Matematika", "MAT"],
            ["Sejarah Indonesia", "SEJ"],
            ["Bahasa Inggris", "BING"],
            ["Seni Budaya", "SBD"],
            ["Pendidikan Jasmani dan Kesehatan", "PJK"],
            ["Prakarya dan Kewirausahaan", "PK"],
            ["Peminatan Akademik", "PABP"],
            ["Fisika", "FIS"],
            ["Biologi", "BIO"],
            ["Kimia", "KIM"],
            ["Geografi", "GEO"],
            ["Ekonomi", "EKO"],
            ["Sosiologi", "SOS"],
            ["Bahasa dan Sastra Indonesia", "BSI"],
            ["Bahasa dan Sastra Inggris", "BSING"],
            ["Bahasa Daerah ", "BD"],
            ["Bahasa Asing", "BA"],
            ["Antropologi", "ANTR"],

        ];

        return $array;
    }
}
