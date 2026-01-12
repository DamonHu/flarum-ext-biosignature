<?php

use Flarum\Extend;
use Flarum\Api\Serializer\UserSerializer;

return [
    // 1. 注册前端资源
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    // 2. 暴露 bio 字段到 API
    (new Extend\ApiSerializer(UserSerializer::class))
        ->attribute('bio', function ($serializer, $user) {
            // 注意：这里假设你的 users 表里有 bio 字段（或安装了 fof/user-bio）
            return $user->bio; 
        }),
];