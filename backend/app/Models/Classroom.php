<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classroom extends Model
{
    use HasFactory;

    protected $fillable = [
        'classroom_name',
        'description',
        'class_coordinator_id',
        'user_id'
        
    ];

    
    public static function store($request, $id = null)
    {
        $classrooms = $request->only(
            'classroom_name',
            'description',
            'class_coordinator_id',
        );
        if ($id) {
            $classroom = self::find($id);
            if (!$classrooms) {
                return response()->json(['error' => 'Record not found'], 404);
            }
            $classroom->update($classrooms);
        } else {
            $classroom = self::create($classrooms);
            $id = $classroom->$id;
        }
        // Sync the related teachers
        $teacherIds = $request->input('user_id', []);
        if (empty($teacherIds)) {
            return response()->json(['error' => 'No teachers selected'], 400);
        }
        if (!$classroom->save()) {
            return response()->json(['error' => 'Error saving class room record'], 500);
        }
        $classroom->teachers()->sync($teacherIds);

        return response()->json(['success' => true, 'data' => $classroom], 201);
    }


    // get by attributes
    protected $appends = ['student_count'];

    public function getStudentCountAttribute()
    {
        return $this->students()->count();
    }

    // one class have many teacher also one teacher has many classes
    public function teachers()
    {
        return $this->belongsToMany(User::class, 'classroom_teachers','classroom_id','user_id');
    }

    public function students()
    {
        return $this->hasMany(User::class)->where('role', 3);
    }

    // public function teachers()
    // {
    //     return $this->belongsToMany(User::class, 'classroom_teacher', 'classroom_id', 'user_id');
    // }
}
