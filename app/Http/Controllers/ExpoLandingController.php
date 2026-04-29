<?php

namespace App\Http\Controllers;

use App\Models\ExpoLandingContent;
use Inertia\Inertia;
use Inertia\Response;

final class ExpoLandingController
{
    public function __invoke(): Response
    {
        return Inertia::render('ExpoLanding', [
            'content' => ExpoLandingContent::default(),
        ]);
    }
}
