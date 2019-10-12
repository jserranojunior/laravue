<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiTesteController extends Controller
{
    public function index(){
        return response()
        ->json(['name' => 'Jorge', 'state' => 'CA']);
    }
}
