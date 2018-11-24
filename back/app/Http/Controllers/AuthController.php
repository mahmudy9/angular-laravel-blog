<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\User;
use Illuminate\Support\Facades\Hash;
use App\Image;
use Illuminate\Support\Facades\Storage;

class AuthController extends Controller
{
     /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login' , 'signup']]);
    }



    public function signup(Request $request) 
    {
        $data = json_decode($request->getContent() , true);
        //dd($data);
        $validator = Validator::make($data , [
            'name' => 'required|min:3|max:100',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6|max:100',
            'password_confirmation' => 'required|same:password'
        ]);
        if($validator->fails()) 
        {
            return response()->json(['errors' => $validator->errors()] , 400);
        }

        $user = new User;
        $user->name = $data['name'];
        $user->email = $data['email'];
        $user->password = Hash::make($data['password']);
        $user->save();
        return response()->json(['success' => 'user created successfully'] , 200);        
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
            
        ]);
    }


    public function store_image(Request $request)
    {
        if($request->file('image')){
        $image_path = $request->file('image')->store('public/');
        $image_name = pathinfo($image_path , PATHINFO_BASENAME);
        $url = url('storage/'.$image_name);
        $image = new Image;
        $image->user_id = auth()->user()->id;
        $image->image = $url;
        $image->save();
        return response()->json(['image' => $image] , 200);
        }else{
            return response()->json(['error' => 'image is required' ], 400);
        }
    }


    public function images()
    {
    
        $userID = auth()->user()->id;
        $images = Image::where('user_id' , $userID)->get();
        if($images)
        {
            return response()->json(['images' => $images] , 200);
        }
        else
        {
            return response()->json(['message' => 'no images for you yet'] , 200);
        }
    }

    public function deleteImage($id)
    {
        if(!Image::find($id))
        {
            return response()->json(['error' => 'no such file'] , 404);
        }

        if(Image::find($id)->user_id != auth()->user()->id)
        {
            return response()->json(['error' => 'unauthorized'] , 401);
        }

        $image = Image::find($id);
        $imagename = pathinfo($image->image , PATHINFO_BASENAME);
        $image->delete();
        Storage::delete('public/'.$imagename);
        return response()->json(['success' => 'image deleted'] , 200);
    }

}
