<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function index(){
        return DepartmentResource::collection(Departments::all());
    }

    public function show(Departments $department){
        return new UserResource($department); 
    }

    public function store(StoreUserRequest $request){
        User::create($request->validated());
        return response()->json("User Created");
    }

    public function update(StoreDepartmentRequest $request, Departments $department){
        $skill->update($request->validated());
        return response()->json("User Updated");
    }
    public function destroy(Departments $department)
    {
        $department->delete();
        return response()->json("User Deleted");
    }
}
