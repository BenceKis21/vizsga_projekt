<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\VendegModel;
class FoglalasModel extends Model
{
    
    protected $table = "foglalasok";
    protected $fillable = ["foglalas_ideje","foglalt_idopont","foglalo_id","csomag","resztvevok","nev","email","telefon"]; //plusz szemelyid 
    public $timestamps = false;

    static public function leker()
    {
        $reservation=FoglalasModel::select("*")->get();
        return $reservation;
    }

     static public function foglal($data)
    {
        $vendeg = VendegModel::where('email', $data["email"])
        ->where('telefon', $data["telefon"])
        ->first();
        $data["foglalo_id"]=$vendeg?$vendeg->id:NULL;
       return FoglalasModel::create([
        "foglalas_ideje"=>now(),
        "foglalt_idopont"=>$data["foglalt_idopont"],
        "foglalo_id"=>$data["foglalo_id"],
        "csomag"=>$data["csomag"],
        "resztvevok"=>$data["resztvevok"],
        "nev"=>$data["nev"],
        "email"=>$data["email"],
        "telefon"=>$data["telefon"]
       ]);
    }
}
