<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VendegController;
use App\Http\Controllers\KoridoController;
use App\Http\Controllers\FoglalasController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/vendegek',[VendegController::class,"vendegleker"]);
Route::get('/koridok',[KoridoController::class,"koridoleker"]);
Route::get('/foglalasok',[FoglalasController::class,"foglalasleker"]);
Route::post('/foglal',[FoglalasController::class,"foglalasindit"]);
Route::post('/regiszt',[VendegController::class,"vendegfelvisz"]);
Route::get('/profil/{id}',[KoridoController::class,"userkoridoleker"]);
Route::post('/bejelentkezes',[VendegController::class,"vendegbelep"]);