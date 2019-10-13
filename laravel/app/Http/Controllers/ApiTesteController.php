<?php

namespace App\Http\Controllers;
use Illuminate\Routing\Controller;

use Illuminate\Http\Request;

class ApiTesteController extends Controller
{
    public function index(Request $request){
        dd($request->user());
        if ($request->user())
        {
            // Auth::user() returns an instance of the authenticated user...
                return response()
        ->json(['user' => $request->user(), 'state' => 'CA']);
        }

    // public function index(){
    //     return response()
    //     ->json(['name' => 'Jorge', 'state' => 'CA']);
    }
}
