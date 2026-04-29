<?php

namespace Database\Seeders;

use App\Models\ExpoLandingContent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

final class ExpoLandingSeeder extends Seeder
{
    public function run(): void
    {
        foreach (ExpoLandingContent::default() as $key => $value) {
            DB::table('settings')->updateOrInsert(['key' => 'expo.'.$key], ['value' => $value]);
        }
    }
}
