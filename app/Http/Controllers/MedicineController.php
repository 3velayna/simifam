<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMedicineRequest;
use App\Http\Requests\UpdateMedicineRequest;
use App\Models\Medicine;
use Inertia\Inertia;
use App\Models\User;

class MedicineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(){
    $this->authorize('viewAny', Medicine::class);
    $user = auth()->user();
    $medicines = $user->medicines;
            return Inertia::render('Medicines/Index',[
                'medicines'=>$medicines,
            ]);
        }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Medicines/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMedicineRequest $request)
    {
        $attr=$request->validated();
        /** @var User */
        $user=auth()->user();
        $medicine = $user->medicines()->create($attr);

        foreach ($attr['active_ingredients'] as $activeIngredient) {
            /** Aquí viene el código para guardar cada ingrediente activo */
            $medicine->active_ingredients()->create($activeIngredient);
          }
        return to_route('medicines.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Medicine $medicine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Medicine $medicine)
    {
        return Inertia::render('Medicines/Create');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMedicineRequest $request, Medicine $medicine)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Medicine $medicine)
    {
        //
    }
}
