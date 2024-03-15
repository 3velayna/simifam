<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActiveIngredient extends Model
{
    use HasFactory;

    public function medicine():BelongsTo
    {
        return $this->belongsTo(Medicine::class);
    }

    protected $fillable = ['name','quantity','unit',];
}
