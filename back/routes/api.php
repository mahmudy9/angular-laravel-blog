<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('signup' , 'AuthController@signup');

});

Route::post('/forgot-password' , 'Auth\ForgotPasswordController@sendResetLinkEmail');
Route::post('/create-article' , 'ArticleController@create_article');
Route::get('/get-articles' , 'ArticleController@get_articles');
Route::put('/editarticle/{id}' , 'ArticleController@edit_article');
Route::delete('/delete-article/{id}' , 'ArticleController@delete_article');
Route::post('/uploadimage' , 'AuthController@store_image');
Route::get('/images' , 'AuthController@images');
Route::delete('/deleteimage/{id}' , 'AuthController@deleteImage');
Route::get('/get-my-articles' , 'ArticleController@getmyarticles');