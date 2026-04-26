<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KoridoModel;
class KoridoController extends Controller
{
    public function koridoleker()
    {
        $laptimes=KoridoModel::leker();
        return response()->json($laptimes,200);
    }

    public function userkoridoleker($id)
    {
        $laptimes=KoridoModel::userleker($id);
        return response()->json($laptimes,200);
    }
}
