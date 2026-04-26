<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VendegModel;
class VendegController extends Controller
{
    public function vendegleker()
    {
        $users=VendegModel::leker();
        return response()->json($users,200);
    }
    //regiszt
     public function vendegfelvisz(Request $request)
    {
        if(!$request->has("nev")||!$request->has("email")||!$request->has("telefon"))
            return response()->json(["error"=>"Hiányos adatok!"],400);

        $useremailellenoriz=VendegModel::where("email",$request->email)->exists();
        if($useremailellenoriz==true)
            return response()->json(["error"=>"Ez az email már használatban van!"],400);

        $usertelellenoriz=VendegModel::where("telefon",$request->telefon)->exists();
        if($usertelellenoriz==true)
            return response()->json(["error"=>"Ez az telefonszám már használatban van!"],400);
        $user = VendegModel::felvisz($request->all());
            return response()->json($user,201);
        
    }

    public function vendegbelep(Request $request)
    {
         if(!$request->has("email")||!$request->has("password"))
            return response()->json("Hiányos adatok!",400);

         $user = VendegModel::belep($request->email, $request->password);

         if($user)
            return response()->json($user,200);
        else
             return response()->json("nem ok",400);
    }
}
