<?php

use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\ClassroomController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\TelegramController;
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


// Route::get('/getComments', [CommentController::class, 'index']);
Route::post('/comments', [CommentController::class, 'store']);
// Route::put("/comments", [CommentController::class, 'update']);
Route::get("/get-comments-student/{user_id}/{teacher_id}", [UserController::class, "getCommentForStudent"]);


// user routes //
Route::post('/user', [UserController::class,'store']);
Route::get('/users', [UserController::class,'index']);
Route::get('/class-coordinator', [UserController::class,'getClassCoordinator']);
Route::get('count', [UserController::class,'getTotalStudent']);
Route::get('count/teacher', [UserController::class,'getTotalTeacher']);
// Route::post('login',[AuthController::class,'login']);

Route::post('/classroom',[ClassroomController::class,'store']);
// Route::get('/classrooms',[ClassroomController::class,'index']);
Route::get('/classrooms',[ClassroomController::class,'getAllClassrooms']);


Route::post('/change-password', [VerificationController::class,'changePassword']);
Route::post('/forgot-password', [ForgotPasswordController::class,'SendEmailResetPassword']);
Route::post('/reset-new-password/{token}', [ForgotPasswordController::class,'resetNewPassword']);

///telegram bot
Route::post('/telegram/send-message', [TelegramController::class,'sendMessage']);

Route::prefix('v2')->group(function () {
    Route::prefix('auth')->group(function () {

        // Login User
        Route::post('login',[AuthController::class,'login']);
        
        // Refresh the JWT Token
        Route::get('refresh-token', [AuthController::class,'refresh']);
        
        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info
            Route::get('user', [AuthController::class,'user']);

            // Logout user from application
            Route::post('logout', [AuthController::class,'logout']);

            // count students
            Route::get('count', [UserController::class,'getTotalStudent']);

            //get students attendance
            Route::get('student/attendances',[AttendanceController::class,'index']);
            Route::get('student/attendance/{studentID}',[AttendanceController::class,'show']);
            Route::post('student/attendances',[AttendanceController::class,'store']);
            Route::put('student/attendances',[AttendanceController::class,'update']);
            Route::delete('student/attendances',[AttendanceController::class,'destroy']);
        });
    });
});