<?php

use App\User;
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
        // create guru dan siswa seeder
        $faker = Faker::create('id_ID');
        for ($i = 0; $i < 10; $i++) {
            $idava = random_int(1, 70);
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $x =  new User;
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker->safeEmailDomain;
            $x->level = 'SISWA';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();

        }
        for ($i = 0; $i < 4; $i++) {
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $x =  new User;
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker->safeEmailDomain;
            $x->level = 'GURU';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();
        }
        for ($i = 0; $i < 2; $i++) {
            $name = $faker->firstName() . ' ' . $faker->lastName();
            $x =  new User;
            $x->name = $name;
            $x->email = str_replace(' ', '', strtolower($name)) . '@' . $faker->safeEmailDomain;
            $x->level = 'ADMIN';
            $x->password = Hash::make('password');
            $x->api_token = Str::random(60);
            $x->save();
        }
    }
}
