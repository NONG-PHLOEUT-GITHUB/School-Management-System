<?php

namespace App\Http\Controllers;

use App\Http\Resources\ClassroomResource;
use App\Models\Classroom;
use App\Models\User;
use Illuminate\Http\Request;

class ClassroomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $classrooms = Classroom::all();
    //     ClassroomResource::collection($this->classrooms),
    //     return response()->json(['success' => true, 'data' => $classrooms], 200);
    // }
    public function index()
    {
        $classrooms = Classroom::all();
        $transformedClassrooms = ClassroomResource::collection($classrooms);

        return response()->json(['success' => true, 'data' => $transformedClassrooms], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $classroom = Classroom::store($request);
        return $classroom;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $classroom = Classroom::find($id);

        if (!$classroom) {
            return response()->json(['message' => 'The record with ID ' . $id . ' was not found.'], 404);
        }

        return response()->json(['success' => true, 'data' => $classroom], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $classroom = Classroom::store($request, $id);
        return $classroom;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $classroom = Classroom::find($id);

        if (!$classroom) {
            return response()->json(['message' => 'The record with ID ' . $id . ' was not found.'], 404);
        }

        $classroom->delete();

        return response()->json(['success' => true, 'message' => 'Classroom deleted successfully'], 200);
    }


    public function getAllClassrooms()
    {
        $classrooms = Classroom::withCount('students')
            ->select('classrooms.id', 'classrooms.classroom_name')->get();
    
        $classroomCount = $classrooms->count();
    
        return response()->json(['success' => true, 'data' => $classrooms, 'count' => $classroomCount], 200);
    }
    // public function getAllClassrooms()
    // {
    //     $classrooms = Classroom::withCount('students')
    //         ->select('classrooms.id', 'classrooms.classroom_name', 'teachers.first_name as teacher_first_name', 'teachers.last_name as teacher_last_name')
    //         ->leftJoin('users as teachers')
    //         ->where('teachers.role', 2)
    //         ->get();
    
    //     $classroomCount = $classrooms->count();
    
    //     return response()->json(['success' => true, 'data' => $classrooms, 'count' => $classroomCount], 200);
    // }

    public function countTotalClass()
    {
        $totalClassroom = ClassRoom::count();
        return response()->json(['success' => true, 'data' => $totalClassroom], 200);
    }

}
