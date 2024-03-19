<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $medicines = [
            [
                'name' => 'Rosel',
                'quantity' => 24,
                'unit' => 'capsules',
                'expires_at' => today()->addMonths(10),
                'active_ingredients' => [
                    [
                        'name' => 'Amantadina',
                        'quantity' => 50,
                        'unit' => 'miligrams'
                    ],
                    [
                        'name' => 'Clorfenamina',
                        'quantity' => 3,
                        'unit' => 'miligrams'
                    ],
                    [
                        'name' => 'Paracetamol',
                        'quantity' => 300,
                        'unit' => 'miligrams'
                    ],
                ]
            ],
            [
                'name' => 'Dialgin',
                'quantity' => 20,
                'unit' => 'tablets',
                'expires_at' => today()->addMonths(3),
                'active_ingredients' => [
                    [
                        'name' => 'Diyodohidroxiquinoleina',
                        'quantity' => 200,
                        'unit' => 'miligrams'
                    ],
                    [
                        'name' => 'Furazolidona',
                        'quantity' => 50,
                        'unit' => 'miligrams'
                    ],
                    [
                        'name' => 'Homatropina',
                        'quantity' => 2,
                        'unit' => 'miligrams'
                    ],
                ]
            ],
            [
                'name' => 'Precicol',
                'quantity' => 20,
                'unit' => 'tablets',
                'expires_at' => today()->subMonths(1),
                'active_ingredients' => [
                    [
                        'name' => 'Hioscina',
                        'quantity' => 10,
                        'unit' => 'miligrams'
                    ],
                    [
                        'name' => 'Paracetamol',
                        'quantity' => 500,
                        'unit' => 'miligrams'
                    ]
                ]
            ]
        ];

        foreach ($medicines as $medicineData) {
            $medicine = $user->medicines()
                ->create(
                    Arr::only($medicineData, [
                        'name',
                        'quantity',
                        'unit',
                        'expires_at',
                    ])
                );

            $medicine->active_ingredients()->createMany(
                $medicineData['active_ingredients']
            );
        }
    }
}
