<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class ActiveIngredient extends Model
{
    use HasFactory, HasUuids;

    public function medicine():BelongsTo
    {
        return $this->belongsTo(Medicine::class);
    }

    protected $fillable = ['name','quantity','unit',];
}
