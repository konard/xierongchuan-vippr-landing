<?php

namespace App\Models;

final class ExpoLandingContent
{
    public static function default(): array
    {
        return [
            'heroTitle' => 'Компания ISON представила новинки бренда на главной выставке систем безопасности Securika',
            'videoUrl' => 'https://vkvideo.ru/video-54731764_456242037',
            'catalogTitle' => 'Полистайте каталог оборудования ISON',
            'galleryTitle' => 'Фото с выставки',
        ];
    }
}
