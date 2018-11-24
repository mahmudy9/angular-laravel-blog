<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Facades\Auth;
use App\Article;
use App\User;
use App\Http\Resources\Articles;
use App\Image;

class ArticleController extends Controller
{

    public function __construct() 
    {
        $this->middleware('api')->except(['get_articles']);
    }
    
    public function get_articles()
    {
        $articles = Article::paginate(15);
        if(!$articles)
        {
            return response()->json(['articles' => 'No articles found'] , 404);
        }
        return Articles::collection($articles);
    }

    public function getmyarticles()
    {
        $id = auth()->user()->id;
        $articles = Article::where('user_id' , $id)->get();
        return Articles::collection($articles);
    }


    public function create_article(Request $request)
    {
        $validator = Validator::make($request->all() , [
            'body' => 'required|min:10|max:255'
        ]);
        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()] , 400);
        }

        $article = new Article;
        $article->user_id = $request->user()->id;
        $article->body = $request->input('body');
        $article->save();

        return response()->json(['article' => $article] , 200);
    }


    public function edit_article($id , Request $request)
    {
        $article = Article::find($id);
        if(!$article)
        {
            return response()->json(['error' => 'article not found'] , 404);
        }
        if(Article::find($id)->user_id != auth()->user()->id) 
        {
            return response()->json(['error' => 'unauthorized to edit article', 401]);
        }

        $validator = Validator::make($request->all() , [
            'body' => 'required|min:10|max:255'
        ]);

        if($validator->fails())
        {
            return response()->json(['errors' => $validator->errors()] , 400);
        }

        $article->body = $request->input('body');
        $article->save();
        return response()->json(['article' => $article], 200);
    }


    public function delete_article($id)
    {
        if(!Article::find($id))
        {
            return response()->json(['error' => 'article not found'], 404);
        }
        if(Article::find($id)->user_id != auth()->user()->id) 
        {
            return response()->json(['error' => 'unauthorized to delete article', 401]);
        }


        $article = Article::find($id);
        $article->delete();
        return response()->json(['success' => 'Article Deleted'] , 200);
    }


}
