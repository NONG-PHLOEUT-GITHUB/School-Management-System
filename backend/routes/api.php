<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\UserController;
use Illuminate\Auth\Events\Authenticated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

// user routes //
Route::post('/user', [UserController::class,'store']);
Route::get('/users', [UserController::class,'index']);
Route::get('count', [UserController::class,'getTotalStudent']);
Route::get('count/teacher', [UserController::class,'getTotalTeacher']);
// Route::post('login',[AuthController::class,'login']);

Route::post('/classroom',[ClassroomController::class,'store']);
// Route::get('/classrooms',[ClassroomController::class,'index']);
Route::get('/classrooms',[ClassroomController::class,'getAllClassrooms']);
Route::post('/forgot-password', [ForgotPasswordController::class,'SendEmailResetPassword']);
Route::post('/reset-new-password/{token}', [ForgotPasswordController::class,'resetNewPassword']);


Route::prefix('v2')->group(function () {
    Route::prefix('auth')->group(function () {

        // Login User
        Route::post('login',[AuthController::class,'login']);
        
        // Refresh the JWT Token
        Route::get('refresh', 'AuthController@refresh');
        
        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info
            Route::get('user', [AuthController::class,'user']);

            // Logout user from application
            Route::post('logout', [AuthController::class,'logout']);

            // count students
            Route::get('count', [UserController::class,'getTotalStudent']);
        });
    });
});