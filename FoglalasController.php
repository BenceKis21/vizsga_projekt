<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FoglalasModel;
class FoglalasController extends Controller
{
     public function foglalasleker()
    {
        $reserve=FoglalasModel::leker();
        return response()->json($reserve,200);
    }

    public function foglalasindit(Request $request)
    {
        if(!$request->has("foglalt_idopont")||!$request->has("csomag")||!$request->has("resztvevok")||!$request->has("nev")||!$request->has("telefon")||!$request->has("email"))
            return response()->json("Hiányos adatok!",400);
        if($request["resztvevok"]>10)
            return response()->json("Túl sok a jelentkező!",400);
        $reserve = FoglalasModel::foglal($request->all());
            return response()->json($reserve,201);
    }
}
