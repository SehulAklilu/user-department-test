<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(){
        return UserResource::collection(Users::all());
    }

    public function show(Users $user){
        return new UserResource($user); 
    }

    public function store(StoreUserRequest $request){
        User::create($request->validated());
        return response()->json("User Created");
    }

    public function update(StoreUserRequest $request, Users $user){
        $skill->update($request->validated());
        return response()->json("User Updated");
    }
    public function destroy(Users $user)
    {
        $user->delete();
        return response()->json("User Deleted");
    }
}
