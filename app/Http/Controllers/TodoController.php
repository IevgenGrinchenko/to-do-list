<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;


class TodoController extends Controller
{
    /**
     * @return mixed
     */
    public function index()
    {
        return Auth::user()->todos()->get();
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id)
    {
        $user = Auth::user();
        $todo = $user->todos()->find($id);
        $checkOwnership = Gate::authorize('delete', $todo);
        if ($checkOwnership->allowed()) {
            $todo->delete();
        }
        return $user->todos()->get();

    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function add(Request $request)
    {
        $user = Auth::user();
        $todoName = $request->input('newItem');
        $user->todos()->create(['name' => $todoName]);
        return $user->todos()->get();
    }
}
