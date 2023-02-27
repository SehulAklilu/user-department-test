<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([], function(){
    Route::apiResource('users', UserController::class);
    Route::apiResource('departments', DepartmentController::class);
});
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
