<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
class User extends Authenticatable implements JWTSubject 
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'role',
        'first_name',
        'last_name',
        'gender',
        'age',
        'date_of_birth',
        'phone_number',
        'address',
        'profile',
        'email',
        'password',
        'class_room_id',
        'guardian_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

       /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier() {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims() {
        return [];
    }    
    // model create 

    public static function store($request, $id = null)
    {
        $users = $request->only(
            'id',
            'role',
            'first_name',
            'last_name',
            'gender',
            'age',
            'date_of_birth',
            'phone_number',
            'address',
            'profile',
            'email',
            'password',
            // 'class_room_id',
            // 'guardian_id',
        );
        if ($id) {
            $user = self::find($id);
            if (!$user) {
                return response()->json(['error' => 'Record not found'], 404);
            }
            $user->update($users);
        } else {
          
            // $password = Str::random(8);
            // $users['password'] = bcrypt($password);

            $user = self::create($users);
            $id = $user->$id;

            // // Send an email notification to the user
            // Mail::send('email.new_user', ['user' => $user, 'password' => $password], function ($message) use ($user) {
            //     $message->to($user->email, $user->first_name)->subject('Welcome to our system!');
            // });
        }

        // ================token user password=================
        return response()->json(['success' => true, 'data' => $user], 201);
    }

}
