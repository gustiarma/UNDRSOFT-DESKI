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

    }
}
