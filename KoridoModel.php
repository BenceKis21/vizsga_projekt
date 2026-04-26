<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class KoridoModel extends Model
{
    protected $table = "koridok";
    protected $fillable = ["futott_korido","datum","kocsi_rajtszama","userid"];
    public $timestamps = false;

    static public function leker()
    {
        $laptimes=KoridoModel::select("*")->orderBy("futott_korido", "asc")->limit(50)->get();
        return $laptimes;
    }

    static public function userleker($id)
    {
        $laptimes=KoridoModel::select("*")->where("userid",$id)->orderBy("futott_korido", "asc")->limit(50)->get();
        return $laptimes;
    }



}
