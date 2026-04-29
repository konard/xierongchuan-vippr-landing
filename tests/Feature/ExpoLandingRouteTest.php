<?php

namespace Tests\Feature;

use Tests\TestCase;

final class ExpoLandingRouteTest extends TestCase
{
    public function testExpoRouteLoads(): void
    {
        $this->get('/expo')->assertOk();
    }
}
