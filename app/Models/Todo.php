<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    protected $guarded = ['id'];
    protected $hidden = ['user_id', 'created_at', 'updated_at'];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
