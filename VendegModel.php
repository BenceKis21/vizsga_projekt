<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VendegModel extends Model
{
    protected $table = "vendeg";
    protected $fillable = ["nev","telefon","email","jelszo"];
    public $timestamps = false;

    static public function leker()
    {
        $users=VendegModel::select("*")->get();
        return $users;
    }

     static public function felvisz($data)
    {
       return VendegModel::create([
        "nev"=>$data["nev"],
        "telefon"=>$data["telefon"],
        "email"=>$data["email"],
        "jelszo"=>$data["jelszo"]
       ]);
    }

    static public function belep($email,$jelszo)
    {
        $user=VendegModel::select("*")->where("email",$email)->where("jelszo",$jelszo)->limit(1)->get();
        return $user;
    }
}
