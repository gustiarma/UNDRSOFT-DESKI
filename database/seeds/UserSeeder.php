<?php

use App\User;
use App\Model\InfoSiswa;
use App\Model\OrangTua;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $total = 30;
        // create guru dan siswa seeder
        $faker = Faker::create('id_ID');
        echo "Create Siswa\n";
        for ($i = 0; $i < $total; $i++) {
            $idava = random_int(1, 70);
            $name = $faker->firstName() . ' ' . $faker->lastName();

            $x =  new User(['id' => Str::uuid()]);
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker->safeEmailDomain;
            $x->level = 'SISWA';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();
        }
        echo "Create Orang Tua\n";
        for ($i = 0; $i < $total; $i++) {
            $idava = random_int(1, 70);
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $x =  new User(['id' => Str::uuid()]);
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker  ->safeEmailDomain;
            $x->level = 'ORANGTUA';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();
        }

        echo "Create Info Siswa\n";
        $ortulist = User::where('level', 'ORANGTUA')->get();
        foreach ($ortulist as $ortu) {

            $ortu =   new OrangTua(['id' => Str::uuid()]);
            $ortu->nomor_hp =  $faker->phoneNumber;
            $ortu->nomor_wa = $faker->phoneNumber;
            $ortu->alamat = $faker->streetAddress;
            $ortu->save();

        }


        $religion = array(
            'Islam', 'Kristen', 'Hindu', 'Budha', 'Konghucu'
        );


        $x = 0;

        echo "Create: id_siswa, nomor_hp,alamat,agama_foto,id_oragtua\n";
        foreach (User::where('level', 'SISWA')->get() as $user) {

            $userInfo = new InfoSiswa(['id' => Str::uuid()]);

            $userInfo->id_siswa = $user->id;
            $userInfo->nomor_hp = $faker->phoneNumber;
            $userInfo->alamat = $faker->streetAddress;
            $userInfo->agama = $religion[array_rand($religion)];
            $userInfo->foto = 'https://i.pravatar.cc/150?img=' . $user->id;
            $userInfo->id_orangtua = (int) $ortulist[$x]->id;

            $userInfo->save();
            $x++;
        }

        for ($i = 0; $i < 4; $i++) {
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $x =  new User(['id' => Str::uuid()]);
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker->safeEmailDomain;
            $x->level = 'GURU';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();
        }
        for ($i = 0; $i < 2; $i++) {
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $x =  new User(['id' => Str::uuid()]);
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker->safeEmailDomain;
            $x->level = 'ADMIN';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();
        }
    }
}
