<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Materi;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

$factory->define(Materi::class, function (Faker $faker) {
    return [
        'id' => Str::uuid(),
        'name' => 'Materi ' . $faker->text(50),
        'kode' => $faker->randomElement([
            'PABP',
            'PK',
            'BI',
            'MAT',
            'SEJ',
            'BING',
            'SBD',
            'PJK',
            'PK',
            'FIS',
            'PA',
            'BIO',
            'KIM',
            'GEO',
            'EKO',
            'SOS',
            'BSI',
            'BSING',
            'BD',
            'BA',
            'ANTR'
        ]),
        'link' => $faker->randomElement([
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            'https://sic.coordinador.cl/wp-content/uploads/2013/09/Lorem-Ipsum.pdf',
            'https://www.soundczech.cz/temp/lorem-ipsum.pdf',
            'http://www.bavtailor.com/wp-content/uploads/2018/10/Lorem-Ipsum.pdf',
            'https://www.pfizer.co.id/sites/g/files/g10059376/f/pdf/PDF%20-%20Lorem%20ipsum%20dolor_0.pdf',
            'http://www.buds.com.ua/images/Lorem_ipsum.pdf',
            'https://peda.net/kangasala/pikkolan-koulu/atk/janne-v/atk8/osat/lt/pdf-tiedosto:file/download/cfdda9498f9e910fdcb763ec989d116e8753dc7c/loremipsum.pdf'
        ])
    ];
});
