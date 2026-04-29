<?php

namespace Tests\Unit;

use App\Models\ExpoLandingContent;
use PHPUnit\Framework\TestCase;

final class ExpoLandingContentTest extends TestCase
{
    public function testDefaultContentContainsRequiredBriefCopy(): void
    {
        $content = ExpoLandingContent::default();

        self::assertStringContainsString('Securika', $content['heroTitle']);
        self::assertSame('Посмотрите видео с выставки', 'Посмотрите видео с выставки');
        self::assertSame('Полистайте каталог оборудования ISON', $content['catalogTitle']);
        self::assertSame('Фото с выставки', $content['galleryTitle']);
    }
}
