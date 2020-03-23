<?php

namespace App\Observers;

use App\User;
use App\Model\InfoSiswa;
use Faker\Factory as Faker;

class UserObserver
{
    /**
     * Handle the user "created" event.
     *
     * @param  \App\User  $user
     * @return void
     */
    public function created(User $user)
    {

        $faker = Faker::create('id_id');
        if ($user->level == 'SISWA') {
            $userInfo = new InfoSiswa;
            $userInfo->id_siswa = $user->id;
            $userInfo->nomor_hp = $faker->phoneNumber;
            $userInfo->alamat = $faker->streetAddress;
            $userInfo->foto = 'https://i.pravatar.cc/150?img=' . $user->id;
            $userInfo->save();
        }
    }
}
