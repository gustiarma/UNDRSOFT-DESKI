<?php


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call([
            UserSeeder::class,
            KelasSeeder::class,
            KelasRelasiSeeder::class,
           PelajaranSeeder::class,
            MateriSeeder::class,
        ]);
    }
}
