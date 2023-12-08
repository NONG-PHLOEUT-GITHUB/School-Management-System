<?php

namespace App\Http\Controllers;

use App\Http\Resources\CommentResource;
use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = User::all();
        return response()->json(['success' => true, 'data' => $user], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = User::store($request);
        return $user;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'The record with ID ' . $id . ' was not found.'], 404);
        }

        return response()->json(['success' => true, 'data' => $user], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::store($request, $id);
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'The record with ID ' . $id . ' was not found.'], 404);
        }

        $user->delete();

        return response()->json(['success' => true, 'message' => 'User deleted successfully'], 200);
    }

    /**
     * get total student.
     */
    public function getTotalStudent(){
        $totalStudents = User::where('role', 3)->count();
        return $totalStudents;
    }
     /**
     * get total teacher.
     */
    public function getTotalTeacher(){
        $totalTeachers = User::where('role', 2)->count();
        return $totalTeachers;
    }

    public function getClassCoordinator(){
        $classCoordinators = User::where('role', 2)->select('first_name', 'last_name', 'id')->get();
        $classCoordinators->each(function ($coordinator) {
            $coordinator->full_name = $coordinator->first_name . ' ' . $coordinator->last_name;
        });
        return response()->json(['success' => true, 'data' => $classCoordinators], 200);
    }


     // ----------------------get comment for student------------------------
    
     public function getCommentForStudent($user_id, $teacher_id)
     {
         $comments = Comment::where('user_id', $user_id)
                     ->where('teacher_id', $teacher_id)
                     ->get();
         $comment = CommentResource::collection($comments);
         return response()->json(['comments' => $comment]);
     }
}
