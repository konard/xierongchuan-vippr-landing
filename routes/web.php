<?php

use App\Http\Controllers\ExpoLandingController;
use Illuminate\Support\Facades\Route;

Route::get('/expo', ExpoLandingController::class)->name('expo');
Route::redirect('/', '/expo');
