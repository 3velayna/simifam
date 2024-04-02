<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Medicine extends Model
{
    use HasFactory, HasUuids;

    protected $casts = [
        'expires_at' => 'datetime:Y-m-d',
    ];

    public function owner():BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function active_ingredients(): HasMany
        {
            return $this->hasMany(ActiveIngredient::class);
        }

    protected $fillable = ['name','quantity','unit','expires_at'];

    protected $with = ['active_ingredients'];
}
